import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { UserIcon } from '@@constants/images';

const StyledChattingCell = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px;
  background: ${COLORS.GRAY_SCALE_000};
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};

  .chatting_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: ${COLORS.GRAY_SCALE_050};
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

function ChattingCell() {
  return (
    <StyledChattingCell>
      <div className='chatting_icon'>
        <UserIcon />
      </div>
      <div className='chatting_info'>
        <div className='chatting_info__top'>
          <Typography.SmallBody>김재현</Typography.SmallBody>
          <Typography.SmallBody color={COLORS.GRAY_SCALE_400}>매칭중</Typography.SmallBody>
        </div>
        <div className='chatting_info__bottom'>
          <Typography.SmallBody className='chatting_info__last_message' color={COLORS.GRAY_SCALE_600}>
            김재현 입니다! 올려주신 공고 보고 지원하고 싶었어요. 제가 LA에 있을 때 한국에 대한 그리움,
          </Typography.SmallBody>
        </div>
      </div>
    </StyledChattingCell>
  );
}

export default ChattingCell;
