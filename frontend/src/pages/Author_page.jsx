import { Link, useParams } from "react-router-dom";
import { searchByAuthor } from "../data/mockData";
import Manga_card from "../components/Manga_card";
import "../styles/author_page.css";

export default function Author_page() {
    const { authorName } = useParams();
    const authorMangas = searchByAuthor(authorName);
    const displayName = decodeURIComponent(authorName || "");

    // Example social links - you can customize these
    const authorLinks = [
        { name: "Twitter", url: "#", icon: "🐦" },
        { name: "Instagram", url: "#", icon: "📷" },
        { name: "Website", url: "#", icon: "🌐" },
        { name: "Pixiv", url: "#", icon: "🎨" },
        { name: "Youtube", url: "#", icon: "▶️" },
    ];

    return (    
        <div className="author-body">
            <div className="author-details">
                <img 
                    src="/profile_button.png" 
                    alt={`${displayName} profile`} 
                    className="author-pic" 
                    onError={(e) => {
                        e.target.src = "/default-profile.png";
                    }}
                />
                
                <div className="author-info">
                    <h1 className="author-name">{displayName}</h1>
                    <p className="author-stats">
                        {authorMangas.length} works • {authorMangas.reduce((sum, manga) => sum + (manga.views || 0), 0).toLocaleString()} total views
                    </p>
                </div>
                
                <div className="author-links-container">
                    <h3 className="author-links-title">Connect</h3>
                    <div className="author-links">
                        {authorLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.url} 
                                className="author-link"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <span className="link-icon">{link.icon}</span>
                                <span className="link-text">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            <h2>Published Works</h2>
            
            {authorMangas.length > 0 ? (
                <div className="manga-grid">
                    {authorMangas.map((manga) => (
                        <Manga_card key={manga.id} manga_id={manga.id} />
                    ))}
                </div>
            ) : (
                <div className="no-works">
                    <p>No works found by {displayName}</p>
                </div>
            )}
        </div>
    );
}