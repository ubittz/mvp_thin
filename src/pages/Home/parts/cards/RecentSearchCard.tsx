import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { RecentSearchCardProps } from '@@pages/Home/type';

const StyledRecentSearchCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 0 16px;
  width: 216px;
  height: 168px;

  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_SCALE_050};
  background: ${COLORS.GRAY_SCALE_000};

  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  .card__image {
    width: 60px;
    height: 60px;
  }

  .card__description {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

function RecentSearchCard({ profile }: RecentSearchCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/worker/${profile.id}`);
  };

  return (
    <StyledRecentSearchCard onClick={handleClick}>
      <img className='card__image' src={profile.image} alt='profile_image' />
      <div className='card__description'>
        <Typography.MediumSubTitle>{profile.name}</Typography.MediumSubTitle>
        <Typography.Caption color={COLORS.GRAY_SCALE_500}>{profile.title}</Typography.Caption>
        <Typography.Caption color={COLORS.GRAY_SCALE_500}>{profile.region}</Typography.Caption>
      </div>
    </StyledRecentSearchCard>
  );
}

export default RecentSearchCard;
