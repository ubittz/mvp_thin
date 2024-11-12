import styled from 'styled-components';

import Slider from '@@components/Slider';
import { Typography } from '@@components/Typography';
import RecommendCard from '@@pages/Home/parts/cards/RecommendCard';
import { HomePanelProps } from '@@pages/Home/type';
import { useAppState } from '@@store/hooks';
import { HOME_TABS, KEYWORD_BY_HOME_TABS, USER_TYPE } from '@@stores/home/constants';

const StyledRecommend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Recommend({ panelType }: HomePanelProps) {
  const profileList = useAppState((state) => state.home[panelType === HOME_TABS.FIND_WORKER ? 'workerList' : 'companyList']);

  return (
    <StyledRecommend>
      <Typography.LargeSubTitle>쓰인이 추천하는 {KEYWORD_BY_HOME_TABS[panelType]}!</Typography.LargeSubTitle>
      <Slider
        gap={8}
        items={profileList.slice(5, 11).map((profile) => (
          <RecommendCard
            key={profile.name}
            userType={panelType === HOME_TABS.FIND_WORKER ? USER_TYPE.WORKER : USER_TYPE.COMPANY}
            profile={{
              id: profile.id,
              image: profile.image,
              name: profile.name,
              category: profile.category,
              region: profile.region,
              description: profile.description,
            }}
          />
        ))}
      />
    </StyledRecommend>
  );
}

export default Recommend;
