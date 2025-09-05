"use client";
import Beams from "../../components/Beams";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaPhone as FaPhoneAlt } from "react-icons/fa6";
import CountUp from "../../components/ui/CountUp";
import Image from "next/image";
import Carousel from "../../components/ui/Carousel";
import { FaUserPlus } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { GiAwareness } from "react-icons/gi";
import { IoIosTrendingUp } from "react-icons/io";
import { AiOutlineRise } from "react-icons/ai";
import {
  MdWork,
  MdSchool,
  MdPeople,
  MdQuiz,
  MdForum,
  MdCode,
} from "react-icons/md";
import RotatingText from "../../components/ui/RotatingText";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function StickyScroll() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const eventData = [
    {
      text: "Mock Placements",
      icon: <MdWork className="h-12 w-12 text-white" />,
    },
    {
      text: "Foreign Education Fairs",
      icon: <MdSchool className="h-12 w-12 text-white" />,
    },
    {
      text: "Soft Skills Workshops",
      icon: <MdPeople className="h-12 w-12 text-white" />,
    },
    {
      text: "Aptitude Tests",
      icon: <MdQuiz className="h-12 w-12 text-white" />,
    },
    {
      text: "Group Discussions",
      icon: <MdForum className="h-12 w-12 text-white" />,
    },
    { text: "Hackathons", icon: <MdCode className="h-12 w-12 text-white" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % eventData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const items: Array<{
    title: string;
    description: string;
    id: number;
    icon: React.ReactNode;
  }> = [
    {
      title: "Grow your Network",
      description:
        "Forese conducts various events to connect students with their peers.",
      id: 1,
      icon: <FaUserPlus className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Improve your Communication",
      description:
        "Students understand how to communicate and interact in a corporate environment.",
      id: 2,
      icon: <RiSpeakFill className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Professional Etiquette",
      description: "We provide a professional and respectful environment.",
      id: 3,
      icon: <FaHandshake className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Gaining Soft Skills",
      description:
        "Students gain soft skills like teamwork, leadership, and communication.",
      id: 4,
      icon: <GiAwareness className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Increase Quality of Opportunities",
      description:
        "Our members are renowned for their skills and qualifications.",
      id: 5,
      icon: <IoIosTrendingUp className="h-[16px] w-[16px] text-white" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const scaleUpVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const bounceVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      {/* First Section - Enhanced with animations */}
      <motion.div
        className="h-screen w-full flex-col justify-center items-center bg-blue-900 sticky top-0 z-10 pt-30 gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="flex justify-center" variants={scaleUpVariant}>
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Image src="/FOR.png" alt="FOR" width={100} height={85} />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex text-center justify-center items-center mt-3"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl md:text-7xl text-white mb-4 font-semibold"
            style={{ fontFamily: "var(--font-poppins)" }}
            whileInView={{
              scale: [0.9, 1.02, 1],
              transition: { duration: 1.2 },
            }}
          >
            Shaping Futures, Beyond the Classroom
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex text-center text-xl justify-center items-center mt-3 md:px-30"
          variants={slideInFromLeft}
        >
          <p className="text-white">
            FORESE (Forum for Economic Studies by Engineers) is a student-run
            club that connects education with real-world opportunities. It helps
            students prepare for placements and higher studies through
            workshops, events, and practical learning. FORESE also focuses on
            building important skills like teamwork, communication, and
            problem-solving, creating a space where students can grow and move
            confidently towards their goals.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-5"
          variants={bounceVariant}
        >
          <div style={{ height: "600px", position: "relative" }}>
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={true}
              items={items}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Second Section - Enhanced with icon carousel */}
      <motion.div
        className="flex h-screen w-full flex-col justify-center items-center bg-[#0d5c63] sticky top-0 z-20 pt-30 gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex justify-center items-center"
          variants={slideInFromRight}
        >
          <motion.div
            className="text-sm inline-flex text-white mb-4 border border-white px-3 py-1 rounded-lg tracking-tight"
            whileHover={{
              scale: 1.05,
              borderColor: "#ffffff80",
            }}
          >
            What we do?
          </motion.div>
        </motion.div>

        {/* Animated Icon Carousel */}
        <motion.div
          className="flex justify-center items-center mb-6"
          variants={scaleUpVariant}
        >
          <motion.div
            key={currentEventIndex}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 300,
              duration: 0.6,
            }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            {eventData[currentEventIndex].icon}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center font-semibold items-center text-white text-3xl md:text-7xl"
          style={{ fontFamily: "var(--font-poppins)" }}
          variants={itemVariants}
        >
          <div>
            <span className="md:inline-flex items-center gap-2 text-[#fffffa] text-center">
              We organize
              <RotatingText
                texts={[
                  "Mock Placements",
                  "Foreign Education Fairs",
                  "Soft Skills Workshops",
                  "Aptitude Tests",
                  "Group Discussions",
                  "Hackathons",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#0d5c63] text-[#fffffa] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg leading-none"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center text-white text-xl mt-10"
          variants={slideInFromLeft}
        >
          <p className="text-center">
            Want to know more about the events we organise? Check out our events
            page!
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-5"
          variants={bounceVariant}
        >
          <Link href="/Event">
            <motion.button
              className="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Go to Events
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Third Section - Enhanced statistics */}
      <motion.div
        className="h-screen w-full flex flex-col justify-center items-center bg-[#0b3954] sticky top-0 pt-30 z-30 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex justify-center text-center"
          variants={scaleUpVariant}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.6 },
            }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <AiOutlineRise className="text-white h-20 w-20" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center text-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-white text-4xl text-center md:text-7xl"
            whileInView={{
              scale: [0.9, 1.05, 1],
              transition: { duration: 1 },
            }}
          >
            Largest HR–student engagement ever
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex w-full md:gap-30 items-center justify-center"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={bounceVariant}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <span className="inline-flex items-center gap-2 text-3xl text-white md:text-7xl">
              <CountUp
                from={0}
                to={80}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-white text-3xl md:text-9xl"
              />
              +
            </span>
            <h1 className="text-white text-center">HRs</h1>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={bounceVariant}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <span className="inline-flex items-center gap-2 text-3xl text-white md:text-7xl">
              <CountUp
                from={0}
                to={3000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-white text-3xl md:text-9xl"
              />
              +
            </span>
            <h1 className="text-white text-center">Students interviewed</h1>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center text-center"
          variants={slideInFromRight}
        >
          <motion.h1
            className="text-white text-4xl text-center md:text-7xl"
            whileInView={{
              opacity: [0, 1],
              y: [30, 0],
              transition: { duration: 0.8, delay: 0.5 },
            }}
          >
            For Mock Placements
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Enhanced Contact Section - Keep as is */}
      <motion.div
        className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-16 overflow-hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Background decorations */}
        <div
          className="absolute inset-0"
          style={{ width: "100%", height: "100%px", position: "absolute" }}
        >
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-8 sm:space-y-12 lg:space-y-16 relative z-10">
          {/* Phone Icon */}
          <motion.div className="flex justify-center" variants={scaleUpVariant}>
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-full bg-gradient-to-r from-zinc-600/20 to-grey-600/20 backdrop-blur-sm border border-white/10"
            >
              <FaPhoneAlt className="text-white h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 drop-shadow-2xl" />
            </motion.div>
          </motion.div>

          {/* Contact Us Title */}
          <motion.div className="text-center" variants={itemVariants}>
            <h1
              className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-wider drop-shadow-2xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              CONTACT US
            </h1>
            <motion.div
              className="h-1 w-32 sm:w-48 bg-gradient-to-r from-zinc-500 to-grey-900 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl"
            variants={containerVariants}
          >
            <motion.div
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaEnvelope className="text-blue-400 h-8 w-8 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">forese@svce.ac.in</p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaPhone className="text-green-400 h-8 w-8 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">+91 879987969</p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaMapMarkerAlt className="text-red-400 h-8 w-8 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">
                Location
              </h3>
              <p className="text-gray-300 text-sm">
                Sri Venkateswara College of Engineering
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Footer Section - Keep as is */}
      <footer className="bg-gray-900 text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* FORESE Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FORESE
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Forum for Economic Studies by Engineers - Shaping futures beyond
                the classroom through practical learning and real-world
                opportunities.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About Us", "Events", "Team", "Gallery"].map(
                  (link, index) => (
                    <motion.li key={link}>
                      <Link
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block py-1"
                      >
                        {link}
                      </Link>
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">What We Do</h3>
              <ul className="space-y-2">
                {[
                  "Mock Placements",
                  "Workshops",
                  "Career Guidance",
                  "Skill Development",
                ].map((service, index) => (
                  <motion.li key={service}>
                    <span className="text-gray-300 text-sm block py-1">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    forese@svce.ac.in
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-400 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91 9876543210</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-red-400 h-4 w-4 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-sm">
                    Sri Venkateswara College of Engineering
                    <br />
                    Sriperumbudur, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 FORESE. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        </div>
      </footer>
    </>
  );
}
