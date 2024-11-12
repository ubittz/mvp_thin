import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { getCategoryList } from '@@pages/Search/utils';
import { useHandleServiceStatus } from '@@pages/ServiceHistory/hooks';
import ServiceStatusBadge from '@@pages/ServiceHistory/parts/ServiceStatusBadge';
import { useAppState } from '@@store/hooks';
import { USER_TYPE } from '@@stores/home/constants';
import { Company, Worker } from '@@stores/home/type';
import { SERVICE_STATUS } from '@@stores/service/constants';
import { Service, ServiceStatus } from '@@stores/service/type';

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
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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

function ServiceItem({ service }: { service: Service }) {
  const navigate = useNavigate();

  const profile = useAppState((state) => state.home[service.contractorType === USER_TYPE.WORKER ? 'workerList' : 'companyList']).find(
    (profile) => profile.id === service.contractorId
  ) as Worker | Company;

  const { handleClickApprove, handleClickReject } = useHandleServiceStatus(service.id, service.status);

  const { smallCategory } = getCategoryList(profile.category);
  const showButtons = ([SERVICE_STATUS.REQUESTED_OFFER, SERVICE_STATUS.PENDING] as ServiceStatus[]).includes(service.status);

  const handleClick = () => {
    navigate(`/thin/my/service/${service.id}`);
  };

  return (
    <StyledServiceItem>
      <div className='service_item__status'>
        <ServiceStatusBadge status={service.status} />
        <Typography.Caption className='service_item__status_date' color={COLORS.GRAY_SCALE_600}>
          {format(service.updatedAt, 'yyyy.MM.dd')}
        </Typography.Caption>
      </div>
      <div className='service_item__profile' onClick={handleClick}>
        <div className='service_item__profile_image'>
          <img src={profile.image} alt='profile' />
        </div>
        <div className='service_item__profile_info'>
          <Typography.MediumSubTitle>{profile.name}</Typography.MediumSubTitle>
          <Typography.Caption color={COLORS.GRAY_SCALE_500}>{smallCategory?.title}</Typography.Caption>
          <Typography.Caption color={COLORS.GRAY_SCALE_500}>{profile.region}</Typography.Caption>
        </div>
      </div>
      {showButtons && (
        <div className='service_item__button_wrap'>
          <StyledButton $background={COLORS.GRAY_SCALE_100} onClick={handleClickReject}>
            <Typography.MediumButton color={COLORS.GRAY_SCALE_600}>
              {service.status === SERVICE_STATUS.REQUESTED_OFFER ? '거절' : '취소'}
            </Typography.MediumButton>
          </StyledButton>
          <StyledButton $background={COLORS.MAIN_400} onClick={handleClickApprove}>
            <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>
              {service.status === SERVICE_STATUS.REQUESTED_OFFER ? '수락' : '확정'}
            </Typography.MediumButton>
          </StyledButton>
        </div>
      )}
    </StyledServiceItem>
  );
}

export default ServiceItem;
