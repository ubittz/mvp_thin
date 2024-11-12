import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import ServiceHistoryFilterButton from '@@pages/ServiceHistory/parts/ServiceHistoryFilterButton';
import ServiceItem from '@@pages/ServiceHistory/parts/ServiceItem';
import { useAppState } from '@@store/hooks';
import { SERVICE_STATUS } from '@@stores/service/constants';
import { ServiceStatus } from '@@stores/service/type';

const StyledServiceHistory = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .service_history__filter {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 52px;
    padding: 0 16px;
    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .service_history__body {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
    background: ${COLORS.GRAY_SCALE_050};
    padding: 20px 16px;
    gap: 16px;
  }
`;

const FILTER_STATUSES = [
  SERVICE_STATUS.REQUESTED_OFFER,
  SERVICE_STATUS.CANCELED_OFFER,
  SERVICE_STATUS.PENDING,
  SERVICE_STATUS.MATCHED,
  SERVICE_STATUS.REJECTED,
];

function ServiceHistory() {
  const navigate = useNavigate();

  const serviceHistoryList = useAppState((state) => state.service.serviceHistoryList);

  const [selectedStatus, setSelectedStatus] = useState<ServiceStatus>();

  const handleClick = (status?: ServiceStatus) => {
    setSelectedStatus(status);
  };

  return (
    <StyledServiceHistory>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>서비스 내역</Typography.MediumSubTitle>
      </Header>
      <div className='service_history__filter'>
        <ServiceHistoryFilterButton onClick={handleClick} isActive={!selectedStatus} />
        {FILTER_STATUSES.map((status) => (
          <ServiceHistoryFilterButton key={status} status={status} onClick={handleClick} isActive={selectedStatus === status} />
        ))}
      </div>
      <div className='service_history__body'>
        {serviceHistoryList.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </StyledServiceHistory>
  );
}

export default ServiceHistory;
