"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        duration: 0.5,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navLinks = [
    { href: "/Coderforum", label: "CODERS' FORUM" },
    { href: "/Event", label: "EVENTS" },
    { href: "/Team", label: "TEAM" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center fixed top-0 left-0 right-0 h-20 z-50 w-full bg-transparent p-5 backdrop-blur-sm">
        <Link href="/" className="z-50">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/FOR.png" alt="logo" width={100} height={85} />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-white font-light tracking-tight mr-10 items-center">
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <motion.p
                className="relative cursor-pointer transition-colors duration-300"
                whileHover={{
                  scale: 1.05,
                  color: "#60a5fa",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400"
                  whileHover={{
                    width: "100%",
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.p>
            </Link>
          ))}
          <motion.button
            className="bg-white text-black rounded-md px-4 py-2 font-light hover:bg-gray-100 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            SUBMIT RESUME
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="md:hidden text-white z-50 relative"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8" />
            )}
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-40 flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              transformOrigin: "top right",
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />

            {/* Navigation Links */}
            <div className="flex flex-col items-center space-y-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                >
                  <Link href={link.href} onClick={toggleMenu}>
                    <motion.h2
                      className="text-white text-3xl font-light tracking-wider cursor-pointer relative"
                      whileHover={{
                        scale: 1.1,
                        color: "#60a5fa",
                        textShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                      <motion.div
                        className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-blue-400 transform -translate-x-1/2"
                        whileHover={{
                          width: "100%",
                          transition: { duration: 0.3 },
                        }}
                      />
                    </motion.h2>
                  </Link>
                </motion.div>
              ))}

              {/* Submit Resume Button */}
              <motion.div
                variants={buttonVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.button
                  className="bg-white text-black rounded-lg px-8 py-4 font-light text-lg tracking-wider mt-8"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
                    backgroundColor: "#f3f4f6",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                >
                  SUBMIT RESUME
                </motion.button>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full" />
            <div className="absolute bottom-20 right-10 w-16 h-16 border border-blue-400/20 rounded-full" />
            <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
