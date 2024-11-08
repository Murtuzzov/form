import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="fixed left-1/2 transform -translate-x-1/2 top-2 sm:top-6 w-full px-4 sm:px-8 max-w-lg z-50">
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

export default ProgressBar;
