import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "flex items-center px-4 py-2 gap-2 rounded-md transition w-fit",
  {
    variants: {
      buttonType: {
        default: "",
        bordered:
          "border border-2 border-solid border-black hover:bg-black hover:text-white",
        dark: "bg-black text-white hover:bg-blue-600/90",
      },
    },
    defaultVariants: {
      buttonType: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, buttonType, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ buttonType, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
