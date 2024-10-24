import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Message, MessageState } from '@@stores/message/type';

const initialState: MessageState = {
  chattingList: [
    {
      id: 1,
      userId: 1,
    },
    {
      id: 2,
      userId: 2,
    },
  ],
  messageList: [
    {
      id: 1,
      chattingId: 1,
      userId: 1,
      text: '안녕하세요',
      createAt: new Date('2024-10-24 12:30:02'),
    },
    {
      id: 2,
      chattingId: 1,
      userId: 1,
      text: '김재현 입니다! 올려주신 공고 보고 지원하고 싶어 연락 드렸습니다.',
      createAt: new Date('2024-10-24 12:30:49'),
    },
    {
      id: 3,
      chattingId: 1,
      userId: 3,
      text: '안녕하세요!',
      createAt: new Date('2024-10-24 12:35:49'),
    },
    {
      id: 4,
      chattingId: 1,
      userId: 3,
      text: '포트폴리오 잘 봤습니다. 한 번 만나뵙고 싶은데, 괜찮으신 시간 있으신가요?',
      createAt: new Date('2024-10-24 12:35:58'),
    },
    {
      id: 5,
      chattingId: 2,
      userId: 2,
      text: '한 번 만나뵙고 싶은데, 괜찮으신 시간 있으신가요?',
      createAt: new Date('2024-10-24 12:35:58'),
    },
    {
      id: 6,
      chattingId: 1,
      userId: 2,
      text: '한 번 만나뵙고 싶은데, 괜찮으신 시간 있으신가요?',
      createAt: new Date('2024-10-25 12:35:58'),
    },
  ],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    appendMessage(state, { payload }: PayloadAction<Omit<Message, 'id'>>) {
      const newMessage: Message = {
        id: state.messageList[state.messageList.length - 1].id + 1,
        ...payload,
      };

      state.messageList = state.messageList.concat(newMessage);
    },
  },
});

export const { appendMessage } = messageSlice.actions;

export default messageSlice.reducer;
