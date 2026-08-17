import "../styles/profile_page.css";
import Button from "../components/Button";
import TagPill from "../components/TagPill";

import { getRandomMangas } from "../data/mockData";
import MangaCarousel from "../components/MangaCarousel";

export default function ProfilePage() {
    const placeholderUser = "Reader12345!@#$"
    const placeholderPFP = "/site_logo.png"

    const bookmarkedMangas1 = getRandomMangas(10)
    const bookmarkedMangas2 = getRandomMangas(10)
    const bookmarkedMangas3 = getRandomMangas(10)

    const tags_array = [
        "Isekai",
        "Fantasy",
        "Shounen",
        "Shoujo",
        "Seinen",
        "Josei",
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Ecchi",
        "Harem",
        "Mecha",
        "Mystery",
        "Psychological",
        "Romance",
        "Sci-fi",
        "Slice of Life",
        "Sports",
        "Supernatural",
        "Thriller",
    ]

    return (
        <div className="container">
            <div className="user-container">
                <img className="user-pfp" src={placeholderPFP} alt={`${placeholderUser}'s Profile Picture`} />

                <div className="user-detail">
                    <h1>{placeholderUser}</h1>
                </div>

                <div className="user-stats"></div>
            </div>

            <div className="profile-content">
                <div className="profile-sidebar">
                    <div className="tags-container">
                        <h2>Blacklisted Tag/s</h2>

                        <div className="tags">
                            {tags_array.map((tag, index) => (
                                <TagPill key={index} tagName={tag} />
                            ))}
                        </div>

                        <div className="edit-blacklist">
                            <Button name="Edit Blacklist" onClick={() => console.log("Edit Blacklist")} />
                        </div>
                    </div>

                    <div className="user-settings">
                        <h2>Settings</h2>

                        <Button name="Change Profile Picture" onClick={() => console.log("Change Profile Picture")} />
                        <Button name="Change Password" onClick={() => console.log("Change Password")} />
                        <Button name="Change Email" onClick={() => console.log("Change Email")} />
                    </div>
                </div>

                <div className="bookmarked-container">
                    <div className="continue-reading">
                        <MangaCarousel title="Continue Reading" mangalist={bookmarkedMangas1} />
                    </div>

                    <div className="unread">
                        <MangaCarousel title="Unread" mangalist={bookmarkedMangas2} />
                    </div>

                    <div className="dropped">
                        <MangaCarousel title="Dropped" mangalist={bookmarkedMangas3} />
                    </div>
                </div>
            </div>
        </div>
    )
}