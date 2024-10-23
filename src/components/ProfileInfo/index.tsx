import styled from 'styled-components';

import { ProfileInfoProps } from '@@components/ProfileInfo/type';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${COLORS.GRAY_SCALE_000};
  .profile_info__top {
    display: flex;
    align-items: center;
    gap: 12px;

    .profile_info__image {
      width: 100px;
      height: 100px;
    }

    .profile_info__detail {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  }

  .profile_hope {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 18px 0;

    border: 1px solid ${COLORS.GRAY_SCALE_050};
    border-radius: 8px;

    .profile_hope__item {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1px;
      align-items: center;

      &:not(:first-child)::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -0.5px;
        width: 1px;
        height: 100%;
        background: ${COLORS.GRAY_SCALE_050};
      }
    }
  }
`;

function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <StyledProfileInfo className='profile_info'>
      <div className='profile_info__top'>
        <img className='profile_info__image' src={profile.image} alt='Detail Profile Image' />
        <div className='profile_info__detail'>
          <Typography.LargeSubTitle>{profile.name}</Typography.LargeSubTitle>
          <Typography.SmallBody color={COLORS.GRAY_SCALE_700}>{profile.title}</Typography.SmallBody>
          <Typography.SmallBody color={COLORS.GRAY_SCALE_700}>{profile.region}</Typography.SmallBody>
        </div>
      </div>
      <div className='profile_hope'>
        <div className='profile_hope__item'>
          <Typography.Caption color={COLORS.GRAY_SCALE_600}>희망 급여</Typography.Caption>
          <Typography.MediumSubTitle color={COLORS.GRAY_SCALE_800}>300만원</Typography.MediumSubTitle>
        </div>
        <div className='profile_hope__item'>
          <Typography.Caption color={COLORS.GRAY_SCALE_600}>희망 근로 기간</Typography.Caption>
          <Typography.MediumSubTitle color={COLORS.GRAY_SCALE_800}>1년 이상</Typography.MediumSubTitle>
        </div>
        <div className='profile_hope__item'>
          <Typography.Caption color={COLORS.GRAY_SCALE_600}>근무 가능일</Typography.Caption>
          <Typography.MediumSubTitle color={COLORS.GRAY_SCALE_800}>즉시</Typography.MediumSubTitle>
        </div>
      </div>
    </StyledProfileInfo>
  );
}

export default ProfileInfo;
