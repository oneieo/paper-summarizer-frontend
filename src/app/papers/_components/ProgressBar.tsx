import React from "react";

interface ProgressBarProps {
  progress: number;
  text: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, text }) => (
  <div className="w-full bg-[#c9d7f5] rounded-lg h-12 flex items-center px-6 mt-6 relative">
    <div
      className="absolute left-0 top-0 h-full bg-[#3b5998] rounded-lg transition-all duration-200"
      style={{ width: `${progress}%`, zIndex: 1 }}
    />

    <div className="relative z-10 flex justify-between w-full items-center">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" fill="#3b5998" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#e6eaf8" />
          <path
            d="M8 12.5l2.5 2.5 5-5"
            stroke="#3b5998"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span className="text-[#3b5998] font-medium z-1">{text}</span>
      </div>
      <span className="text-[#3b5998] font-medium">{progress}%</span>
    </div>
  </div>
);

export default ProgressBar;
