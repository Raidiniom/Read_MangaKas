import MangaCard from "../components/Manga_Card";
import Header_part from "../components/Header_part";
import Search_bar from "../components/Search_bar";

import "../styles/landing.css";

export default function Landing_page() {
  const mangas = [
    { title: "Naruto", cover: "/covers/naruto.jpg" },
    { title: "One Piece", cover: "/covers/onepiece.jpg" },
    { title: "Attack on Titan", cover: "/covers/aot.jpg" },
    { title: "Naruto", cover: "/covers/naruto.jpg" },
    { title: "One Piece", cover: "/covers/onepiece.jpg" },
    { title: "Attack on Titan", cover: "/covers/aot.jpg" },
  ];

  return (
    <>
      <div className="landing-header">
        <Header_part />
      </div>
      <div className="landing-body">
        <div className="top-manga-display">
          <div className="search-bar">
            <Search_bar />
          </div>

          <h2>Top Manga</h2>

          <div className="manga-grid">
            {mangas.map((m, i) => (
              <MangaCard key={i} title={m.title} cover={m.cover} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
