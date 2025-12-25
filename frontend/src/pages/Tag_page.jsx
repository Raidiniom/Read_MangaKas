import { useParams } from "react-router-dom"
import { searchByTag } from "../data/mockData";
import Manga_card from "../components/Manga_card";

export default function Tag_page() {
    const { tag } = useParams();
    const manga = searchByTag(tag);
    
    return (
        <>
            <div className="tag-body">
                <div className="tag-container">
                    <h2>{tag}</h2>
                    
                    <div className="manga-grid">
                        {manga.map((manga, index) => (
                            <Manga_card key={index} manga_id={manga.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}