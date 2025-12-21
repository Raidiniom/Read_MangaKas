import { useParams } from "react-router-dom";
import Manga_header from "../components/Manga_header";
import Chapter_bar from "../components/Chapter_bar";
import "../styles/manga_page.css";

import { getMangaBySlug } from "../data/mockData";

export default function Manga_Page() {
    const { title: slug } = useParams();
    const manga = getMangaBySlug(slug);
    const numberOfChapters = manga.chapters;

    return (
        <>
            <div className="manga-body">
                <Manga_header manga_id={manga.id} />
                <div className="chapter-container">
                    {Array.from({ length: numberOfChapters }).map((_, index) => (
                        <Chapter_bar key={index} manga={manga} chapeterNumber={index + 1} />
                    ))}
                </div>
                <div className=""></div>
            </div>
        </>
    )
}