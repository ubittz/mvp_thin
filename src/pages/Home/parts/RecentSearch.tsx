import styled from 'styled-components';

import Slider from '@@components/Slider';
import { Typography } from '@@components/Typography';
import { HomePanelProps } from '@@pages/Home/type';
import { useAppState } from '@@store/hooks';
import { KEYWORD_BY_HOME_TABS } from '@@stores/home/constants';

import RecentSearchCard from './cards/RecentSearchCard';

const StyledRecentSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function RecentSearch({ panelType }: HomePanelProps) {
  const workerList = useAppState((state) => state.home.workerList);

  return (
    <StyledRecentSearch>
      <Typography.LargeSubTitle>최근 검색한 {KEYWORD_BY_HOME_TABS[panelType]}</Typography.LargeSubTitle>
      <Slider
        size={216}
        gap={8}
        items={workerList.map((worker) => (
          <RecentSearchCard
            key={worker.name}
            profile={{
              id: worker.id,
              image: worker.image,
              name: worker.name,
              title: worker.category,
              region: worker.region,
              description: worker.description,
            }}
          />
        ))}
      />
    </StyledRecentSearch>
  );
}

export default RecentSearch;
