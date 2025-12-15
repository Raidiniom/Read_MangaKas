import MangaCard from "../components/Manga_Card";
import Header_part from "../components/Header_part";
import Search_bar from "../components/Search_bar";
import MangaCarousel from "../components/Manga_Carousel";

import "../styles/landing.css";

export default function Landing_page() {
  const mangas = [
    { title: "Naruto", cover: "/covers/naruto.jpg", description: "An energetic ninja seeks recognition" },
    { title: "One Piece", cover: "/covers/onepiece.jpg", description: "Pirates search for the ultimate treasure" },
    { title: "Attack on Titan", cover: "/covers/aot.jpg", description: "Humanity battles giant humanoid creatures" },
    { title: "My Hero Academia", cover: "/covers/mha.jpg", description: "Quirkless boy inherits superpower legacy" },
    { title: "Jujutsu Kaisen", cover: "/covers/jjk.jpg", description: "Student fights curses in supernatural Tokyo" },
    { title: "Chainsaw Man", cover: "/covers/chainsawman.jpg", description: "Devil hunter merges with chainsaw devil" },
    { title: "Demon Slayer", cover: "/covers/demonslayer.jpg", description: "Kindhearted boy becomes demon slayer" },
    { title: "Tokyo Revengers", cover: "/covers/tokyorevengers.jpg", description: "Delinquent time-travels to save his ex-girlfriend" },
    { title: "Spy x Family", cover: "/covers/spyfamily.jpg", description: "Spy creates fake family for mission" },
    { title: "One Punch Man", cover: "/covers/onepunchman.jpg", description: "Overpowered hero seeks worthy opponent" },
    { title: "Death Note", cover: "/covers/deathnote.jpg", description: "Student gains deadly notebook" },
    { title: "Fullmetal Alchemist", cover: "/covers/fma.jpg", description: "Brothers search for Philosopher's Stone" },
    { title: "Hunter x Hunter", cover: "/covers/hunterxhunter.jpg", description: "Boy becomes Hunter to find his father" },
    { title: "Dragon Ball", cover: "/covers/dragonball.jpg", description: "Saiyan warrior protects Earth" },
    { title: "Bleach", cover: "/covers/bleach.jpg", description: "Teenager becomes Soul Reaper" },
    { title: "Haikyuu!!", cover: "/covers/haikyuu.jpg", description: "Short boy aims for volleyball greatness" },
    { title: "Black Clover", cover: "/covers/blackclover.jpg", description: "Magicless boy strives to become Wizard King" },
    { title: "JoJo's Bizarre Adventure", cover: "/covers/jojo.jpg", description: "Multi-generational supernatural battles" },
  ];

  return (
    <>
      <Header_part />

      <div className="landing-body">
        <div className="top-manga-display">
          <div className="search-bar">
            <Search_bar />
          </div>

          <MangaCarousel mangalist={mangas} />

          <h2>Popular Mangas</h2>

          <div className="manga-grid">
            {mangas.map((m, i) => (
              <MangaCard key={i} title={m.title} cover={m.cover} description={m.description} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
