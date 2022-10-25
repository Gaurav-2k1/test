import React from "react";

export default function HeadImageWithText({ src, children, className }) {
  return (
    <div
      className={`relative w-full bg-cover bg-center h-[40vh] bg-blend-overlay bg-secondary/50 ${src} ${className}`}
    >
      {children}
    </div>
  );
}
