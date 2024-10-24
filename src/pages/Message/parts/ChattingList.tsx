import styled from 'styled-components';

import ChattingCell from '@@pages/Message/parts/ChattingCell';
import { useAppState } from '@@store/hooks';

const StyledChattingList = styled.div`
  display: flex;
  flex-direction: column;
`;

function ChattingList() {
  const chattingList = useAppState((state) => state.message.chattingList);

  return (
    <StyledChattingList>
      {chattingList.map(({ id }) => (
        <ChattingCell key={id} id={id} />
      ))}
    </StyledChattingList>
  );
}

export default ChattingList;
