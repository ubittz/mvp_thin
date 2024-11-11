import { UserType } from '@@stores/home/type';
import { SERVICE_STATUS } from '@@stores/service/constants';
import { asType } from '@@types/common';

export interface ServiceState {
  serviceHistoryList: Service[];
}

export type ServiceStatus = asType<typeof SERVICE_STATUS>;

export interface Service {
  id: number;
  contractorId: number;
  contractorType: UserType;
  status: ServiceStatus;
  updatedAt: Date;
}
