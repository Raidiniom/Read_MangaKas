import "../styles/chapter_bar.css";


export default function Chapter_bar({ manga = {}, chapeterNumber }) {

    return (
        <>
            <div className="bar-body">
                <h2>{manga.title}</h2>
                <h3>Chapter {chapeterNumber}</h3>
            </div>
        </>
    )
}