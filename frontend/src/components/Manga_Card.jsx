import styled from "styled-components";

const Card = styled.div`
  background-color: #44444E;
  border-radius: 12px;
  overflow: hidden;
  width: 180px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
  text-align: center;
`;

export default function MangaCard({ title, cover }) {
  return (
    <Card>
      <Cover src={cover} alt={title} />
      <Info>
        <h4>{title}</h4>
      </Info>
    </Card>
  );
}
