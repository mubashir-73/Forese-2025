// components/ClientWrapper.tsx
"use client";
import { useState, useEffect, ReactNode } from "react";
import Loading from "../component/Loading";

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
      <div
        className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </>
  );
}
