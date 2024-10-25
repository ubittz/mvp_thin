import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { Profile } from '@@stores/home/type';

const StyledResultItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background: ${COLORS.GRAY_SCALE_000};

  .search_result__profile {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .search_result__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

function ResultItem({ profile, onClick }: { profile: Profile; onClick: () => void }) {
  return (
    <StyledResultItem onClick={onClick}>
      <div className='search_result__profile'>
        <img src={profile.image} alt='Search Result Profile' />
      </div>
      <div className='search_result__info'>
        <Typography.MediumSubTitle>{profile.name}</Typography.MediumSubTitle>
        <Typography.Caption color={COLORS.GRAY_SCALE_500}>{profile.title}</Typography.Caption>
        <Typography.Caption color={COLORS.GRAY_SCALE_500}>{profile.region}</Typography.Caption>
      </div>
    </StyledResultItem>
  );
}

export default ResultItem;
