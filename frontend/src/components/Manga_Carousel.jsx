import { useState, useEffect } from "react";
import Manga_card from "./Manga_card";

import "../styles/manga_carousel.css";

export default function Manga_carousel({ mangalist, itemsToShow = 5}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setTotalItems(Math.ceil(mangalist.length / itemsToShow));
    }, [mangalist, itemsToShow]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === totalItems - 1 ? 0 : prevIndex + 1);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? totalItems - 1 : prevIndex - 1);
    }

    return (
        <div className="custom-carousel">
            <div className="carousel-header">
                <h2>Featured Mangas</h2>
                <div className="carousel-controls">
                <button onClick={prevSlide} className="carousel-btn">
                    &lt;
                </button>
                <span className="slide-counter">
                    {currentIndex + 1} / {totalItems}
                </span>
                <button onClick={nextSlide} className="carousel-btn">
                    &gt;
                </button>
                </div>
            </div>

            {/* MangaCard part */}
            <div className="carousel-container">
                <div className="carousel-track" style={{
                transform: `translateX(-${currentIndex * 100}%)`
                }}>
                {Array.from({ length: totalItems }).map((_, slideIndex) => (
                    <div key={slideIndex} className="carousel-slide">
                    {mangalist
                        .slice(slideIndex * itemsToShow, (slideIndex + 1) * itemsToShow)
                        .map((manga, index) => (
                        <Manga_card
                            key={index}
                            manga_id={manga.id}
                        />
                        ))}
                    </div>
                ))}
                </div>
            </div>

            {/* Dots indicator */}
            <div className="carousel-dots">
                {Array.from({ length: totalItems }).map((_, index) => (
                <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                />
                ))}
            </div>
        </div>
    );
}