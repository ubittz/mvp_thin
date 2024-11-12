import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  height: 100vh;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  background: ${COLORS.MAIN_400};
  padding: 10px;
`;

function NotFound() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(-1);
  };

  return (
    <StyledNotFound>
      <Typography.LargeBody>존재하지 않는 페이지입니다.</Typography.LargeBody>
      <StyledButton onClick={handleClickHome}>
        <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>이전 페이지로</Typography.MediumButton>
      </StyledButton>
    </StyledNotFound>
  );
}

export default NotFound;
