import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export interface InputFormGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  inputType?: InputType;
}

export type InputType = 'underline' | 'outline' | 'fill';
