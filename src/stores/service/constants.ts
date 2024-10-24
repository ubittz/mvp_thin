export const SERVICE_STATUS = {
  IDLE: 'idle', // 아무 상태도 아님
  REQUESTED_OFFER: 'requested_offer', // 제안 요청
  CANCELED_OFFER: 'canceled_offer', // 제안 취소
  PENDING: 'pending', // 구인 진행 중
  MATCHED: 'matched', // 매칭 완료
  REJECTED: 'rejected', // 매칭 취소
} as const;
