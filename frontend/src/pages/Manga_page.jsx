import { useParams } from "react-router-dom";
import Manga_header from "../components/Manga_header";

import { getMangaBySlug } from "../data/mockData";

export default function Manga_Page() {
    const { title: slug } = useParams();
    const manga = getMangaBySlug(slug);

    return (
        <>
            <div className="manga-body">
                <Manga_header manga_id={manga.id} />
                <div className=""></div>
                <div className=""></div>
            </div>
        </>
    )
}