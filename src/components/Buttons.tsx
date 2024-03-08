import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva("px-4 py-2 rounded-md transition", {
  variants: {
    color: {
      default: "",
      dark: "bg-black text-white hover:bg-blue-600/90",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

const Button: React.FC<ButtonProps> = (props) => {
  const { color, className, children, ...other } = props;

  return (
    <button className={cn(buttonVariants({ color, className }))} {...other}>
      {children}
    </button>
  );
};

export default Button;
