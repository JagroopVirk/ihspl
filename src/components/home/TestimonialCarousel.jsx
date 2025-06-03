// components/TestimonialCarousel.jsx
import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { testimonials } from '../../data/js/testimonials'
import { useSwipeable } from 'react-swipeable'

const TestimonialCarousel = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 3

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleCount + testimonials.length) % testimonials.length)
  }

  useImperativeHandle(ref, () => ({
    next,
    prev,
  }))

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <div {...swipeHandlers} className="bg-primary-light relative w-full py-12">
      <h2 style={{ color: 'var(--color-secondary' }} class="mb-10 text-center">
        What our clients say!
      </h2>
      <div className="maxwidth grid grid-cols-1 gap-6 transition-all duration-500 ease-in-out md:grid-cols-3">
        {getVisibleTestimonials().map((testimonial, idx) => (
          <div key={idx} className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-white p-6 shadow">
            <p className="mb-4 italic">“{testimonial.quote}”</p>
            <div>
              <p className="text-right font-semibold">{testimonial.name}</p>
              <p className="text-right">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-[4%] -translate-y-1/2 transform">
        <button
          onClick={prev}
          className="bg-secondary hover:bg-secondary-light rounded-full p-2 px-3 text-4xl text-white shadow"
        >
          ‹
        </button>
      </div>
      <div className="absolute top-1/2 right-[4%] -translate-y-1/2 transform">
        <button
          onClick={next}
          className="bg-secondary hover:bg-secondary-light rounded-full p-2 px-3 text-4xl text-white shadow"
        >
          ›
        </button>
      </div>
    </div>
  )
})
// TODO: colors and sized with variables

export default TestimonialCarousel
