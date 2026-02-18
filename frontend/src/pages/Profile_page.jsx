import "../styles/profile_page.css";
import Button from "../components/Button";
import TagPill from "../components/Tag_pill";

export default function Profile_page() {
    const placeholderUser = "Reader12345!@#$"

    const tags_array = [
        "Tag1",
        "Tag2",
        "Tag3",
        "Tag4",
        "Tag5",
        "Tag1",
        "Tag2",
        "Tag3",
        "Tag4",
        "Tag5",
        "Tag1",
        "Tag2",
        "Tag3",
        "Tag4",
        "Tag5",
        "Tag1",
        "Tag2",
        "Tag3",
        "Tag4",
        "Tag5",
        "Tag1",
        "Tag2",
        "Tag3",
        "Tag4",
        "Tag5"
    ]

    return (
        <>
            <div className="profile-body">
                {/* User Data container */}
                <div className="profile-container">
                    <div className="user-container">
                        <div className="user-detail">
                            <img className="user-pfp" src="" alt="" />
                            <h1>{placeholderUser}</h1>
                        </div>
                        <div className="account-management">
                            <Button name="Edit Profile" />
                            <Button name="Change Password" />
                        </div>
                    </div>
                    <div className="manga-container">
                        {/* Favorite mangas */}
                        <h2>Favorited</h2>
                        <div className="display-container">
                            {/*  */}
                        </div>

                        {/* Bookmarked mangas */}
                        <h2>Bookmarked</h2>
                        <div className="display-container">
                            {/*  */}
                        </div>

                        {/* Dropped mangas */}
                        <h2>Dropped</h2>
                        <div className="display-container">
                            {/*  */}
                        </div>
                    </div>
                </div>

                {/* Settings container */}
                <div className="settings-container">
                    <div className="blacklist-tags">
                        <h2>Blacklisted Tags</h2>
                        <div className="tag-container">
                            {/*  */}

                            {tags_array.map(tag => <TagPill key={tag} tagName={tag} />)}
                        </div>
                        <Button name="Edit" />
                    </div>
                </div>
            </div>
        </>
    )
}