import React from "react";

interface NextStepButtonProps {
  isValid: boolean;
  dirty: boolean;
  onClick: () => void;
}

const NextStepButton: React.FC<NextStepButtonProps> = ({
  isValid,
  dirty,
  onClick,
}) => (
  <button
    type="button"
    className={`transition-all duration-300 ${
      isValid && dirty ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
    } py-2 px-6 rounded-full w-full sm:w-[248px] flex items-center justify-center sm:justify-between`}
    onClick={onClick}
    disabled={!isValid || !dirty}
  >
    Следующий шаг
    <span className="ml-2 text-lg font-bold">→</span>
  </button>
);

export default NextStepButton;
