import { Link, useParams } from "react-router-dom";
import { searchByAuthor } from "../data/mockData";
import Manga_card from "../components/Manga_card";

import "../styles/author_page.css"

export default function Author_page() {
    const { authorName } = useParams();
    const authorMangas = searchByAuthor(authorName);
    const displayName = decodeURIComponent(authorName || "");

    const authlinks = [
        "#",
        "#",
        "#",
    ]

return (    
        <div className="author-body">
            <div className="author-details">
                <img src="/profile_button.png" alt="" className="author-pic" />
                <h2 className="author-name">{displayName}</h2>

                <div className="author-links">
                    {authlinks.map((link, index) => (
                        <Link key={index} to={link}>link</Link>
                    ))}
                </div>
            </div>
            
            <h2>Works</h2>
            <div className="manga-grid">
                {authorMangas.map((manga, index) => (
                    <Manga_card key={index} manga_id={manga.id} />
                ))}
            </div>
        </div>
    );
}