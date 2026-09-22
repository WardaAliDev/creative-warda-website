"use client";

import { useEffect, useState } from "react";

const WORDS = ["Booked", "Ranked", "Trusted", "Reviewed", "Remembered"];

export default function RotatingWord({ colorClassName = "text-rust" }: { colorClassName?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.12em] w-full overflow-hidden align-bottom">
      {WORDS.map((word, i) => (
        <span
          key={word}
          className={`rotate-word italic ${colorClassName} ${i === index ? "is-current" : ""}`}
          aria-hidden={i !== index}
        >
          {word}
        </span>
      ))}
      <span className="invisible">{WORDS[0]}</span>
    </span>
  );
}
