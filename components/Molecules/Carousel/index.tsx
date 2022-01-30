import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'

const images = [
  {
    src: 'img/bed.jpg',
  },
  { src: 'img/closet.jpg' },
  { src: 'img/prieel.jpg' },
  { src: 'img/front-view.jpg' },
  { src: 'img/pool-1.jpg' },
  { src: 'img/outside-1.jpg' },
]

const CarouselComponent: React.FC = () => {
  return (
    <StyledCarousel>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <Image src={img.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  /* overflow-x: scroll; */
`

const Image = styled.img`
  height: 300px;
`

export default CarouselComponent
