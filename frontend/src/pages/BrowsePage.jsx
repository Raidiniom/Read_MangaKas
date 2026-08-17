import HeaderPart from "../components/HeaderPart";
import MangaCarousel from "../components/MangaCarousel";
import "../styles/browse_page.css";
import { getRandomMangas } from "../data/mockData";

export default function BrowsePage() {
    const manglist1 = getRandomMangas(15)
    const manglist2 = getRandomMangas(15)
    const manglist3 = getRandomMangas(15)

    return (
        <>
            <div className="browse-body">
                <HeaderPart />
                <div className="browse-container">
                    <div className="trending-container">
                        <MangaCarousel title="Trending" mangalist={manglist1} />
                    </div>
                    <div className="popular-container">
                        <MangaCarousel title="Popular" mangalist={manglist2} />
                    </div>
                    <div className="more-container">
                        <MangaCarousel title="More" mangalist={manglist3} />
                    </div>
                </div>
            </div>
        </>
    )
}