import styled from "styled-components";

import { Link } from "react-router-dom";
import { getMangaById } from "../data/mockData"

export default function Manga_card({ manga_id }) {
  const manga = getMangaById(manga_id);

  return (
    <Link to={`/manga/${manga?.slug}`} style={{ textDecoration: 'none' }}>
      <Card>
        <Cover src={manga?.cover} alt={`${manga?.title} Cover`} />
        <Info>
          <Title>{manga?.title}</Title>
          <Description>{manga?.description}</Description>
        </Info>
      </Card>
    </Link>
    
  );
}

const Card = styled.div`
  background-color: var(--surface);
  border-radius: 12px;
  overflow: hidden;
  width: 180px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  border: 1px solid var(--border);

  &:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
    box-shadow: 0 8px 20px rgba(149, 44, 210, 0.2);
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 12px;
  text-align: center;
`;

const Title = styled.h4`
  color: var(--text-primary);
  margin: 0 0 6px 0;
  font-size: 16px;
  font-weight: 600;
`;

const Description = styled.p`
  color: var(--text-muted);
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;