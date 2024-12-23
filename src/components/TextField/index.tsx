import styled from 'styled-components';

import { TextFieldProps } from '@@components/TextField/type';
import { COLORS } from '@@constants/colors';
import { SearchIcon } from '@@constants/images';

const StyledTextField = styled.div<{ $height?: number }>`
  position: relative;
  height: ${({ $height }) => $height ?? 44}px;

  .search__icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledInput = styled.input<{ $background: string }>`
  width: 100%;
  height: 100%;
  padding: 0 16px;

  background: ${({ $background }) => $background};
  border-radius: 64px;
  border: 1px solid ${COLORS.GRAY_SCALE_050};

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.04em;

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_300};
  }
`;

function TextField({ background = COLORS.GRAY_SCALE_000, height, onClickIcon, ...props }: TextFieldProps) {
  return (
    <StyledTextField $height={height}>
      <StyledInput $background={background} {...props} />
      <SearchIcon className='search__icon' onClick={onClickIcon} />
    </StyledTextField>
  );
}

export default TextField;
