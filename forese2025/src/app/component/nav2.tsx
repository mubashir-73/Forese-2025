"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import StaggeredMenu from "../../components/ui/StaggeredMenu";

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
        type: "spring",
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
        ease: [0.25, 0.46, 0.45, 0.94],
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
        ease: [0.25, 0.46, 0.45, 0.94],
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

  const menuItems = [
    {
      label: "HOME",
      ariaLabel: "Visit our Home Page",
      link: "/",
    },

    {
      label: "CODERS' FORUM",
      ariaLabel: "Go to Coders'forum",
      link: "/Coderforum",
    },

    { label: "EVENTS", ariaLabel: "Learn about our Events", link: "/Event" },

    { label: "TEAM", ariaLabel: "Get to know the team", link: "/Team" },

    {
      label: "SUBMIT RESUME",
      ariaLabel: "Submit your resume for reviewing",
      link: "/Resume",
    },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/ForeseTech" },

    { label: "LinkedIn", link: "https://www.linkedin.com/company/forese/" },
  ];

  return (
    <>
      {/* Mobile StaggeredMenu - Full screen container */}
      <div className="md:hidden fixed inset-0 z-40 pointer-events-none">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl="/FOR.png"
          accentColor="#004aad"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center fixed top-0 left-0 right-0 h-20 z-50 w-full bg-transparent p-5 backdrop-blur-sm">
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

        <div className="flex gap-6 text-white font-light tracking-tight mr-10 items-center">
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
      </nav>
    </>
  );
}
