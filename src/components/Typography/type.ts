import { HTMLAttributes } from "react";

import { SupportedHTMLElements } from "styled-components";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: SupportedHTMLElements;
}

export interface AdditionalTypographyProps {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  color?: string;
}
