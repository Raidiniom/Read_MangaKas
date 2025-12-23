
import { useParams } from "react-router-dom";
import { searchByAuthor } from "../data/mockData";
import Manga_card from "../components/Manga_card";

export default function Author_page() {
    const { authorName } = useParams(); // Get from URL
    const authorMangas = searchByAuthor(authorName);

    console.log(authorMangas)

    // Optional: handle URL decoding for special characters
    const displayName = decodeURIComponent(authorName || "");

    if (!authorName) {
        return <div>No author specified</div>;
    }

    return (
        <div className="author-body">
            <h1>Works by {displayName}</h1>
            <div className="manga-grid">
                {authorMangas.map((manga, index) => (
                    <Manga_card key={index} manga_id={manga.id} />
                ))}
            </div>
        </div>
    );
}