import { SERVICE_STATUS } from '@@stores/service/constants';
import { asType } from '@@types/common';

export interface ServiceState {
  serviceHistoryList: Service[];
}

export interface Service {}

export type ServiceStatus = asType<typeof SERVICE_STATUS>;
