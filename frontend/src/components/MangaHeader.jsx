import styled from "styled-components";
import { getMangaById } from "../data/mockData";
import { Link } from "react-router-dom";

export default function Manga_header({ manga_id }) {
    const manga = getMangaById(manga_id);

    return (
        <HeaderBody>
            <MangaThumbnail>
                <img
                    src={manga.cover || ""}
                    alt={manga.title || "Manga Thumbnail"}
                />
            </MangaThumbnail>

            <MangaDetails>
                <MangaTitleEn>{manga.title}</MangaTitleEn>
                <MangaTitleJp>{manga.title_jp}</MangaTitleJp>

                <AuthorLink to={`/author/${encodeURIComponent(manga.author)}`}>
                    <MangaAuthor>{manga.author}</MangaAuthor>
                </AuthorLink>

                <MangaDescription>{manga.description}</MangaDescription>

                <MangaStats>
                    <MangaRating>{manga.rating}</MangaRating>
                    <MangaViews>{manga.views}</MangaViews>
                </MangaStats>

                <MangaTagContainer>
                    <h3>Tag/s</h3>
                    <MangaTags>
                        {manga.tags.map((tag, index) => (
                            <Link to={`/tag/${tag}`} key={index}>
                                <MangaTag>{tag}</MangaTag>
                            </Link>
                        ))}
                    </MangaTags>
                </MangaTagContainer>
            </MangaDetails>
        </HeaderBody>
    );
}

const HeaderBody = styled.div`
    display: flex;
    padding: 20px;
    border-radius: 16px;
    background: linear-gradient(
        135deg,
        rgba(26, 26, 26, 0.95) 0%,
        rgba(40, 40, 40, 0.9) 100%
    );
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.05);
    gap: 30px;
    margin: 5px 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(
            90deg,
            var(--primary),
            var(--accent),
            var(--primary)
        );
    }
`;

const MangaThumbnail = styled.div`
    flex-shrink: 0;
    width: 280px;
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
    border: 3px solid var(--primary);
    box-shadow:
        0 15px 35px rgba(149, 44, 210, 0.2),
        0 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow:
            0 20px 50px rgba(149, 44, 210, 0.3),
            0 10px 25px rgba(0, 0, 0, 0.4);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }
`;

const MangaDetails = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const MangaTitleEn = styled.h1`
    font-size: 2.8rem;
    font-weight: 800;
    margin: 0;
    line-height: 1.1;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    background: linear-gradient(
        135deg,
        #ffffff 0%,
        var(--primary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const MangaTitleJp = styled.h2`
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-weight: 500;
    font-style: italic;
    border-bottom: 2px solid var(--border);
    padding-bottom: 10px;
`;

const AuthorLink = styled(Link)`
    text-decoration: none;
    color: var(--text-primary);
`;

const MangaAuthor = styled.h3`
    display: flex;
    gap: 8px;

    &::before {
        content: "Author:";
    }

    &:hover {
        color: var(--primary-hover);
    }

    &:active {
        transform: translateY(-1px);
    }
`;

const MangaDescription = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    margin: 5px 0;
    padding: 15px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    border-left: 4px solid var(--primary);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const MangaStats = styled.div`
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
`;

const MangaRating = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: rgba(149, 44, 210, 0.15);
    border-radius: 10px;
    border: 1px solid rgba(149, 44, 210, 0.3);
    font-size: 1.1rem;
    font-weight: 600;
    color: white;

    &::before {
        content: "⭐";
        font-size: 1.3rem;
    }
`;

const MangaViews = styled(MangaRating)`
    &::before {
        content: "👁️";
        font-size: 1.3rem;
    }
`;

const MangaTagContainer = styled.div`
    padding: 10px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 1.3rem;
        margin: 0 0 15px 0;
        display: flex;
        align-items: center;
        gap: 10px;

        &::before {
            content: "#";
            color: var(--primary);
            font-size: 1.5rem;
        }
    }
`;

const MangaTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

const MangaTag = styled.span`
    background: linear-gradient(
        135deg,
        var(--primary) 0%,
        var(--accent) 100%
    );
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(149, 44, 210, 0.25);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(149, 44, 210, 0.4);
        background: linear-gradient(
            135deg,
            var(--primary-hover) 1%,
            var(--accent) 100%
        );
    }

    &:active {
        transform: translateY(-1px);
    }
`;