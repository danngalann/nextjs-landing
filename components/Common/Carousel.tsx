import React from "react";
import EmblaCarousel from "./EmblaCarousel";

export default function Carousel({
  media,
  mediaByIndex,
}: {
  media: StaticImageData[];
  mediaByIndex: any;
}) {
  const SLIDE_COUNT = media.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />;
}
