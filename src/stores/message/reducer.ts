import { createAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '@@store/types';
import { MESSAGE_DATA } from '@@stores/message/constants';
import { Chatting, Message, MessageState } from '@@stores/message/type';

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

export const createChattingSuccess = createAction<number>('message/createChattingSuccess');

export const createChattingRequest = createAsyncThunk(
  'message/createChattingRequest',
  async (userId: number, { dispatch, getState, fulfillWithValue }) => {
    const state = getState() as AppState;
    const chattingList = state.message.chattingList;

    const index = chattingList.findIndex((chatting) => chatting.userId === userId);

    if (index === -1) {
      const newId = chattingList[chattingList.length - 1].id + 1;
      const newChatting: Chatting = {
        id: newId,
        userId,
      };
      dispatch(createChattingSuccess(newId));
      return fulfillWithValue(newChatting);
    } else {
      const id = chattingList[index].id;
      dispatch(createChattingSuccess(id));
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(createChattingRequest.fulfilled, (state, { payload }: PayloadAction<Chatting | undefined>) => {
      if (payload) {
        state.chattingList.push(payload);
      }
    });
  },
});

export const { appendMessage } = messageSlice.actions;

export default messageSlice.reducer;
