import MangaCard from "../components/Manga_Card";
import Header_part from "../components/Header_part";
import Search_bar from "../components/Search_bar";
import MangaCarousel from "../components/Manga_Carousel";

import { mockMangas, getTopRatedMangas } from "../data/mockData";

import "../styles/landing.css";

export default function Landing_page() {
  const popularMangas = mockMangas.slice(0, 30);
  const topMangas = getTopRatedMangas(24);

  return (
    <>
      <Header_part />

      <div className="landing-body">
        <div className="top-manga-display">
          <div className="search-bar">
            <Search_bar />
          </div>

          <MangaCarousel mangalist={topMangas} />

          <h2>Popular Mangas</h2>

          <div className="manga-grid">
            {popularMangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
