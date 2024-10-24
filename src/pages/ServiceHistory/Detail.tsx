import styled from 'styled-components';

import Header from '@@components/Header';
import ProfileInfo from '@@components/ProfileInfo';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { MessageIcon, RightArrowIcon } from '@@constants/images';
import ServiceStatusBadge from '@@pages/ServiceHistory/parts/ServiceStatusBadge';
import { useAppState } from '@@store/hooks';
import { SERVICE_STATUS } from '@@stores/service/constants';
import { ServiceStatus } from '@@stores/service/type';

const StyledDetailServiceHistory = styled.div<{ $showButtons: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .service_detail__dial {
    position: fixed;
    right: 16px;
    bottom: ${({ $showButtons }) => ($showButtons ? 96 : 32)}px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: ${COLORS.MAIN_400};
  }

  .service_detail__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;

    .service_detail__status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;

      margin-bottom: 16px;

      .service_status__badge {
        flex: 0 0 auto;
      }

      .service_detail__status_date {
        flex: 1;
        text-align: right;
      }
    }
  }
  .service_detail__button_wrap {
    display: flex;
    gap: 8px;

    padding: 8px 16px;
    border: 1px solid ${COLORS.GRAY_SCALE_050};
    button {
      flex: 1;
    }
  }
`;

const StyledDetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  height: 48px;
  outline: none;
  border: 1px solid ${COLORS.GRAY_SCALE_050};
  background: ${COLORS.GRAY_SCALE_000};
  margin-top: 24px;
`;

const StyledButton = styled.button<{ $background: string }>`
  flex: 1;
  outline: none;
  border: none;
  border-radius: 8px;
  height: 48px;
  background: ${({ $background }) => $background};
`;

function DetailServiceHistory() {
  const status = SERVICE_STATUS.MATCHED;
  const user = useAppState((state) => state.home.workerList[0]);

  const showButtons = ([SERVICE_STATUS.REQUESTED_OFFER, SERVICE_STATUS.PENDING] as ServiceStatus[]).includes(status);

  return (
    <StyledDetailServiceHistory $showButtons={showButtons}>
      <div className='service_detail__dial'>
        <MessageIcon />
      </div>
      <Header>
        <Typography.MediumSubTitle>서비스 내역 상세</Typography.MediumSubTitle>
      </Header>
      <div className='service_detail__body'>
        <div className='service_detail__status'>
          <ServiceStatusBadge status={status} />
          <Typography.Caption className='service_detail__status_date' color={COLORS.GRAY_SCALE_600}>
            제안 요청일 2024.11.11
          </Typography.Caption>
        </div>
        <ProfileInfo
          profile={{
            id: user.id,
            image: user.image,
            name: user.name,
            title: user.category,
            region: user.region,
            description: user.description,
          }}
        />
        <StyledDetailButton>
          <Typography.MediumButton>상세 정보 보기</Typography.MediumButton>
          <RightArrowIcon width={20} height={20} />
        </StyledDetailButton>
      </div>
      {showButtons && (
        <div className='service_detail__button_wrap'>
          <StyledButton $background={COLORS.GRAY_SCALE_100}>
            <Typography.MediumButton color={COLORS.GRAY_SCALE_600}>거절</Typography.MediumButton>
          </StyledButton>
          <StyledButton $background={COLORS.MAIN_400}>
            <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>수락</Typography.MediumButton>
          </StyledButton>
        </div>
      )}
    </StyledDetailServiceHistory>
  );
}

export default DetailServiceHistory;
