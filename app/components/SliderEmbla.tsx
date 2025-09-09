'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import CardSlider from './CardSlider';

type Slide = {
    id: number
    src: string;
    title: string;
    text: string;
};

type Props = {
    slides: Slide[];
    autoplay?: boolean;
    loop?: boolean;
};

export default function SliderEmbla({ slides, autoplay = true, loop = true }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop }, [].filter(Boolean));

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

   return (
          <div className="relative">
              {/* Track */}
              <div ref={emblaRef} className="overflow-hidden">
                  <div className="flex">
                      {slides.map((s) => (
                          <div key={s.id} className="flex-[0_0_100%] flex justify-center">
                              <CardSlider src={s.src} title={s.title} text={s.text} />
                          </div>
                      ))}
                  </div>
              </div>

              {/* Prev/Next Buttons */}
              <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2"
                  onClick={() => emblaApi?.scrollPrev()}
                  aria-label="Previous slide"
              >
                  <Image src="/arrowright.svg" alt="Prev" width={32} height={32} className="rotate-180" />
              </button>
              <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
                  onClick={() => emblaApi?.scrollNext()}
                  aria-label="Next slide"
              >
                  <Image src="/arrowright.svg" alt="Next" width={32} height={32} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                  {slides.map((_, i) => (
                      <button
                          key={i}
                          onClick={() => emblaApi?.scrollTo(i)}
                          className={[
                              'h-2 w-2 rounded-full transition',
                              i === selectedIndex
                                  ? 'scale-125 bg-white'
                                  : 'bg-white/50 hover:bg-white/80',
                          ].join(' ')}
                      />
                  ))}
              </div>
          </div>
      );
  }