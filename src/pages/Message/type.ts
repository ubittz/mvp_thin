import { Message } from '@@stores/message/type';

export interface MessageCellProps {
  message: Message;
  isRecept?: boolean;
  showIcon?: boolean;
  showTime?: boolean;
}
