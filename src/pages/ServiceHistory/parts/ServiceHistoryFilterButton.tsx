import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { SERVICE_STATUS_STRINGS } from '@@pages/ServiceHistory/constants';
import { ServiceStatus } from '@@stores/service/type';

const StyledServiceHistoryFilterButton = styled.button<{ $isActive: boolean }>`
  height: 32px;
  padding: 0 14px;

  outline: none;
  border: 1px solid;
  border-radius: 44px;
  background: ${COLORS.GRAY_SCALE_000};
  border-color: ${({ $isActive }) => ($isActive ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_050)};
`;

function ServiceHistoryFilterButton({
  isActive = false,
  status,
  onClick,
}: {
  isActive?: boolean;
  status?: ServiceStatus;
  onClick: (status?: ServiceStatus) => void;
}) {
  const handleClick = () => {
    onClick(status);
  };

  return (
    <StyledServiceHistoryFilterButton $isActive={isActive} onClick={handleClick}>
      <Typography.MediumButton as='span' color={isActive ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_700}>
        {status ? SERVICE_STATUS_STRINGS[status] : '전체'}
      </Typography.MediumButton>
    </StyledServiceHistoryFilterButton>
  );
}

export default ServiceHistoryFilterButton;
