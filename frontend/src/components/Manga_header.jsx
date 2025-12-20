import "../styles/manga_header.css";

import { getMangaById } from "../data/mockData";

export default function Manga_header({ manga_id }) {
    const manga = getMangaById(manga_id);

    return (
        <>
            <div className="header-body">
                <div className="manga-thumbnail">
                    <img src={manga.cover || ""} alt={manga.title || "Manga Thumbnail"} />
                </div>

                <div className="manga-details">
                    <h1 className="manga-titleEn">{manga.title}</h1>
                    <h2 className="manga-titleJp">{manga.title_jp}</h2>
                    <h3 className="manga-author">{manga.author}</h3>
                    <p className="manga-description">{manga.description}</p>

                    <div className="manga-stats">
                        <p className="manga-rating">{manga.rating}</p>
                        <p className="manga-views">{manga.views}</p>
                    </div>

                    <div className="manga-tag-container">
                        <h3>Tag/s</h3>
                        <div className="manga-tags">
                            {manga.tags.map((tag, index) => (
                                <span key={index} className="manga-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}