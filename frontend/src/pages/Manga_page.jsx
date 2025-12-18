import { useParams } from "react-router-dom";

// TODO: Have a proper draft layout for this page

export default function Manga_Page() {
    // const { title } = useParams();
    const { title: slug } = useParams();
    const title = slug ? decodeURIComponent(slug).replace(/-/g, " ") : null;

    return (
        <>
            {title ? 
                <p>Displaying manga with title: {title}</p>
                :
                <p>No manga title provided.</p>
            }
        </>
    )
}