import React, { useState } from 'react';
import { Carousel as BootstrapCarousel, CarouselItem } from 'reactstrap';
import ArrowRightIcon from '../../public/images/svgs/arrow-right-sm.svg';
import ArrowLeftIcon from '../../public/images/svgs/arrow-left-sm.svg';
import './Carousel.css';

const items = [
    {
        src: '/images/others/carousel-1.png',
        altText: 'Slide 1',
        caption: '',
        header: '',
        key: '1',
        bgColor: 'bg-pink',
    },
    {
        src: '/images/others/carousel-2.png',
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '2',
        bgColor: 'bg-yellow',
    },
    {
        src: '/images/others/sidebar-preview.png',
        altText: 'Slide 3',
        caption: '',
        header: '',
        key: '3',
        bgColor: 'bg-blue',
    },
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                slide={true}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.key}
            >
                <div className="carousel-items">
                    <img src={item.src} alt={item.altText} />
                    <div className={item.bgColor}></div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <>
            <div className="carousel__controls">
                <ArrowLeftIcon role="button" onClick={previous} />
            </div>

            <BootstrapCarousel
                interval={false}
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                slide={true}
            >
                {slides}
            </BootstrapCarousel>

            <div className="carousel__controls carousel__controls__next">
                <ArrowRightIcon role="button" onClick={next} />
            </div>
        </>
    );
};

export default Carousel;
