"use client";

import React, { useEffect } from "react";

const spinnerKeyframes = `
  @keyframes lds-spinner {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const GlobalStyle = () => {
  useEffect(() => {
    if (!document.getElementById("spinner-style")) {
      const styleEl = document.createElement("style");
      styleEl.id = "spinner-style";
      styleEl.textContent = spinnerKeyframes;
      document.head.appendChild(styleEl);

      return () => {
        const styleElement = document.getElementById("spinner-style");
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      };
    }
  }, []);

  return null;
};

const sizes = {
  xs: 10,
  sm: 16,
  md: 20,
  lg: 40,
  xl: 80,
};

type SpinnerSize = keyof typeof sizes | number;

interface SpinnerProps {
  className?: string;
  size?: SpinnerSize;
  opacity?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  className = "",
  size = "md",
  opacity = 0.7,
}) => {
  const numericSize = typeof size === "string" ? sizes[size] : size;

  const ratio = numericSize / 80;

  return (
    <>
      <GlobalStyle />
      <div
        className={`inline-block relative text-white-800 ${className}`}
        style={{
          width: `${numericSize}px`,
          height: `${numericSize}px`,
          opacity: opacity,
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              transformOrigin: `${numericSize / 2}px ${numericSize / 2}px`,
              transform: `rotate(${index * 30}deg)`,
              animation: "lds-spinner 1.2s linear infinite",
              animationDelay: `${(index * -0.1).toFixed(1)}s`,
            }}
          >
            <div
              className="absolute rounded bg-current"
              style={{
                top: `${3.2 * ratio}px`,
                left: `${36.8 * ratio}px`,
                width: `${6.4 * ratio}px`,
                height: `${17.6 * ratio}px`,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Spinner;
