import styled from 'styled-components';

import Slider from '@@components/Slider';
import { Typography } from '@@components/Typography';
import { useAppState } from '@@store/hooks';

import RecommendCard from './cards/RecommendCard';

const StyledRecommend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Recommend() {
  const workerList = useAppState((state) => state.home.workerList);
  return (
    <StyledRecommend>
      <Typography.LargeSubTitle>쓰인이 추천하는 워커!</Typography.LargeSubTitle>
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
