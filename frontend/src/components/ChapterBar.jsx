import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Chapter_bar({ manga = {}, chapterNumber, dateUploaded }) {
    return (
        <BarBody>
            <ChapterNumber>
                Chapter {chapterNumber}
            </ChapterNumber>

            <ChapterLinks>
                <h3>{dateUploaded}</h3>
                <StyledLink to={`/manga/${manga.slug}/chapter/en/${chapterNumber}`}>
                    EN
                </StyledLink>
                <StyledLink to={`/manga/${manga.slug}/chapter/jp/${chapterNumber}`}>
                    JP
                </StyledLink>
            </ChapterLinks>
        </BarBody>
    );
}

const BarBody = styled.div`
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &:hover {
        background: var(--surface-hover);
        border-color: var(--primary);
        transform: translateX(8px);
        box-shadow: 
            0 6px 20px rgba(149, 44, 210, 0.15),
            0 0 0 1px rgba(149, 44, 210, 0.1);
    }
`;

const ChapterNumber = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
        content: "📖";
        font-size: 1rem;
        opacity: 0.8;
    }
`;

const ChapterLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    flex-shrink: 0;
`;

const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    padding: 8px 16px;
    background: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.2s ease;
    border: 2px solid transparent;
    text-transform: uppercase;

    &:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(149, 44, 210, 0.3);
    }

    &:active {
        transform: translateY(0);
    }
`;