// components/Loading.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingProps {
  onLoadingComplete: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for fade out animation
    }, 5000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        <div className="text-center">
          <Image
            src="/Loading.gif" // Place your GIF in the public folder
            alt="Loading..."
            width={200}
            height={200}
            priority
            unoptimized // Important for GIFs to animate
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <Image
          src="/Loading.gif" // Place your GIF in the public folder
          alt="Loading..."
          width={200}
          height={200}
          priority
          unoptimized // Important for GIFs to animate
        />
      </div>
    </div>
  );
}
