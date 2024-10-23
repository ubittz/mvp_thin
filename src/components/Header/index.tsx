import styled from 'styled-components';

import { HeaderProps } from '@@components/Header/type';
import { COLORS } from '@@constants/colors';
import { LeftArrowIcon } from '@@constants/images';

const StyledHeader = styled.div<{ $hiddenBack?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;

  background: ${COLORS.GRAY_SCALE_000};
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};

  .black_space {
    width: 24px;
    display: ${({ $hiddenBack }) => ($hiddenBack ? 'none' : 'block')};
  }
`;

function Header({ hiddenBack, onBack, children }: HeaderProps) {
  return (
    <StyledHeader $hiddenBack={hiddenBack}>
      {!hiddenBack && <LeftArrowIcon onClick={onBack} />}
      {children}
      <div className='black_space' />
    </StyledHeader>
  );
}

export default Header;
