import React from 'react';

interface SpartanEmblemProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const SpartanEmblem: React.FC<SpartanEmblemProps> = ({
  className = "",
  size = 40,
  glow = true
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${glow ? 'animate-neon-pulse' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spartanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1E27" />
            <stop offset="50%" stopColor="#E50914" />
            <stop offset="100%" stopColor="#990000" />
          </linearGradient>
        </defs>

        {/* Outer Shield Crest */}
        <polygon
          points="250,20 440,110 440,350 250,480 60,350 60,110"
          fill="#0F0F17"
          stroke="url(#spartanGradient)"
          strokeWidth="12"
        />

        {/* Red Spartan Helmet Plume curving into 'S' */}
        <path
          d="M 250 60 C 320 60 390 95 390 150 C 390 200 330 230 250 250 C 170 270 120 300 120 360 C 120 420 190 440 250 440 C 300 440 340 420 370 390 L 350 350 C 320 375 285 390 250 390 C 200 390 170 370 170 345 C 170 320 215 295 295 275 C 365 255 425 215 425 150 C 425 80 345 25 250 25 C 190 25 135 50 95 90 L 125 125 C 158 95 200 60 250 60 Z"
          fill="url(#spartanGradient)"
        />

        {/* Cyber Visor Slit */}
        <polygon points="180,180 320,180 290,205 210,205" fill="#FFFFFF" opacity="0.9" />

        {/* Nose Guard */}
        <path d="M 250 205 L 265 300 L 250 330 L 235 300 Z" fill="url(#spartanGradient)" />
      </svg>
    </div>
  );
};
