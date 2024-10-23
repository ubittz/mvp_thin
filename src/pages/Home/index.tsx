import styled from 'styled-components';

import Header from '@@components/Header';
import { COLORS } from '@@constants/colors';
import { LogoIcon } from '@@constants/images';
import Banner from '@@pages/Home/parts/Banner';
import CopyRight from '@@pages/Home/parts/CopyRight';
import RecentSearch from '@@pages/Home/parts/RecentSearch';
import Recommend from '@@pages/Home/parts/Recommend';
import SearchBar from '@@pages/Home/parts/SearchBar';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  background: ${COLORS.GRAY_SCALE_050};

  .home__body {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    .home__body_contents {
      padding: 0 16px;
      padding-top: 20px;
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <Header hiddenBack={true}>
        <LogoIcon />
      </Header>
      <div className='home__body'>
        <div className='home__body_contents'>
          <SearchBar />
          <Banner />
          <RecentSearch />
          <Recommend />
        </div>
        <CopyRight />
      </div>
    </StyledHome>
  );
}

export default Home;
