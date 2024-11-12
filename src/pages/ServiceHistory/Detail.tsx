import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import ProfileInfo from '@@components/ProfileInfo';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { MessageIcon, RightArrowIcon } from '@@constants/images';
import { SERVICE_STATUS_DATE_LABEL } from '@@pages/ServiceHistory/constants';
import { useHandleServiceStatus } from '@@pages/ServiceHistory/hooks';
import ServiceStatusBadge from '@@pages/ServiceHistory/parts/ServiceStatusBadge';
import { AppDispatch } from '@@store';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { USER_TYPE } from '@@stores/home/constants';
import { createChattingRequest, createChattingSuccess } from '@@stores/message/reducer';
import { SERVICE_STATUS } from '@@stores/service/constants';
import { ServiceStatus } from '@@stores/service/type';

const StyledDetailServiceHistory = styled.div<{ $showButtons: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;

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
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const service = useAppState((state) => state.service.serviceHistoryList).find((service) => service.id === +(id ?? 0));
  const user = useAppState((state) => state.home[service?.contractorType === USER_TYPE.WORKER ? 'workerList' : 'companyList']).find(
    (user) => user.id === service?.contractorId
  );

  const { handleClickApprove, handleClickReject } = useHandleServiceStatus(service?.id ?? 0, service?.status ?? SERVICE_STATUS.IDLE);

  const showButtons = !!service && ([SERVICE_STATUS.REQUESTED_OFFER, SERVICE_STATUS.PENDING] as ServiceStatus[]).includes(service.status);

  const handleClickProfileDetail = () => {
    navigate(`/thin/detail/${service?.contractorType}/${service?.contractorId}`);
  };

  const handleClickChatting = () => {
    if (!user) return;
    dispatch(createChattingRequest(user.id));
  };

  useActionSubscribe({
    type: createChattingSuccess.type,
    callback: ({ payload }: ReturnType<typeof createChattingSuccess>) => {
      navigate(`/thin/message/${payload}`);
    },
  });

  if (!service || !user) return <Navigate to='/not-found' replace />;

  return (
    <StyledDetailServiceHistory $showButtons={showButtons}>
      <div className='service_detail__dial' onClick={handleClickChatting}>
        <MessageIcon />
      </div>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>서비스 내역 상세</Typography.MediumSubTitle>
      </Header>
      <div className='service_detail__body'>
        <div className='service_detail__status'>
          <ServiceStatusBadge status={service.status} />
          <Typography.Caption className='service_detail__status_date' color={COLORS.GRAY_SCALE_600}>
            {SERVICE_STATUS_DATE_LABEL[service.status]} {format(service.updatedAt, 'yyyy.MM.dd')}
          </Typography.Caption>
        </div>
        <ProfileInfo
          profile={{
            id: user.id,
            image: user.image,
            name: user.name,
            category: user.category,
            region: user.region,
            description: user.description,
            salary: user.salary,
            period: user.period,
            desiredDay: user.desiredDay,
          }}
        />
        <StyledDetailButton>
          <Typography.MediumButton onClick={handleClickProfileDetail}>상세 정보 보기</Typography.MediumButton>
          <RightArrowIcon width={20} height={20} />
        </StyledDetailButton>
      </div>
      {showButtons && (
        <div className='service_detail__button_wrap'>
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
    </StyledDetailServiceHistory>
  );
}

export default DetailServiceHistory;
