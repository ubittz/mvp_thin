import styled from 'styled-components';

import { TextFieldProps } from '@@components/TextField/type';
import { COLORS } from '@@constants/colors';
import { SearchIcon } from '@@constants/images';

const StyledTextField = styled.div`
  position: relative;
  height: 44px;

  .search__icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 16px;

  background: ${COLORS.GRAY_SCALE_000};
  border-radius: 64px;
  border: 1px solid ${COLORS.GRAY_SCALE_050};

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_300};
  }
`;

function TextField(props: TextFieldProps) {
  return (
    <StyledTextField>
      <StyledInput {...props} />
      <SearchIcon className='search__icon' />
    </StyledTextField>
  );
}

export default TextField;
