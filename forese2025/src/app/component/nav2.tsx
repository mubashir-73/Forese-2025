"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StaggeredMenu from "../../components/ui/StaggeredMenu";
import Button from "../../components/ui/button";

export default function Nav() {
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
          menuButtonColor="#000"
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
      <nav className="hidden md:flex justify-between items-center fixed top-0 left-0 right-0 h-16 z-50 w-full bg-blue-200/50 p-5 pl-0 pr-0 border-b-2 border-black backdrop-blur-sm ">
        <Link href="/" className="z-50">
          <motion.div
            className="bg-black h-16 w-40 pl-5 m-0 flex items-center"
            style={{ clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/FOR.png" alt="logo" width={100} height={85} />
          </motion.div>
        </Link>{" "}
        <div className="flex gap-6 text-black font-medium tracking-tight mr-0 items-center">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <motion.p
                className="relative cursor-pointer transition-colors duration-300"
                whileHover={{
                  scale: 1.05,
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
          <Link href="/Resume">
            <motion.button
              className="bg-black text-white px-4 py-2 font-medium hover:bg-gray-100 transition-all duration-300 h-16"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              SUBMIT RESUME
            </motion.button>
          </Link>
        </div>
      </nav>
    </>
  );
}
