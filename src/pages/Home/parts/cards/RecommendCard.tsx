import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { RecommendCardProps } from '@@pages/Home/type';

const StyledRecommendCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 0 20px;
  width: 328px;
  height: 180px;

  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_SCALE_050};
  background: ${COLORS.GRAY_SCALE_000};

  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  .card__top {
    display: flex;
    gap: 12px;
    align-items: center;

    height: 76px;

    .card__image {
      width: 76px;
      height: 76px;
    }

    .card__description {
      display: flex;
      flex-direction: column;
    }
  }
`;

function RecommendCard({ profile }: RecommendCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/worker/${profile.id}`);
  };

  return (
    <StyledRecommendCard onClick={handleClick}>
      <div className='card__top'>
        <img className='card__image' src={profile.image} alt='profile_image' />
        <div className='card__description'>
          <Typography.MediumSubTitle>{profile.name}</Typography.MediumSubTitle>
          <Typography.Caption color={COLORS.GRAY_SCALE_500}>{profile.title}</Typography.Caption>
          <Typography.Caption color={COLORS.GRAY_SCALE_500}>{profile.region}</Typography.Caption>
        </div>
      </div>
      <Typography.SmallSubTitle>"{profile.description}"</Typography.SmallSubTitle>
    </StyledRecommendCard>
  );
}

export default RecommendCard;
