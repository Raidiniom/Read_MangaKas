import { useState, useEffect } from "react";
import styled from "styled-components";
import Manga_card from "./Manga_card";

export default function Manga_carousel({ title, mangalist, itemsToShow = 5 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setTotalItems(Math.ceil(mangalist.length / itemsToShow));
    }, [mangalist, itemsToShow]);

    const nextSlide = () => {
        setCurrentIndex(prev =>
            prev === totalItems - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prev =>
            prev === 0 ? totalItems - 1 : prev - 1
        );
    };

    return (
        <CustomCarousel>
            <CarouselHeader>
                <h2>{title}</h2>

                <CarouselControls>
                    <CarouselBtn onClick={prevSlide}>&lt;</CarouselBtn>
                    <SlideCounter>
                        {currentIndex + 1} / {totalItems}
                    </SlideCounter>
                    <CarouselBtn onClick={nextSlide}>&gt;</CarouselBtn>
                </CarouselControls>
            </CarouselHeader>

            <CarouselContainer>
                <CarouselTrack
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalItems }).map((_, slideIndex) => (
                        <CarouselSlide key={slideIndex}>
                            {mangalist
                                .slice(
                                    slideIndex * itemsToShow,
                                    (slideIndex + 1) * itemsToShow
                                )
                                .map((manga, index) => (
                                    <Manga_card
                                        key={index}
                                        manga_id={manga.id}
                                    />
                                ))}
                        </CarouselSlide>
                    ))}
                </CarouselTrack>
            </CarouselContainer>

            <CarouselDots>
                {Array.from({ length: totalItems }).map((_, index) => (
                    <Dot
                        key={index}
                        $active={index === currentIndex}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </CarouselDots>
        </CustomCarousel>
    );
}

const CustomCarousel = styled.div`
  padding: 5px;
  position: relative;
`;

const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CarouselBtn = styled.button`
  background: #333;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

const SlideCounter = styled.span`
  font-weight: bold;
  min-width: 60px;
  text-align: center;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const CarouselSlide = styled.div`
  display: flex;
  flex: 0 0 50%;
  gap: 1rem;
  padding: 1rem;
  justify-content: space-around;
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? "#333" : "#ccc")};
  cursor: pointer;
  padding: 0;
  transform: ${({ $active }) => ($active ? "scale(1.2)" : "none")};
`;