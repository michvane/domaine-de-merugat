import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'

const images = [
  { src: '/img/prieel.jpg' },
  { src: '/img/pool-1.jpg' },
  { src: '/img/front-view-sm.jpg' },
  { src: '/img/outside-2.jpg' },
  { src: '/img/outside-1.jpg' },
]

const CarouselComponent: React.FC = () => {
  return (
    <StyledCarousel>
      <Swiper
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 3.2,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <div style={{ pointerEvents: 'none' }}>
              <img src={img.src} style={{ width: '100%', pointerEvents: 'none' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  cursor: 'pointer';
`

export default CarouselComponent
