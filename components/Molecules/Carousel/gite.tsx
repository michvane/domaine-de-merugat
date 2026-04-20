import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import AnimatedSection from '../../Atoms/AnimatedSection'

const images = [
  { src: '/img/gite/image00077.jpeg' },
  { src: '/img/gite/image00021.jpeg' },
  { src: '/img/gite/image00034.jpeg' },
  { src: '/img/gite/image00058.jpeg' },
  { src: '/img/gite/image00052.jpeg' },
  { src: '/img/gite/image00032.jpeg' },
  { src: '/img/gite/image00044.jpeg' },
  { src: '/img/gite/image00045.jpeg' },
  { src: '/img/gite/image00064.jpeg' },
]

const GiteCarousel: React.FC = () => {
  return (
    <AnimatedSection direction="up" duration={0.7} delay={0.1}>
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
            spaceBetween: 24,
          },
        }}
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <SlideFrame>
              <img src={img.src} alt="" />
            </SlideFrame>
          </SwiperSlide>
        ))}
      </Swiper>
      </StyledCarousel>
    </AnimatedSection>
  )
}

import colors from '../../../constants/colors'

import { mq } from 'constants/mediaQueries'

/** Same aspect box for every slide; `object-fit: cover` avoids squashing (crops edges if needed). */
const SlideFrame = styled.div`
  pointer-events: none;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`

const StyledCarousel = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  padding: 0.5rem 0;

  @media (min-width: ${mq.mobile}) {
    margin-bottom: 5rem;
    padding: 1rem 0;
  }

  .swiper-slide {
    border-radius: 8px;
    overflow: hidden;
    height: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${colors.main};
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    @media (min-width: ${mq.mobile}) {
      width: 44px;
      height: 44px;
    }

    &:hover {
      background: ${colors.main};
      color: white;
      box-shadow: 0 2px 8px rgba(139, 111, 71, 0.2);
    }

    &::after {
      font-size: 16px;
      font-weight: 700;

      @media (min-width: ${mq.mobile}) {
        font-size: 18px;
      }
    }
  }
`

export default GiteCarousel
