import { InputHTMLAttributes } from "react";

export interface InputFormGroupProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputButtonProps?: {
    title: string;
    onClick: () => void;
  };
}
