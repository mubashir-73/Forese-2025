"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Example = () => {
  return (
    <div className="flex items-center justify-center bg-black px-8 py-24 text-white">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> We would love to help! Contact
            support for any issue you may face.
          </>
        }
        examples={[
          "Does your product work for SMBs?",
          "Can I pause my membership without losing my data?",
          "How does seat based pricing work?",
          "What's the meaning of life?",
        ]}
      />
    </div>
  );
};

export const BlockInTextCard = ({
  tag,
  text,
  examples,
}: {
  tag: string;
  text: ReactNode;
  examples: string[];
}) => {
  return (
    <div className="p-5 w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase text-white/80">
          {tag}
        </p>
        <hr className="border-white/30" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed text-white">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-white/20" />
      </div>
      <button className="w-full rounded-full border border-white py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black text-white">
        Contact Support
      </button>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-white/80">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
              className="text-white"
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

export default BlockInTextCard;
