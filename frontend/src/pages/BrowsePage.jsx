import { useState, useMemo } from "react";
import HeaderPart from "../components/HeaderPart";
import MangaCarousel from "../components/MangaCarousel";
import Manga_card from "../components/MangaCard";
import "../styles/browse_page.css";
import { getRandomMangas, searchMangas } from "../data/mockData";

export default function BrowsePage() {
    const [query, setQuery] = useState("");

    // Stable random lists so they don't reshuffle on every keystroke re-render
    const [manglist1] = useState(() => getRandomMangas(15));
    const [manglist2] = useState(() => getRandomMangas(15));
    const [manglist3] = useState(() => getRandomMangas(15));

    const searchResults = useMemo(() => {
        if (!query.trim()) return [];
        return searchMangas(query, 30);
    }, [query]);

    const isSearching = query.trim().length > 0;

    return (
        <>
            <div className="browse-body">
                <HeaderPart />

                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search by title, author, or tag..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {isSearching && (
                        <button
                            className="search-clear-btn"
                            onClick={() => setQuery("")}
                            aria-label="Clear search"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {isSearching ? (
                    <div className="browse-container">
                        <h2 className="search-results-title">
                            Results for "{query}" ({searchResults.length})
                        </h2>

                        {searchResults.length > 0 ? (
                            <div className="search-results-grid">
                                {searchResults.map((manga) => (
                                    <Manga_card key={manga.id} manga_id={manga.id} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <p>No manga found matching "{query}"</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="browse-container">
                        <div className="trending-container">
                            <MangaCarousel title="Trending" mangalist={manglist1} />
                        </div>
                        <div className="popular-container">
                            <MangaCarousel title="Popular" mangalist={manglist2} />
                        </div>
                        <div className="more-container">
                            <MangaCarousel title="More" mangalist={manglist3} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}