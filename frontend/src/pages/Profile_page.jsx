import { useEffect, useState } from "react";

import Manga_bar from "../components/Manga_bar";
import Button from "../components/Button";

import "../styles/profile_page.css";

export default function Profile_page() {
    const [bookmarked, setBookmarked] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const username = "Test-User123";

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

    useEffect(() => {
        setBookmarked(mangas.slice(0, 18));
        setFavorites(mangas.slice(9, 18));
    }, []);

    const logout_alert = () => {
        console.log(`[Logout] user ${username} `)
    }

    return (
        <>
            <div className="profile-body">
                <div className="user-details">
                    <img className="user-profile-img" src="/site_logo.png" alt="Your Profile Picture" />
                    <h1 className="user-name">{username}</h1>
                    <Button name="Log out" onClick={logout_alert} />
                </div>

                <div className="manga-container">
                    <div className="user-bookmarks">
                        <h2 className="container-title">Bookmarks</h2>
                        <div className="manga-list">
                            {bookmarked.map((manga, index) => (
                                <Manga_bar key={index} title={manga.title} />
                            ))}
                        </div>
                    </div>

                    <div className="user-favorites">
                        <h2 className="container-title">Favorites</h2>
                        <div className="manga-list">
                            {favorites.map((manga, index) => (
                                <Manga_bar key={index} title={manga.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}