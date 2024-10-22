import { HTMLAttributes } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface AdditionalTypographyProps {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  color: string;
}
