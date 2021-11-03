import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";

const EmblaCarousel = ({
  slides,
  mediaByIndex,
}: {
  slides: any;
  mediaByIndex: any;
}) => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    loop: true,
    draggable: false,
    speed: 3,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();

    setInterval(() => {
      scrollNext();
    }, 4500);
  }, [embla, onSelect, scrollNext]);

  return (
    <chakra.div position="relative" maxWidth="100vw" margin="0 4vw">
      <chakra.div overflow="hidden" width="100%" ref={viewportRef}>
        <chakra.div display="flex" userSelect="none" marginLeft="-10px">
          {slides.map((index: number) => (
            <chakra.div
              position="relative"
              minWidth="100%"
              paddingLeft="10px"
              key={index}
            >
              <chakra.div position="relative" overflow="hidden" height="80vh">
                <Image
                  src={mediaByIndex(index).src}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  priority={true}
                />
              </chakra.div>
            </chakra.div>
          ))}
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};

export default EmblaCarousel;
