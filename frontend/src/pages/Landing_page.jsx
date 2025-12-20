import Manga_card from "../components/Manga_card";
import Header_part from "../components/Header_part";
import Manga_carousel from "../components/Manga_carousel";

import { mockMangas, getTopRatedMangas } from "../data/mockData";

import "../styles/landing.css";

export default function Landing_page() {
  const popularMangas = mockMangas.slice(0, 30);
  const topMangas = getTopRatedMangas(24);

  return (
    <>
      <div className="landing-body">
        <Header_part />
        
        <div className="top-manga-display">

          <Manga_carousel mangalist={topMangas} />

          <h2>Popular Mangas</h2>

          <div className="manga-grid">
            {popularMangas.map((manga, index) => (
              <Manga_card key={index} manga_id={manga.id} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
