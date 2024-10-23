import styled from 'styled-components';

import ChattingCell from '@@pages/Message/parts/ChattingCell';

const StyledChattingList = styled.div`
  display: flex;
  flex-direction: column;
`;

function ChattingList() {
  return (
    <StyledChattingList>
      <ChattingCell />
      <ChattingCell />
    </StyledChattingList>
  );
}

export default ChattingList;
