"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Error Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Something went wrong!
        </motion.h1>

        {/* Error Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 mb-8 text-lg"
        >
          We encountered an unexpected error. Dont worry, our team has been
          notified and were working on it.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={reset}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            Go Home
          </Link>
        </motion.div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === "development" && (
          <motion.details
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 text-left"
          >
            <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors">
              Error Details (Development Only)
            </summary>
            <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-red-400 text-sm overflow-auto">
              {error.message}
              {error.stack && (
                <>
                  {"\n\nStack Trace:\n"}
                  {error.stack}
                </>
              )}
            </pre>
          </motion.details>
        )}

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-20" />
        </motion.div>
      </motion.div>
    </div>
  );
}
