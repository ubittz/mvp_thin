import styled from "styled-components";

import {
  AdditionalTypographyProps,
  TypographyProps,
} from "@@components/Typography/type";

const StyledText = styled.p<AdditionalTypographyProps>`
  letter-spacing: -0.04em;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;
`;

function Text(props: TypographyProps & AdditionalTypographyProps) {
  return <StyledText {...props} />;
}

export default Text;
