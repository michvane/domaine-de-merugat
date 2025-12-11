import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'fade' | 'left' | 'right'
  duration?: number
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check for reduced motion preference (accessibility)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // If user prefers reduced motion, show content immediately
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: show content immediately if IntersectionObserver is not supported
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Disconnect after first animation to improve performance
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <AnimatedWrapper
      ref={ref}
      $isVisible={isVisible}
      $delay={delay}
      $direction={direction}
      $duration={duration}
    >
      {children}
    </AnimatedWrapper>
  )
}

const AnimatedWrapper = styled.div<{
  $isVisible: boolean
  $delay: number
  $direction: string
  $duration: number
}>`
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transform: ${props => {
    if (!props.$isVisible) {
      switch (props.$direction) {
        case 'up':
          return 'translateY(30px)'
        case 'left':
          return 'translateX(-30px)'
        case 'right':
          return 'translateX(30px)'
        default:
          return 'none'
      }
    }
    return 'translateY(0) translateX(0)'
  }};
  transition: opacity ${props => props.$duration}s ease-out,
    transform ${props => props.$duration}s ease-out;
  transition-delay: ${props => props.$delay}s;
  will-change: opacity, transform;

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
    opacity: 1;
  }

  /* Fallback for older browsers that don't support CSS transitions well */
  @supports not (transition: opacity) {
    opacity: 1;
    transform: none;
  }
`

export default AnimatedSection

