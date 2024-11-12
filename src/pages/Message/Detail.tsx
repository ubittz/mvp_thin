import React, { useEffect, useRef } from 'react';

import { differenceInCalendarDays, differenceInMinutes } from 'date-fns';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import DetailFooter from '@@pages/Message/parts/DetailFooter';
import MessageCell from '@@pages/Message/parts/MessageCell';
import MessageDateDivider from '@@pages/Message/parts/MessageDateDivider';
import { useAppState } from '@@store/hooks';
import { Message } from '@@stores/message/type';

const StyledMessageDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .message_detail__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow-y: scroll;
    padding: 0 16px;
    padding-top: 8px;
  }
`;

function MessageDetail() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const chattingId = +(id ?? 0);

  const bodyRef = useRef<HTMLDivElement>(null);

  const chatting = useAppState((state) => state.message.chattingList).find((chatting) => chatting.id === chattingId);
  const profile = useAppState((state) => state.home.workerList).find((worker) => worker.id === chatting?.userId);
  const messageList = useAppState((state) => state.message.messageList).filter((message) => message.chattingId === chattingId);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    setTimeout(() => {
      body.scrollTop = body.scrollHeight - body.offsetHeight;
    });
  }, [messageList]);

  if (!chatting || !profile) return <Navigate to='/not-found' replace />;

  return (
    <StyledMessageDetail>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>{profile.name}</Typography.MediumSubTitle>
      </Header>
      <div className='message_detail__body' ref={bodyRef}>
        {messageList.map((message, index, list) => {
          const prevMessage = list[index - 1] as Message | undefined;
          const nextMessage = list[index + 1] as Message | undefined;
          const isRecept = profile.id === message.userId;
          const isShowDate = !prevMessage?.createAt || differenceInCalendarDays(prevMessage.createAt, message.createAt) < 0;
          const isShowTime =
            !nextMessage || nextMessage.userId !== message.userId || differenceInMinutes(nextMessage.createAt, message.createAt) !== 0;

          return (
            <React.Fragment key={message.id}>
              {isShowDate && <MessageDateDivider date={message.createAt} />}
              <MessageCell
                key={message.id}
                message={message}
                image={profile.image}
                isRecept={isRecept}
                showTime={isShowTime}
                showIcon={isRecept && prevMessage?.userId !== message.userId}
              />
            </React.Fragment>
          );
        })}
      </div>
      <DetailFooter id={chattingId} />
    </StyledMessageDetail>
  );
}

export default MessageDetail;
