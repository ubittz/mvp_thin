import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import ServiceStatusBadge from '@@pages/ServiceHistory/parts/ServiceStatusBadge';
import { useAppState } from '@@store/hooks';
import Profile from '@@stores/home/images/임나영.png';

const StyledServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border-radius: 8px;
  background: ${COLORS.GRAY_SCALE_000};

  .service_item__status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    .service_status__badge {
      flex: 0 0 auto;
    }

    .service_item__status_date {
      flex: 1;
      text-align: right;
    }
  }

  .service_item__profile {
    display: flex;
    align-items: center;
    gap: 8px;

    .service_item__profile_image {
      width: 60px;
      height: 60px;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .service_item__profile_info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  }

  .service_item__button_wrap {
    display: flex;
    gap: 8px;
    height: 40px;
  }
`;

const StyledButton = styled.button<{ $background: string }>`
  flex: 1;
  outline: none;
  border: none;
  border-radius: 8px;
  background: ${({ $background }) => $background};
`;

function ServiceItem() {
  const me = useAppState((state) => state.home.me);

  if (!me) return null;

  return (
    <StyledServiceItem>
      <div className='service_item__status'>
        <ServiceStatusBadge status='canceled_offer' />
        <Typography.Caption className='service_item__status_date' color={COLORS.GRAY_SCALE_600}>
          2024.11.11
        </Typography.Caption>
      </div>
      <div className='service_item__profile'>
        <div className='service_item__profile_image'>
          <img src={Profile} alt='profile' />
        </div>
        <div className='service_item__profile_info'>
          <Typography.MediumSubTitle>임나영</Typography.MediumSubTitle>
          <Typography.Caption color={COLORS.GRAY_SCALE_500}>프로덕트 디자이너 | 6년차</Typography.Caption>
          <Typography.Caption color={COLORS.GRAY_SCALE_500}>서울시 강동구</Typography.Caption>
        </div>
      </div>
      <div className='service_item__button_wrap'>
        <StyledButton $background={COLORS.GRAY_SCALE_100}>
          <Typography.MediumButton color={COLORS.GRAY_SCALE_600}>거절</Typography.MediumButton>
        </StyledButton>
        <StyledButton $background={COLORS.MAIN_400}>
          <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>승인</Typography.MediumButton>
        </StyledButton>
      </div>
    </StyledServiceItem>
  );
}

export default ServiceItem;
