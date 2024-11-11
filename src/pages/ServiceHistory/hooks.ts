import { useDispatch } from 'react-redux';

import { SERVICE_STATUS } from '@@stores/service/constants';
import { approveMatch, approveOffer, rejectMatch, rejectOffer } from '@@stores/service/reducer';
import { ServiceStatus } from '@@stores/service/type';

export const useHandleServiceStatus = (id: number, status: ServiceStatus) => {
  const dispatch = useDispatch();

  const handleClickReject = () => {
    if (!confirm(status === SERVICE_STATUS.REQUESTED_OFFER ? '제안을 거절하시겠습니까?' : '매칭을 취소하시겠습니까?')) return;

    const action = status === SERVICE_STATUS.REQUESTED_OFFER ? rejectOffer : rejectMatch;
    dispatch(action({ id }));
  };

  const handleClickApprove = () => {
    if (!confirm(status === SERVICE_STATUS.REQUESTED_OFFER ? '제안을 수락하시겠습니까?' : '매칭을 확정하시겠습니까?')) return;

    const action = status === SERVICE_STATUS.REQUESTED_OFFER ? approveOffer : approveMatch;
    dispatch(action({ id }));
  };

  return {
    handleClickReject,
    handleClickApprove,
  };
};
