"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { useLanguage } from '@/app/lib/context/LanguageContext';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/folio1.png",
    "/folio2.png",
    "/folio3.png",
    "/folio4.jpg",
    "/folio5.jpg"
  ];
  const { language } = useLanguage();
  const swipeLeftHandler = () => setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  const swipeRightHandler = () => setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  const handlers = useSwipeable(language === "en" ? {
    onSwipedLeft: swipeLeftHandler,
    onSwipedRight: swipeRightHandler,
    preventScrollOnSwipe: true,
    trackMouse: true
  } : {
    onSwipedRight: swipeLeftHandler,
    onSwipedLeft: swipeRightHandler,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, activeIndex]);

  return (
    <motion.div
      id="custom-controls-gallery"
      className="relative"
      data-carousel="slide"
      {...handlers}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`duration-700 ease-in-out min-h-[40vh] ${index === activeIndex ? 'block' : 'hidden'}`}
            data-carousel-item={index === activeIndex ? 'active' : ''}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image key={index} src={src} width={480} height={480} className="block h-auto rounded-lg shadow-lg" alt={"folio" + index.toString()} priority={index === index} />
          </motion.div>
        ))}
      </div>
      <div className="rounded-b-lg absolute max-w-[480px] bottom-0 left-0 right-0 flex justify-center py-4 space-x-3 rtl:space-x-reverse bg-black bg-opacity-50">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}
