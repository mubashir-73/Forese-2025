"use client";
import Squares from "../../../components/ui/Squares";

import DarkVeil from "../../../components/ui/DarkVeil";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "../../../components/ui/SpotlightCard";
import ShinyText from "../../../components/ui/Shinytext";

const HackathonPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      title: "Innovation Hub",
      description:
        "A platform where creativity meets technology, fostering groundbreaking ideas and solutions.",
      icon: "🚀",
      delay: 0.1,
    },
    {
      title: "Team Collaboration",
      description:
        "Connect with developers, designers, and innovators to build amazing projects.",
      icon: "👥",
      delay: 0.2,
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from industry professionals throughout the event.",
      icon: "🎯",
      delay: 0.3,
    },
    {
      title: "Prizes & Recognition",
      description:
        "Win exciting prizes and get recognized for your innovation.",
      icon: "🏆",
      delay: 0.4,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-transparent overflow-hidden"
    >
      <div className="fixed inset-0 -z-10">
        <div
          className="bg-black"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Squares
            speed={0.2}
            squareSize={40}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#004aad"
            hoverFillColor="#222"
          />
        </div>{" "}
      </div>

      <motion.section
        style={{ y, opacity }}
        className="relative z-10 min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div
          className="max-w-7xl mx-auto text-center"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <ShinyText
            text="FORESE Hackathon"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            speed={3}
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            A hackathon like no other, where students can showcase their skills
            and collaborate with like‑minded peers to build innovative
            solutions.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full text-lg shadow-lg"
              href="#features"
            >
              Explore Features
            </motion.a>
            <Link href="/Event">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg backdrop-blur-sm hover:bg-white/10"
              >
                Back to Events
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      <section
        id="features"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Why Join Our Hackathon?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: f.delay }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <SpotlightCard className="h-full p-6 text-center">
                  <div className="text-6xl mb-4">{f.icon}</div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-white/80">{f.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/hackathon.JPG", alt: "Hackathon Event" },
              { src: "/CoderForum.png", alt: "Coding Session" },
              { src: "/groupdiscussion.JPG", alt: "Team Discussion" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonPage;
