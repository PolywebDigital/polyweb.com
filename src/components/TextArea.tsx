import { VariantProps, cva } from "class-variance-authority";
import { TextareaHTMLAttributes } from "react";
import { cn } from "../utils/cn";

const textAreaVariants = cva(
  "flex items-center px-4 py-2 rounded-md transition w-full outline outline-1 outline-blue-400 min-h-[150px]",
  {
    variants: {},
    defaultVariants: {},
  }
);

type TextFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textAreaVariants> & {
    label: string;
    errorMessage?: string;
  };

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, errorMessage, ...other } = props;

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="textarea">{label}</label>
      <textarea {...other} className={cn(textAreaVariants({}))} id="textarea" />
      {errorMessage && <span className="text-red-500"> {errorMessage} </span>}
    </div>
  );
};

export default TextField;
