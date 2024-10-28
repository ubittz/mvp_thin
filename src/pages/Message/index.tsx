import styled from 'styled-components';

import GlobalNavigationBar from '@@components/GNB';
import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import ChattingList from '@@pages/Message/parts/ChattingList';

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .message__body {
    flex: 1;
    overflow-y: scroll;
  }
`;

function Message() {
  return (
    <StyledMessage>
      <Header hiddenBack>
        <Typography.SmallTitle>채팅</Typography.SmallTitle>
      </Header>
      <div className='message__body'>
        <ChattingList />
      </div>
      <GlobalNavigationBar />
    </StyledMessage>
  );
}

export default Message;
