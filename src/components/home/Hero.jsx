import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { slides } from '../../data';



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = slides.length

  const nextSlideBtn = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlideBtn = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  };

  const autoScroll = true
  let slideInterval
  const timeInterval = 5000

  function autoSlideScroll() {
    slideInterval = setInterval(nextSlideBtn, timeInterval)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      autoSlideScroll()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide]);


  return (
    <>
      {/* slide wrapper */}
      <div className="w-full h-[80vh] relative overflow-hidden">
        {/* arrow buttons */}
        <div className="arrow next-btn" onClick={nextSlideBtn}>
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className="arrow prev-btn" onClick={prevSlideBtn}>
          <i className="ri-arrow-left-s-line"></i>
        </div>
        {slides.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <>
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-full brightness-50 object-cover"
                  />
                  <motion.div
                    className="hero-content"
                    animate={{ x: [0, 40, 0], opacity: [0, 1] }}
                    transition={{ type: "spring", delay: 1 }}
                  >
                    <h2 className="text-xl lg:text-2xl font-bold pb-2 text-color-bg">
                      {slide.heading}
                    </h2>
                    <p className="leading-6 font-light text-base text-white">
                      {slide.desc}
                    </p>
                  </motion.div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Hero