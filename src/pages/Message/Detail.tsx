import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import { Typography } from '@@components/Typography';

const StyledMessageDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .message_detail__body {
    flex: 1;
    overflow-y: scroll;
  }
`;

function MessageDetail() {
  const navigate = useNavigate();

  return (
    <StyledMessageDetail>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>김재현</Typography.MediumSubTitle>
      </Header>
      <div className='message_detail__body'></div>
    </StyledMessageDetail>
  );
}

export default MessageDetail;
