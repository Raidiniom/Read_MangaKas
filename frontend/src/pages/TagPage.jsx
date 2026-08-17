import "../styles/tag_page.css";
import { useParams } from "react-router-dom"
import { searchByTag } from "../data/mockData";
import MangaCard from "../components/MangaCard";

export default function TagPage() {
    const { tag } = useParams();
    const manga = searchByTag(tag);
    
    return (
        <>
            <div className="tag-body">
                <div className="tagged-manga">
                    <h2>{tag}</h2>
                    
                    <div className="manga-grid">
                        {manga.map((manga, index) => (
                            <MangaCard key={index} manga_id={manga.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}