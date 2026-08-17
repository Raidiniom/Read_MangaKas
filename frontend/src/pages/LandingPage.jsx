import MangaCard from "../components/MangaCard";
import HeaderPart from "../components/HeaderPart";
import MangaCarousel from "../components/MangaCarousel";
import { mockMangas, getTopRatedMangas } from "../data/mockData";
import "../styles/landing.css";

export default function LandingPage() {
  const popularMangas = mockMangas.slice(0, 30);
  const topMangas = getTopRatedMangas(24);

  return (
    <>
      <div className="landing-body">
        <HeaderPart />
        <div className="top-manga-display">
          <MangaCarousel title="Featured Mangas" mangalist={topMangas} />
          <h2>Popular Mangas</h2>
          <div className="manga-grid">
            {popularMangas.map((manga, index) => (
              <MangaCard key={index} manga_id={manga.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}