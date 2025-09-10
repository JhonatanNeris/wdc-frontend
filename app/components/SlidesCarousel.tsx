'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import CardSlider from './CardSlider'

export type Slide = {
  id: number
  src: string
  title: string
  text: string
}

type Props = {
  slides: Slide[]
}

export default function SlidesCarousel({ slides }: Props) {
  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselContent>
        {slides.map((s) => (
          <CarouselItem key={s.id} className="basis-[70%] lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
            <CardSlider src={s.src} title={s.title} text={s.text} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
