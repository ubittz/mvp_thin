export interface MessageState {
  chattingList: Chatting[];
  messageList: Message[];
}

export interface Chatting {
  id: number;
  userId: number;
}

export interface Message {
  id: number;
  chattingId: number;
  userId: number;
  text: string;
  createAt: Date;
}
