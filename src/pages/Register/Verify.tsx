import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';

const StyledVerify = styled.div`
  display: flex;
  flex-direction: column;
`;

function Verify() {
  const navigate = useNavigate();

  return (
    <StyledVerify>
      <Header title='회원가입' onBack={() => navigate('/register')} />
    </StyledVerify>
  );
}

export default Verify;
