import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import { mq } from 'constants/mediaQueries'

interface HeaderImageProps {
  src: string | { src: string }
  alt: string
  priority?: boolean
}

const HeaderImage: React.FC<HeaderImageProps> = ({ src, alt, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageSrc = typeof src === 'string' ? src : src.src

  return (
    <ImageContainer>
      {!isLoaded && <LoadingPlaceholder />}
      <StyledImage
        src={imageSrc}
        alt={alt}
        $isLoaded={isLoaded}
        loading={priority ? 'eager' : 'eager'}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
      />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  min-height: 300px;
  overflow: hidden;
  background: ${colors.beige};

  @media (min-width: ${mq.mobile}) {
    height: 50vh;
    min-height: 400px;
  }
`

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    ${colors.beige} 0%,
    ${colors.light} 50%,
    ${colors.beige} 100%
  );
  background-size: 200% 200%;
  animation: shimmer 2s infinite;
  z-index: 1;

  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const StyledImage = styled.img<{ $isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: ${props => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  position: relative;
  z-index: 2;
`

export default HeaderImage

