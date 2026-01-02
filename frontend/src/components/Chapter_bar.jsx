import { Link } from "react-router-dom";
import "../styles/chapter_bar.css";


export default function Chapter_bar({ manga = {}, chapterNumber, dateUploaded }) {

    return (
        <>
            <div className="bar-body">
                <h3 className="chapter-number">Chapter {chapterNumber}</h3>

                <div className="chapter-links">
                    <h3>{dateUploaded}</h3>
                    <Link to={`/manga/${manga.slug}/chapter/${chapterNumber}`}>EN</Link>
                    <Link to={`/manga/${manga.slug}/chapter/${chapterNumber}`}>JP</Link>
                </div>
            </div>
        </>
    )
}