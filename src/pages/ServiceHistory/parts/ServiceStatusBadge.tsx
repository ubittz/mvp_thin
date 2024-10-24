import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { SERVICE_STATUS_BACKGROND, SERVICE_STATUS_COLOR, SERVICE_STATUS_STRINGS } from '@@pages/ServiceHistory/constants';
import { ServiceStatus } from '@@stores/service/type';

const StyledServiceStatusBadge = styled.div<{ $status: ServiceStatus }>`
  padding: 4px 10px;

  border-radius: 4px;
  background: ${({ $status }) => SERVICE_STATUS_BACKGROND[$status]};
  color: ${({ $status }) => SERVICE_STATUS_COLOR[$status]};
`;

function ServiceStatusBadge({ status }: { status: ServiceStatus }) {
  return (
    <StyledServiceStatusBadge className='service_status__badge' $status={status}>
      <Typography.Caption>{SERVICE_STATUS_STRINGS[status]}</Typography.Caption>
    </StyledServiceStatusBadge>
  );
}

export default ServiceStatusBadge;
