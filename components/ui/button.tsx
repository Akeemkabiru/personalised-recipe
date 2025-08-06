import { Loader } from "lucide-react";

type ButtonPropsType = {
  children: string;
  outline?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  greenBg?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  outline = false,
  isLoading = false,
  disabled = false,
  greenBg,
  onClick,
}: ButtonPropsType) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`font-semibold py-3 rounded-2xl shadow-lg transition-all duration-300 transform  w-full ${
        outline
          ? "border border-chef-orange text-chef-orange hover:bg-chef-orange hover:text-white"
          : ` hover:scale-105 text-white ${
              greenBg
                ? "bg-chef-green"
                : "bg-chef-orange hover:bg-chef-orange-light"
            }`
      }`}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
}
