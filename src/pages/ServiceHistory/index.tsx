import { useState } from 'react';

import styled from 'styled-components';

import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { SERVICE_STATUS } from '@@stores/service/constants';
import { ServiceStatus } from '@@stores/service/type';

import ServiceHistoryFilterButton from './parts/ServiceHistoryFilterButton';
import ServiceItem from './parts/ServiceItem';

const StyledServiceHistory = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .service_history__filter {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 52px;
    padding: 0 16px;
    overflow-x: scroll;
    white-space: nowrap;
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
  const [selectedStatus, setSelectedStatus] = useState<ServiceStatus>();

  const handleClick = (status?: ServiceStatus) => {
    setSelectedStatus(status);
  };

  return (
    <StyledServiceHistory>
      <Header>
        <Typography.MediumSubTitle>서비스 내역</Typography.MediumSubTitle>
      </Header>
      <div className='service_history__filter'>
        <ServiceHistoryFilterButton onClick={handleClick} isActive={!selectedStatus} />
        {FILTER_STATUSES.map((status) => (
          <ServiceHistoryFilterButton key={status} status={status} onClick={handleClick} isActive={selectedStatus === status} />
        ))}
      </div>
      <div className='service_history__body'>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </StyledServiceHistory>
  );
}

export default ServiceHistory;
