import Header_part from "../components/Header_part";
import Manga_carousel from "../components/Manga_carousel";
import "../styles/browse_page.css";

import { getRandomMangas } from "../data/mockData"; 

export default function Browse_page() {
    const manglist1 = getRandomMangas(15)
    const manglist2 = getRandomMangas(15)
    const manglist3 = getRandomMangas(15)
    
    return (
        <>
            <div className="browse-body">
                <Header_part />

                <div className="browse-container">
                    <div className="trending-container">
                        <Manga_carousel title="Trending" mangalist={manglist1} />
                    </div>
                    <div className="popular-container">
                        <Manga_carousel title="Popular" mangalist={manglist2} />
                    </div>
                    <div className="more-container">
                        <Manga_carousel title="More" mangalist={manglist3} />
                    </div>
                </div>
            </div>
        </>
    )
}