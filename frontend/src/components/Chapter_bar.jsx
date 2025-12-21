import { Link } from "react-router-dom";
import "../styles/chapter_bar.css";


export default function Chapter_bar({ manga = {}, chapeterNumber }) {

    return (
        <>
            <Link to={`/manga/${manga.slug}/chapter/${chapeterNumber}`} style={{ textDecoration: 'none' }}>
                <div className="bar-body">
                    <h2>{manga.title}</h2>
                    <h3>Chapter {chapeterNumber}</h3>
                </div>
            </Link>
        </>
    )
}