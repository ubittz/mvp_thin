import styled from 'styled-components';

import Slider from '@@components/Slider';
import { Typography } from '@@components/Typography';
import RecentSearchCard from '@@pages/Home/parts/cards/RecentSearchCard';
import { HomePanelProps } from '@@pages/Home/type';
import { useAppState } from '@@store/hooks';
import { HOME_TABS, KEYWORD_BY_HOME_TABS, USER_TYPE } from '@@stores/home/constants';

const StyledRecentSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function RecentSearch({ panelType }: HomePanelProps) {
  const profileList = useAppState((state) => state.home[panelType === HOME_TABS.FIND_WORKER ? 'workerList' : 'companyList']);

  return (
    <StyledRecentSearch>
      <Typography.LargeSubTitle>최근 검색한 {KEYWORD_BY_HOME_TABS[panelType]}</Typography.LargeSubTitle>
      <Slider
        size={216}
        gap={8}
        items={profileList.slice(0, 5).map((profile) => (
          <RecentSearchCard
            key={profile.id}
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
    </StyledRecentSearch>
  );
}

export default RecentSearch;
