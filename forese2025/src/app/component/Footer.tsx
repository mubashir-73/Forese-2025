"use client";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
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
    <footer className="bg-gray-900 text-white relative z-50">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
      </div>

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
              <motion.div
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="https://www.linkedin.com/company/forese/">
                  <FaLinkedin className="h-5 w-5" />
                </Link>
              </motion.div>
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
              {[
                { label: "Home", href: "/" },
                { label: "Events", href: "/Event" },
                { label: "Team", href: "/Team" },
                { label: "Gallery", href: "/gallery" },
              ].map((item, index) => (
                <motion.li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block py-1"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}{" "}
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
                <span className="text-gray-300 text-sm">forese@svce.ac.in</span>
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
    </footer>
  );
}
