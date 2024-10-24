import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { UserIcon } from '@@constants/images';
import { MessageCellProps } from '@@pages/Message/type';

const StyledMessageCell = styled.div<{ $isRecept: boolean; $showIcon: boolean }>`
  display: flex;
  justify-content: ${({ $isRecept }) => ($isRecept ? 'flex-start' : 'flex-end')};

  .message_cell__wrap {
    display: flex;
    gap: 8px;
    align-items: flex-end;

    max-width: 80%;

    .message_cell__icon {
      flex: 0 0 auto;

      display: ${({ $isRecept }) => ($isRecept ? 'flex' : 'none')};
      visibility: ${({ $showIcon }) => ($showIcon ? 'visible' : 'hidden')};
      justify-content: center;
      align-items: center;

      width: 40px;
      height: 40px;

      border-radius: 50%;
      background: ${COLORS.GRAY_SCALE_050};
    }

    .message_cell__text_wrap {
      flex: 1;
      gap: 8px;
      display: flex;
      flex-direction: column;
      align-items: ${({ $isRecept }) => ($isRecept ? 'flex-start' : 'flex-end')};

      .message_cell__text {
        padding: 8px 14px;
        border-radius: 16px;
        background: ${({ $isRecept }) => ($isRecept ? COLORS.GRAY_SCALE_050 : COLORS.MAIN_400)};
      }
    }
  }
`;

function MessageCell({ message, isRecept = false, showIcon = false, showTime = false }: MessageCellProps) {
  return (
    <StyledMessageCell $isRecept={isRecept} $showIcon={showIcon}>
      <div className='message_cell__wrap'>
        <div className='message_cell__icon'>
          <UserIcon width={16} height={19} />
        </div>
        <div className='message_cell__text_wrap'>
          <div className='message_cell__text'>
            <Typography.SmallBody color={isRecept ? COLORS.GRAY_SCALE_800 : COLORS.GRAY_SCALE_000}>{message.text}</Typography.SmallBody>
          </div>
          {showTime && (
            <div className='message_cell__time'>
              <Typography.Caption as='span' color={COLORS.GRAY_SCALE_400}>
                {format(message.createAt, 'aaa h:mm', { locale: ko })}
              </Typography.Caption>
            </div>
          )}
        </div>
      </div>
    </StyledMessageCell>
  );
}

export default MessageCell;
