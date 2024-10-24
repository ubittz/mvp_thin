import styled from 'styled-components';

import GlobalNavigationBar from '@@components/GNB';
import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import NameCard from '@@pages/MyPage/parts/NameCard';
import UserMenu from '@@pages/MyPage/parts/UserMenu';

const StyledMyPage = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .my_page__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: scroll;
    background: ${COLORS.GRAY_SCALE_050};
  }
`;

function MyPage() {
  return (
    <StyledMyPage>
      <Header hiddenBack>
        <Typography.SmallTitle>마이페이지</Typography.SmallTitle>
      </Header>
      <div className='my_page__body'>
        <NameCard />
        <UserMenu />
      </div>
      <GlobalNavigationBar />
    </StyledMyPage>
  );
}

export default MyPage;
