import { InputHTMLAttributes } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  background?: string;
  height?: number;
  onClickIcon?: () => void;
}
