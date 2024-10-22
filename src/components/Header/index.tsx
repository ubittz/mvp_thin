import styled from "styled-components";

import { HeaderProps } from "@@components/Header/type";
import { Typography } from "@@components/Typography";
import { COLORS } from "@@constants/colors";
import { LeftArrowIcon } from "@@constants/images";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;

  background: ${COLORS.GRAY_SCALE_000};
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};

  .black_space {
    width: 24px;
  }
`;

function Header({ title, onBack }: HeaderProps) {
  return (
    <StyledHeader>
      <LeftArrowIcon onClick={onBack} />
      <Typography.MediumSubTitle>{title}</Typography.MediumSubTitle>
      <div className="black_space" />
    </StyledHeader>
  );
}

export default Header;
