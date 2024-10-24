import styled from 'styled-components';

import GlobalNavigationBar from '@@components/GNB';
import Header from '@@components/Header';
import { Typography } from '@@components/Typography';

const StyledMyPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .my_page__body {
    flex: 1;
    overflow-y: scroll;
  }
`;

function MyPage() {
  return (
    <StyledMyPage>
      <Header hiddenBack>
        <Typography.SmallTitle>마이페이지</Typography.SmallTitle>
      </Header>
      <div className='my_page__body'></div>
      <GlobalNavigationBar />
    </StyledMyPage>
  );
}

export default MyPage;
