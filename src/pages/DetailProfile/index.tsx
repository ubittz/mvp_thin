import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import ProfileInfo from '@@components/ProfileInfo';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import CompanyImage from '@@pages/DetailProfile/images/company_desc.jpg';
import WorkerImage from '@@pages/DetailProfile/images/worker_desc.jpg';
import { DetailProfileProps } from '@@pages/DetailProfile/type';
import { useAppState } from '@@store/hooks';
import { USER_TYPE } from '@@stores/home/constants';
import { Company, UserType, Worker } from '@@stores/home/type';
import { requestOffer } from '@@stores/service/reducer';

const StyledDetailProfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${COLORS.GRAY_SCALE_050};

  .detail_profile__body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    overflow-y: scroll;

    .profile_info {
      padding: 24px 16px;
    }

    .detail_profile__description {
      padding: 24px 16px;
      background: ${COLORS.GRAY_SCALE_000};

      img {
        max-width: 100%;
      }
    }
  }

  .detail_profile__button_wrap {
    padding: 8px 16px;
    border: 1px solid ${COLORS.GRAY_SCALE_100};
    background: ${COLORS.GRAY_SCALE_000};
  }
`;

const StyledButton = styled.button`
  height: 48px;
  width: 100%;
  outline: none;
  border: none;
  background: ${COLORS.MAIN_400};
  border-radius: 8px;
`;

function DetailProfile() {
  const { type, id } = useParams();

  if (!Object.values(USER_TYPE).includes(type as UserType) || !id) {
    return '에러 페이지';
  }

  const userType: UserType = type === 'worker' ? USER_TYPE.WORKER : USER_TYPE.COMPANY;

  return <DetailProfilePage userType={userType} />;
}

function DetailProfilePage({ userType }: DetailProfileProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const profile = useAppState((state) => state.home[userType === USER_TYPE.COMPANY ? 'companyList' : 'workerList']).find(
    (user) => user.id === +(id ?? 0)
  ) as Worker | Company | undefined;
  const isRequested = !!useAppState((state) => state.service.requestOfferList).find(
    (offer) => offer.contractorId === profile?.id && offer.contractorType === userType
  );

  const handleRequestOffer = () => {
    if (!profile) return;

    dispatch(
      requestOffer({
        contractorId: profile?.id,
        contractorType: userType,
      })
    );

    alert(`${userType === USER_TYPE.WORKER ? '워커' : '기업'}에게 제안을 보냈어요!\n요청수락 시 알림이 발송될 예정입니다.`);
  };

  if (!profile) {
    return '에러 페이지';
  }

  return (
    <StyledDetailProfile>
      <Header onBack={() => navigate(-1)} />
      <div className='detail_profile__body'>
        <ProfileInfo
          userType={userType}
          profile={{
            id: profile.id,
            image: profile.image,
            name: profile.name,
            category: profile.category,
            region: profile.region,
            description: profile.description,
            salary: profile.salary,
            period: profile.period,
            desiredDay: profile.desiredDay,
          }}
        />
        <div className='detail_profile__description'>
          <img src={userType === USER_TYPE.COMPANY ? CompanyImage : WorkerImage} alt='Detail Description' />
        </div>
      </div>
      {!isRequested && (
        <div className='detail_profile__button_wrap'>
          <StyledButton onClick={handleRequestOffer}>
            <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>제안 보내기</Typography.MediumButton>
          </StyledButton>
        </div>
      )}
    </StyledDetailProfile>
  );
}

export default DetailProfile;
