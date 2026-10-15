import { Link, useNavigate, useParams } from "react-router-dom";
import { getMangaBySlug } from "../data/mockData";
import "../styles/chapter_page.css"
import { useCallback, useEffect, useRef, useState } from "react";

// Hardcoded total pages for simplicity; in a real app, this would come from manga data. plus helped by GenAI

const SETTINGS_KEY = "reader-settings";
const DEFAULT_SETTINGS = {
    direction: "rtl", // manga is traditionally read right-to-left
    fit: "height",    // "height" | "width" | "original"
};

// Reader settings are remembered per browser
function useReaderSettings() {
    const [settings, setSettings] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
            return { ...DEFAULT_SETTINGS, ...saved };
        } catch {
            return DEFAULT_SETTINGS;
        }
    });

    const updateSetting = (key, value) => {
        setSettings(prev => {
            const next = { ...prev, [key]: value };
            try {
                localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
            } catch {
                // storage unavailable (private mode etc.) - keep in memory only
            }
            return next;
        });
    };

    return [settings, updateSetting];
}

export default function ChapterPage() {
    const { title: slug, lang: language, chapterNumber: chaptNum } = useParams();
    const navigate = useNavigate();
    const manga = getMangaBySlug(slug);

    const [currentPage, setCurrentPage] = useState(1);
    const [showSettings, setShowSettings] = useState(false);
    const [settings, updateSetting] = useReaderSettings();
    const imageContainerRef = useRef(null);

    const totalPages = manga?.pages || 32;
    const totalChapters = manga?.chapters || 0;
    const chapter = Number(chaptNum);
    const isRtl = settings.direction === "rtl";

    const chapterUrl = useCallback(
        (num, lang = language) => `/manga/${slug}/chapter/${lang}/${num}`,
        [slug, language]
    );

    const goToPreviousPage = useCallback(() => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    }, []);

    // On the last page, "next" moves on to the next chapter
    const goToNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (chapter < totalChapters) {
            navigate(chapterUrl(chapter + 1));
        }
    }, [currentPage, totalPages, chapter, totalChapters, navigate, chapterUrl]);

    // Reset to page 1 when switching manga, language, or chapter
    useEffect(() => {
        setCurrentPage(1);
    }, [slug, language, chaptNum]);

    // Start each new page from the top when it is taller than the screen
    useEffect(() => {
        imageContainerRef.current?.scrollTo(0, 0);
    }, [currentPage, chaptNum]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            // Don't hijack keys while using the chapter dropdown etc.
            if (event.target.closest?.("select, input, textarea")) return;

            if (event.key === "Escape") {
                setShowSettings(false);
            } else if (event.key === "ArrowLeft") {
                isRtl ? goToNextPage() : goToPreviousPage();
            } else if (event.key === "ArrowRight") {
                isRtl ? goToPreviousPage() : goToNextPage();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [goToPreviousPage, goToNextPage, isRtl]);

    // Clicking the left/right half of the page turns it, following the reading direction
    const handlePageClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const clickedLeft = event.clientX - rect.left < rect.width / 2;
        if (clickedLeft === isRtl) {
            goToNextPage();
        } else {
            goToPreviousPage();
        }
    };

    // If manga not found
    if (!manga) {
        return (
            <div className="chapter-body">
                <h2>Manga not found</h2>
                <Link to="/browse">Back to Browse</Link>
            </div>
        );
    }

    // If chapter number is invalid
    if (!Number.isInteger(chapter) || chapter < 1 || chapter > totalChapters) {
        return (
            <div className="chapter-body">
                <h2>Chapter not found</h2>
                <Link to={`/manga/${slug}`}>Back to {manga.title}</Link>
            </div>
        );
    }

    const otherLanguage = language === "en" ? "jp" : "en";

    return (
        <>
            <div className="chapter-body">
                <div className="reader-toolbar">
                    <div className="toolbar-group">
                        <Link to={`/manga/${slug}`} className="toolbar-btn" title="Back to manga">
                            ← <span className="toolbar-label">Back</span>
                        </Link>
                        <h4 className="reader-title">
                            {(language === "en") ? manga.title : manga.title_jp}
                        </h4>
                    </div>

                    <div className="toolbar-group">
                        <button
                            className="toolbar-btn"
                            onClick={() => navigate(chapterUrl(chapter - 1))}
                            disabled={chapter <= 1}
                            title="Previous chapter"
                        >
                            ‹ Prev
                        </button>

                        <select
                            className="chapter-select"
                            value={chapter}
                            onChange={(e) => navigate(chapterUrl(e.target.value))}
                            aria-label="Select chapter"
                        >
                            {Array.from({ length: totalChapters }, (_, i) => i + 1).map((num) => (
                                <option key={num} value={num}>Chapter {num}</option>
                            ))}
                        </select>

                        <button
                            className="toolbar-btn"
                            onClick={() => navigate(chapterUrl(chapter + 1))}
                            disabled={chapter >= totalChapters}
                            title="Next chapter"
                        >
                            Next ›
                        </button>
                    </div>

                    <div className="toolbar-group">
                        <Link
                            to={chapterUrl(chapter, otherLanguage)}
                            className="toolbar-btn"
                            title={`Switch to ${otherLanguage.toUpperCase()}`}
                        >
                            {language.toUpperCase()} → {otherLanguage.toUpperCase()}
                        </Link>
                        <button
                            className={`toolbar-btn ${showSettings ? "active" : ""}`}
                            onClick={() => setShowSettings(prev => !prev)}
                            aria-expanded={showSettings}
                            title="Reader settings"
                        >
                            ⚙ <span className="toolbar-label">Settings</span>
                        </button>
                    </div>

                    {showSettings && (
                        <div className="settings-panel">
                            <div className="setting-row">
                                <span>Reading direction</span>
                                <div className="setting-options">
                                    <button
                                        className={settings.direction === "rtl" ? "active" : ""}
                                        onClick={() => updateSetting("direction", "rtl")}
                                    >
                                        Right to left
                                    </button>
                                    <button
                                        className={settings.direction === "ltr" ? "active" : ""}
                                        onClick={() => updateSetting("direction", "ltr")}
                                    >
                                        Left to right
                                    </button>
                                </div>
                            </div>

                            <div className="setting-row">
                                <span>Page fit</span>
                                <div className="setting-options">
                                    <button
                                        className={settings.fit === "height" ? "active" : ""}
                                        onClick={() => updateSetting("fit", "height")}
                                    >
                                        Fit screen
                                    </button>
                                    <button
                                        className={settings.fit === "width" ? "active" : ""}
                                        onClick={() => updateSetting("fit", "width")}
                                    >
                                        Fit width
                                    </button>
                                    <button
                                        className={settings.fit === "original" ? "active" : ""}
                                        onClick={() => updateSetting("fit", "original")}
                                    >
                                        Original
                                    </button>
                                </div>
                            </div>

                            <p className="settings-hint">
                                Tip: use ← → keys or click either side of the page to turn pages.
                            </p>
                        </div>
                    )}
                </div>

                <div className="page-container">
                    <div
                        ref={imageContainerRef}
                        className={`image-container fit-${settings.fit}`}
                        onClick={handlePageClick}
                    >
                        {/* manga page here! */}
                        <img
                            src={`/path/to/manga/${slug}/page-${currentPage}.jpg`}
                            alt={`Page ${currentPage}`}
                            className="manga-page"
                        />
                    </div>
                </div>

                <div className="reader-footer">
                    <span>Chapter {chapter} • Page {currentPage} / {totalPages}</span>
                    {currentPage === totalPages && chapter < totalChapters && (
                        <Link to={chapterUrl(chapter + 1)} className="toolbar-btn">
                            Next chapter ›
                        </Link>
                    )}
                </div>

                {/* Fill from the reading side so it mirrors the page-turn direction */}
                <div className={`progress-container ${isRtl ? "rtl" : ""}`}>
                    <div
                        className="progress-bar"
                        style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></div>
                </div>
            </div>
        </>
    )
}
