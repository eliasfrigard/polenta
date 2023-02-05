import React from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * @param distance = distance of the animation in pixels.
 * @param direction = the direction of the animation.
 * @param threshold = amount of pixels in view before effect starts.
 *
 * Set distance to 0 to get a simple fade-in.
 */

const AnimateIn = ({
  delay = 0,
  distance = 30,
  direction = 'up',
  threshold = 0.2,
  triggerOnce = true,
  opacityDuration = 400,
  transformDuration = 400,
  disabled = false,
  children,
  classes,
}) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  // Variable for setting the direction of animation.
  let translateDirection = direction

  switch (direction) {
    case 'up':
    case 'down':
      translateDirection = 'translateY'
      break
    case 'left':
    case 'right':
      translateDirection = 'translateX'
      break
  }

  // Variable for setting the distance of animation.
  let translateDistance = distance

  switch (direction) {
    case 'up':
    case 'left':
      translateDistance = Math.abs(distance)
      break
    case 'down':
    case 'right':
      translateDistance = -Math.abs(distance)
      break
  }

  return disabled ? (
    <>{children}</>
  ) : (
    <div
      className={classes}
      ref={ref}
      style={{
        transition: `opacity ${opacityDuration}ms`,
        transitionDelay: `${delay}ms`,
        transform: `${translateDirection}(${inView ? 0 : translateDistance}px)`,
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}

export default AnimateIn
