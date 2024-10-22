import styled from "styled-components";

import { AdditionalTypographyProps } from "@@components/Typography/type";
import { COLORS } from "@@constants/colors";

const Text = styled.p<AdditionalTypographyProps>`
  letter-spacing: -0.04em;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;
  color: ${({ color }) => color ?? COLORS.GRAY_SCALE_900};
`;

export default Text;
