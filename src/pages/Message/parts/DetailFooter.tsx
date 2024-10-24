import { FormEventHandler, useState } from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { useAppState } from '@@store/hooks';
import { appendMessage } from '@@stores/message/reducer';

const StyledDetailFooter = styled.div`
  padding: 14px 16px;
  background: ${COLORS.GRAY_SCALE_000};
  border-top: 1px solid ${COLORS.GRAY_SCALE_050};

  .chatting__footer_input__wrap {
    display: flex;
    gap: 4px;

    border-radius: 64px;
    padding: 12px 16px;
    background: ${COLORS.GRAY_SCALE_050};

    .chatting__footer_input {
      flex: 1;
      height: 100%;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.04em;

      background: transparent;

      &::placeholder {
        color: ${COLORS.GRAY_SCALE_300};
      }
    }

    .chatting__footer_button {
      flex: 0 0 auto;
      border: none;
      outline: none;
      background: transparent;
    }
  }
`;

function DetailFooter({ id, onSubmit }: { id: number; onSubmit: () => void }) {
  const dispatch = useDispatch();
  const me = useAppState((state) => state.home.me);

  const [text, setText] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    dispatch(
      appendMessage({
        text,
        chattingId: id,
        userId: me?.id ?? 0,
        createAt: new Date(),
      })
    );
    setText('');
    onSubmit();
  };

  return (
    <StyledDetailFooter className='chatting__footer' onSubmit={handleSubmit}>
      <form className='chatting__footer_input__wrap'>
        <input className='chatting__footer_input' placeholder='메시지를 입력해 주세요.' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='chatting__footer_button' type='submit' disabled={!text.trim().length}>
          <Typography.MediumButton color={COLORS.MAIN_700}>전송</Typography.MediumButton>
        </button>
      </form>
    </StyledDetailFooter>
  );
}

export default DetailFooter;
