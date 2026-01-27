import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Manga_bar({ title }) {
    return (
        <MangaBarLink
            to={`/manga/${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
            <MangaBarSimple>
                <MangaTitleSimple>{title}</MangaTitleSimple>
            </MangaBarSimple>
        </MangaBarLink>
    );
}

const MangaBarLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

const MangaBarSimple = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(149, 44, 210, 0.05);
    border-color: var(--primary);
  }

  &:hover ${/* sc-selector */ MangaTitleSimple} {
    color: var(--primary);
  }
`;

const MangaTitleSimple = styled.h3`
  color: var(--text-primary);
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  transition: color 0.2s ease;
`;
