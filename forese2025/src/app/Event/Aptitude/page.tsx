"use client";
import React, { useEffect, useRef, useState } from "react";
import Silk from "../../../components/ui/Silk";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SpotlightCard from "../../../components/ui/SpotlightCard";
import ShinyText from "../../../components/ui/Shinytext";

const AptitudePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      title: "Quantitative Aptitude",
      desc: "Sharpen numbers, ratios, speed, and accuracy.",
    },
    {
      title: "Logical Reasoning",
      desc: "Elevate critical thinking with puzzles and patterns.",
    },
    {
      title: "Verbal Ability",
      desc: "Improve grammar, vocabulary, and comprehension.",
    },
    {
      title: "Mock Tests",
      desc: "Timed practice aligned with placements and exams.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-transparent  overflow-hidden"
    >
      <div className="fixed inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#004aad"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <motion.section
        style={{ y }}
        className="relative z-10 min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <ShinyText
              text="FORESE Aptitude"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
              speed={3}
            />
            <p className="mt-6 text-white/90 text-lg sm:text-xl leading-relaxed">
              Practice modules, quizzes, and mentorship to strengthen
              Quantitative, Logical, and Verbal skills for placements and exams.
              Join our structured training with mock tests and analytics.
            </p>
          </div>
          <div>
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/aptitude.JPG"
                alt="Aptitude Training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full">
                <h3 className="text-white font-bold text-xl">{f.title}</h3>
                <p className="text-white/80 mt-2">{f.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Aptitude Moments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/aptitude.JPG", alt: "Aptitude Session" },
              { src: "/groupdiscussion.JPG", alt: "Group Prep" },
              { src: "/Forese.JPG", alt: "Training" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  {img.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AptitudePage;
