"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
interface EventItem {
  title: string;
  description: string;
  url: string;
  link: string;
}

export default function Event() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Item: EventItem[] = [
    {
      title: "Mock Placements",
      description:
        "Learn about our annual flagship event, that connects students with HRs.",
      url: "/Forese.JPG",
      link: "/Event/MockPlacements",
    },
    {
      title: "Group Discussion",
      description:
        "Group Discussion is a great way to learn and grow your communication skills.",
      url: "/bentogdimg1.jpg",
      link: "/GroupDiscussion",
    },

    {
      title: "Soft Skills Workshops",
      description:
        "Join our workshops and training sessions to enhance your professional capabilities.",
      url: "/Seminar.JPG",
      link: "/Event/Seminar",
    },
    {
      title: "Coders' Forum Hakathon",
      description:
        "A hackathon like no other, where students can showcase their skills and collaborate with like-minded peers.",
      url: "/hackathon.JPG",
      link: "/Event/Hackathon",
    },
    {
      title: "Foreign Education Fairs",
      description:
        "Join us at our annual fairs to learn about various universities and their cultures.",
      url: "/fored.JPG",
      link: "/Event/ForeignEducationFairs",
    },
    {
      title: "Aptitude tests",
      description:
        "Learn about how we conduct our aptitude tests and how to prepare for them.",
      url: "/aptitude.JPG",
      link: "/Event/Aptitude",
    },
  ];

  // Auto-transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Item.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Item.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Item.length) % Item.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Item.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={Item[currentIndex].url}
            alt={Item[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#004aad]/80" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 sm:px-8 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {Item[currentIndex].title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              {Item[currentIndex].description}
            </motion.p>

            {/* Call to Action Button */}
            <Link href={Item[currentIndex].link}>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#004aad] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 text-lg shadow-lg"
              >
                Learn More{" "}
              </motion.button>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {Item.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-white rounded-full"
          />
        </div>

        {/* Item Counter */}
        <div className="absolute top-8 right-8 text-white/80 text-sm font-medium">
          {(currentIndex + 1).toString().padStart(2, "0")} /{" "}
          {Item.length.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
