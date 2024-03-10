import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

const textFieldVariants = cva(
  "flex items-center px-4 py-2 rounded-md transition w-full outline outline-1 outline-blue-400 ",
  {
    variants: {},
    defaultVariants: {},
  }
);

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof textFieldVariants> & {
    label: string;
    errorMessage?: string;
  };

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, errorMessage, ...other } = props;

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="input">
        {label} {other.required && <span className="text-red-600">*</span>}
      </label>
      <input {...other} className={cn(textFieldVariants({}))} id="input" />
      {errorMessage && <span className="text-red-500"> {errorMessage} </span>}
    </div>
  );
};

export default TextField;
