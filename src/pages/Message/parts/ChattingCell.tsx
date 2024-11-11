import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { useAppState } from '@@store/hooks';

const StyledChattingCell = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px;
  background: ${COLORS.GRAY_SCALE_000};
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};

  .chatting_icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: ${COLORS.GRAY_SCALE_050};
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .chatting_info {
    /* 8px: 이미지와의 여백 52px: 이미지 너비  */
    max-width: calc(100% - 8px - 52px);
    display: flex;
    flex-direction: column;
    gap: 4px;

    .chatting_info__top {
      display: flex;
      gap: 4px;
    }

    .chatting_info__bottom {
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

function ChattingCell({ id }: { id: number }) {
  const navigate = useNavigate();

  const chatting = useAppState((state) => state.message.chattingList).find((chatting) => chatting.id === +id);
  const profile = useAppState((state) => state.home.workerList).find((worker) => worker.id === chatting?.userId);
  const lastMessage = useAppState((state) => state.message.messageList)
    .filter((message) => message.chattingId === chatting?.id)
    .reverse()[0];

  if (!chatting || !profile || !lastMessage) return null;

  const handleClick = () => {
    navigate(`/thin/message/${id}`);
  };

  return (
    <StyledChattingCell onClick={handleClick}>
      <div className='chatting_icon'>
        <img src={profile.image} />
      </div>
      <div className='chatting_info'>
        <div className='chatting_info__top'>
          <Typography.SmallBody>{profile.name}</Typography.SmallBody>
          <Typography.SmallBody color={COLORS.GRAY_SCALE_400}>매칭중</Typography.SmallBody>
        </div>
        <div className='chatting_info__bottom'>
          <Typography.SmallBody className='chatting_info__last_message' color={COLORS.GRAY_SCALE_600}>
            {lastMessage.text}
          </Typography.SmallBody>
        </div>
      </div>
    </StyledChattingCell>
  );
}

export default ChattingCell;
