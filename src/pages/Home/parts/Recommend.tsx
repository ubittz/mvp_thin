import styled from 'styled-components';

import Slider from '@@components/Slider';
import { Typography } from '@@components/Typography';
import RecommendCard from '@@pages/Home/parts/cards/RecommendCard';
import { HomePanelProps } from '@@pages/Home/type';
import { useAppState } from '@@store/hooks';
import { KEYWORD_BY_HOME_TABS } from '@@stores/home/constants';

const StyledRecommend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Recommend({ panelType }: HomePanelProps) {
  const workerList = useAppState((state) => state.home.workerList);

  return (
    <StyledRecommend>
      <Typography.LargeSubTitle>쓰인이 추천하는 {KEYWORD_BY_HOME_TABS[panelType]}!</Typography.LargeSubTitle>
      <Slider
        gap={8}
        items={workerList.map((worker) => (
          <RecommendCard
            key={worker.name}
            profile={{
              image: worker.image,
              name: worker.name,
              title: worker.category,
              region: worker.region,
              description: worker.description,
            }}
          />
        ))}
      />
    </StyledRecommend>
  );
}

export default Recommend;
