import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'

const images = [
  { src: 'img/bnb/bnb-1.jpg' },
  { src: 'img/bnb/bnb-2.jpg' },
  { src: 'img/bnb/bnb-5.jpg' },
  { src: 'img/bnb/pool.jpg' },
  { src: 'img/bnb/bnb-4.jpg' },
  { src: 'img/bnb/food.jpg' },
]

const BnbCarousel: React.FC = () => {
  return (
    <StyledCarousel>
      <Swiper
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 2.2,
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

export default BnbCarousel
