import React from 'react'
import { useInView } from 'react-intersection-observer'

const AnimateIn = ({
  threshold = 0.2,
  triggerOnce = true,
  children,
  classes = '',
  animationType = 'fade',
}) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  const getAnimationClasses = () => {
    switch (animationType) {
      case 'slide':
        return `${classes} duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`
      case 'zoom':
        return `${classes} duration-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`
      default:
        return `${classes} duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`
    }
  }

  return (
    <div className={getAnimationClasses()} ref={ref}>
      {children}
    </div>
  )
}

export default AnimateIn
