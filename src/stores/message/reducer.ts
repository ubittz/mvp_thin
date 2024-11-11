import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Message, MessageState } from '@@stores/message/type';

import { MESSAGE_DATA } from './constants';

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
  messageList: MESSAGE_DATA,
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
