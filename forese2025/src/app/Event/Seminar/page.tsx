"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SpotlightCard from "../../../components/ui/SpotlightCard";
import ShinyText from "../../../components/ui/Shinytext";

const SeminarPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.28), transparent 55%)` }} />
      </div>

      <motion.section style={{ y }} className="relative z-10 min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <ShinyText text="FORESE Seminars" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" speed={3} />
            <p className="mt-6 text-white/90 text-lg sm:text-xl leading-relaxed">
              FORESE conducts numerous seminars throughout the year by inviting guest speakers from various industries to provide students with essential guidance on topics such as entrance exam preparation, resume-building, soft skill development, higher studies, and placement interviews. This year, FORESE has already conducted two seminars successfully and is looking forward to hosting many more in the coming months.
            </p>
          </div>
          <div>
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image src="/Seminar.JPG" alt="FORESE Seminar" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SpotlightCard className="p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Role of Soft Skills in Careers</h3>
              <p className="text-white/90 leading-relaxed">
                One such seminar was an insightful session on “The Role of Soft Skills in Careers” presented by Mr. Malolan Lakshminarasimhan. The event emphasized the importance of soft skills as a critical factor in career growth and professional success across industries.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                Participants gained valuable insights into how communication, leadership, adaptability, and teamwork can shape their career trajectory. The seminar also explored how integrating these skills with domain expertise gives individuals a distinct advantage in an increasingly competitive environment.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                Attendees left the session equipped with practical strategies and a deeper appreciation of how soft skills serve as powerful enablers in navigating the evolving professional landscape.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Date: 29th July 2025</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Hosted by: FORESE</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Presenter: Mr. Malolan Lakshminarasimhan</span>
              </div>
            </SpotlightCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="grid grid-cols-2 gap-4">
              {["/Seminar.JPG", "/fored.JPG", "/FOR.png"].map((src, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                  <Image src={src} alt={`Seminar ${i + 1}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SeminarPage;


