import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import AnimatedSection from '../../Atoms/AnimatedSection'

const images = [
  { src: '/img/bnb/bnb-7.jpg' },
  { src: '/img/bnb/bnb-6.jpg' },
  { src: '/img/bnb/bnb-4.jpg' },
  { src: '/img/bnb/bnb-3.jpg' },
  { src: '/img/bnb/food.jpg' },
  { src: '/img/bnb/pool.jpg' },
]

const BnbCarousel: React.FC = () => {
  return (
    <AnimatedSection direction="up" duration={0.7} delay={0.1}>
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
            <div style={{ pointerEvents: 'none' }}>
              <img src={img.src} style={{ maxWidth: '100%', pointerEvents: 'none' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </StyledCarousel>
    </AnimatedSection>
  )
}

import colors from '../../../constants/colors'

import { mq } from 'constants/mediaQueries'

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
    height: 300px;

    @media (min-width: ${mq.mobile}) {
      height: 250px;
    }

    @media (min-width: ${mq.tablet}) {
      height: 350px;
    }

    > div {
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
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

export default BnbCarousel
