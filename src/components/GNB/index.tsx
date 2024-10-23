import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { GNBHomeIcon, GNBMessageIcon, GNBMyPageIcon, GNBSearchIcon } from '@@constants/images';

const StyledGNB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 72px;
  background: ${COLORS.GRAY_SCALE_000};
  padding: 6px 0;

  .gnb__icon_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
  }
`;

function GlobalNavigationBar() {
  return (
    <StyledGNB>
      <div className='gnb__icon_wrap'>
        <GNBHomeIcon className='gnb__icon' />
        <Typography.Caption color={COLORS.GRAY_SCALE_200}>홈</Typography.Caption>
      </div>
      <div className='gnb__icon_wrap'>
        <GNBSearchIcon className='gnb__icon' />
        <Typography.Caption color={COLORS.GRAY_SCALE_200}>검색</Typography.Caption>
      </div>
      <div className='gnb__icon_wrap'>
        <GNBMessageIcon className='gnb__icon' />
        <Typography.Caption color={COLORS.GRAY_SCALE_200}>채팅</Typography.Caption>
      </div>
      <div className='gnb__icon_wrap'>
        <GNBMyPageIcon className='gnb__icon' />
        <Typography.Caption color={COLORS.GRAY_SCALE_200}>마이페이지</Typography.Caption>
      </div>
    </StyledGNB>
  );
}

export default GlobalNavigationBar;
