import { Link } from "react-router-dom";

import "../styles/manga_bar.css";

export default function Manga_bar({ title }) {
    return (
        <Link to={`/manga/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="manga-bar-link"
        >
            <div className="manga-bar-simple">
                <h3 className="manga-title-simple">{title}</h3>
            </div>
        </Link>
    );
}