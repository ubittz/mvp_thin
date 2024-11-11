import { USER_TYPE } from '@@stores/home/constants';
import { Service } from '@@stores/service/type';

export const SERVICE_STATUS = {
  IDLE: 'idle', // 아무 상태도 아님
  REQUESTED_OFFER: 'requested_offer', // 제안 요청
  CANCELED_OFFER: 'canceled_offer', // 제안 취소
  PENDING: 'pending', // 구인 진행 중
  MATCHED: 'matched', // 매칭 완료
  REJECTED: 'rejected', // 매칭 취소
} as const;

export const SERVICE_HISTORY_LIST: Service[] = [
  {
    id: 1,
    contractorId: 1,
    contractorType: USER_TYPE.WORKER,
    status: SERVICE_STATUS.REQUESTED_OFFER,
    updatedAt: new Date(),
  },
  {
    id: 2,
    contractorId: 1,
    contractorType: USER_TYPE.COMPANY,
    status: SERVICE_STATUS.PENDING,
    updatedAt: new Date(),
  },
  {
    id: 3,
    contractorId: 2,
    contractorType: USER_TYPE.WORKER,
    status: SERVICE_STATUS.MATCHED,
    updatedAt: new Date(),
  },
];
