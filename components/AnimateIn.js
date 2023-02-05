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
  threshold = 0.2,
  triggerOnce = true,
  opacityDuration = 400,
  children,
  classes,
}) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      className={classes}
      ref={ref}
      style={{
        transition: `opacity ${opacityDuration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}

export default AnimateIn
