import { HomeState } from '@@stores/home/type';
import { MessageState } from '@@stores/message/type';

export interface AppState {
  home: HomeState;
  message: MessageState;
}
