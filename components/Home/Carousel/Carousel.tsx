import React from 'react'
import { media } from './CarouselMedia';
import EmblaCarousel from "./EmblaCarousel";

const SLIDE_COUNT = media.length;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Carousel() {
    return (
        <EmblaCarousel slides={slides} />
    )
}
