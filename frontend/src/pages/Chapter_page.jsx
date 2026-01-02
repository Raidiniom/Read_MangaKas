import { useParams } from "react-router-dom";
import { getMangaBySlug } from "../data/mockData";
import "../styles/chapter_page.css"
import { useEffect, useState } from "react";

// Hardcoded total pages for simplicity; in a real app, this would come from manga data. plus helped by GenAI

export default function Chapter_page() {
    const { title: slug, lang: language, chapterNumber: chaptNum } = useParams();
    const manga = getMangaBySlug(slug);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = manga?.pages || 32;

    const goToPreviousPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "ArrowLeft") {
                goToPreviousPage();
            } else if (event.key === "ArrowRight") {
                goToNextPage();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <>
            <div className="chapter-body">
                <div className="info-header">
                    <h4>{(language === "en") ? manga.title : manga.title_jp} Chapter {chaptNum} - {currentPage}/{totalPages} </h4>
                </div>
                
                <div className="page-container">
                    <div className="image-container">
                        {/* manga page here! */}
                        <img 
                            src={`/path/to/manga/${slug}/page-${currentPage}.jpg`} 
                            alt={`Page ${currentPage}`}
                            className="manga-page"
                        />
                        
                        {/* Overlay navigation buttons */}
                        <div className="nav-overlay">
                            <div 
                                className="nav-btn prev-btn" 
                                onClick={goToPreviousPage}
                                title="←"
                            >
                            </div>
                            
                            <div 
                                className="nav-btn next-btn" 
                                onClick={goToNextPage}
                                title="→"
                            >
                            </div>
                        </div>
                    </div>
                </div>

                <div className="progress-container">
                    <div 
                        className="progress-bar"
                        style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></div>
                </div>
            </div>
        </>
    )
}