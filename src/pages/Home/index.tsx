import styled from 'styled-components';

import GlobalNavigationBar from '@@components/GNB';
import Tab from '@@components/Tab';
import { COLORS } from '@@constants/colors';
import { LogoIcon } from '@@constants/images';
import HomePanel from '@@pages/Home/parts/HomePanel';
import { useAppDispatch } from '@@store/hooks';
import { HOME_TABS } from '@@stores/home/constants';
import { setSelectedTab } from '@@stores/home/reducer';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  background: ${COLORS.GRAY_SCALE_050};

  .home__body {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    .home__body_contents {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px 16px;
    }
  }
`;

const TAB_ITEMS = [
  {
    type: HOME_TABS.FIND_WORKER,
    title: '워커 찾기',
    content: <HomePanel panelType={HOME_TABS.FIND_WORKER} />,
  },
  {
    type: HOME_TABS.FIND_COMPANY,
    title: '기업 찾기',
    content: <HomePanel panelType={HOME_TABS.FIND_COMPANY} />,
  },
];

const StyledHomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background: ${COLORS.GRAY_SCALE_000};
`;

function Home() {
  const dispatch = useAppDispatch();

  const handleSelect = (index: number) => {
    dispatch(setSelectedTab(TAB_ITEMS[index].type));
  };

  return (
    <StyledHome>
      <StyledHomeHeader>
        <LogoIcon />
      </StyledHomeHeader>
      <Tab items={TAB_ITEMS} onSelect={handleSelect} />
      <GlobalNavigationBar />
    </StyledHome>
  );
}

export default Home;
