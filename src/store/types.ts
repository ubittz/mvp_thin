import { CertificateState } from '@@stores/certificate/type';
import { HomeState } from '@@stores/home/type';
import { MessageState } from '@@stores/message/type';
import { ServiceState } from '@@stores/service/type';

export interface AppState {
  home: HomeState;
  message: MessageState;
  service: ServiceState;
  certificate: CertificateState;
}
