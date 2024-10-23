import styled from 'styled-components';

import Slider from '@@components/Slider';
import { Typography } from '@@components/Typography';
import { useAppState } from '@@store/hooks';

import RecentSearchCard from './cards/RecentSearchCard';

const StyledRecentSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function RecentSearch() {
  const workerList = useAppState((state) => state.home.workerList);

  return (
    <StyledRecentSearch>
      <Typography.LargeSubTitle>최근 검색한 워커</Typography.LargeSubTitle>
      <Slider
        size={216}
        gap={8}
        items={workerList.map((worker) => (
          <RecentSearchCard
            key={worker.name}
            profile={{
              image: worker.image,
              name: worker.name,
              title: worker.category,
              region: worker.region,
            }}
          />
        ))}
      />
    </StyledRecentSearch>
  );
}

export default RecentSearch;
