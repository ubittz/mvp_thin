import { Message } from '@@stores/message/type';

export interface MessageCellProps {
  message: Message;
  image?: string;
  isRecept?: boolean;
  showIcon?: boolean;
  showTime?: boolean;
}
