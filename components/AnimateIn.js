import React from 'react'
import { useInView } from 'react-intersection-observer'

const AnimateIn = ({ threshold = 0.2, triggerOnce = true, children, classes }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div className={`${classes} duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
      {children}
    </div>
  )
}

export default AnimateIn
