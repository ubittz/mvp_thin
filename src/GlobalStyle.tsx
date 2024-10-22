import styled from "styled-components";

import { COLORS } from "@@constants/colors";

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 기본 글꼴 */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    color: ${COLORS.GRAY_SCALE_900};
  }
`;

export default GlobalStyle;
