import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Manga_header from "../components/Manga_header";
import Chapter_bar from "../components/Chapter_bar";
import "../styles/manga_page.css";
import { getMangaBySlug } from "../data/mockData";

export default function Manga_Page() {
    const { title: slug } = useParams();
    const manga = getMangaBySlug(slug);
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [chaptersPerPage, setChaptersPerPage] = useState(50);
    
    const totalChapters = manga?.chapters || 0;
    const totalPages = Math.ceil(totalChapters / chaptersPerPage);
    
    // Calculate which chapters to show
    const startIndex = (currentPage - 1) * chaptersPerPage;
    const endIndex = Math.min(startIndex + chaptersPerPage, totalChapters);
    
    // Create chapters for current page only
    const currentChapters = [];
    for (let i = startIndex; i < endIndex; i++) {
        currentChapters.push(i + 1); // Chapter numbers (1-based)
    }
    
    // Handle page change
    const goToPage = (page) => {
        setCurrentPage(page);

        document.querySelector('.chapter-container')?.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Reset to page 1 when manga changes
    useEffect(() => {
        setCurrentPage(1);
    }, [slug]);

    // If manga not found
    if (!manga) {
        return (
            <div className="manga-body">
                <h2>Manga not found</h2>
            </div>
        );
    }

    return (
        <div className="manga-body">
            <Manga_header manga_id={manga.id} />
            
            <div className="chapter-container">
                {/* Header with pagination info */}
                <div className="chapter-header">
                    <h2>Chapters ({totalChapters})</h2>
                    <div className="page-info">
                        Page {currentPage} of {totalPages} • 
                        Showing chapters {startIndex + 1}-{endIndex}
                    </div>
                </div>
                
                {/* Chapters list */}
                <div className="chapters-list">
                    {currentChapters.map((chapterNum) => (
                        <Chapter_bar 
                            key={chapterNum} 
                            manga={manga} 
                            chapterNumber={chapterNum} 
                            dateUploaded='today' 
                        />
                    ))}
                </div>
                
                {/* Pagination controls */}
                <div className="pagination">
                    {/* Previous button */}
                    <button 
                        className="pagination-btn prev"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ← Previous
                    </button>
                    
                    {/* Page numbers */}
                    <div className="page-numbers">
                        {/* Always show first page */}
                        <button 
                            className={`page-number ${currentPage === 1 ? 'active' : ''}`}
                            onClick={() => goToPage(1)}
                        >
                            1
                        </button>
                        
                        {/* Show ... if needed */}
                        {currentPage > 3 && <span className="ellipsis">...</span>}
                        
                        {/* Show pages around current */}
                        {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                            let pageNum;
                            if (totalPages <= 7) {
                                pageNum = i + 1;
                            } else if (currentPage <= 4) {
                                pageNum = i + 2; // Show 2-6
                            } else if (currentPage >= totalPages - 3) {
                                pageNum = totalPages - 5 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }
                            
                            // Skip first and last pages (already shown)
                            if (pageNum <= 1 || pageNum >= totalPages) return null;
                            
                            return (
                                <button
                                    key={pageNum}
                                    className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
                                    onClick={() => goToPage(pageNum)}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                        
                        {/* Show ... if needed */}
                        {currentPage < totalPages - 2 && totalPages > 7 && (
                            <span className="ellipsis">...</span>
                        )}
                        
                        {/* Always show last page if more than 1 page */}
                        {totalPages > 1 && (
                            <button 
                                className={`page-number ${currentPage === totalPages ? 'active' : ''}`}
                                onClick={() => goToPage(totalPages)}
                            >
                                {totalPages}
                            </button>
                        )}
                    </div>
                    
                    {/* Next button */}
                    <button 
                        className="pagination-btn next"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next →
                    </button>
                    
                    {/* Chapters per page selector */}
                    <div className="per-page-selector">
                        <span>Show:</span>
                        <select 
                            value={chaptersPerPage}
                            onChange={(e) => {
                                setChaptersPerPage(Number(e.target.value));
                                setCurrentPage(1); // Reset to first page
                            }}
                        >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}