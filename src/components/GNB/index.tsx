import { MouseEventHandler } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const { path } = e.currentTarget.dataset;
    navigate(path as string);
  };

  return (
    <StyledGNB>
      <div className='gnb__icon_wrap' data-path='/my-pwa/home' onClick={handleClick}>
        <GNBHomeIcon className='gnb__icon' isFill={pathname === '/my-pwa/home'} />
        <Typography.Caption color={pathname === '/my-pwa/home' ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_200}>홈</Typography.Caption>
      </div>
      <div className='gnb__icon_wrap' data-path='/my-pwa/search' onClick={handleClick}>
        <GNBSearchIcon className='gnb__icon' isFill={pathname === '/my-pwa/search'} />
        <Typography.Caption color={pathname === '/my-pwa/search' ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_200}>검색</Typography.Caption>
      </div>
      <div className='gnb__icon_wrap' data-path='/my-pwa/message' onClick={handleClick}>
        <GNBMessageIcon className='gnb__icon' isFill={pathname === '/my-pwa/message'} />
        <Typography.Caption color={pathname === '/my-pwa/message' ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_200}>채팅</Typography.Caption>
      </div>
      <div className='gnb__icon_wrap' data-path='/my-pwa/my' onClick={handleClick}>
        <GNBMyPageIcon className='/my-pwagnb__icon' isFill={pathname === '/my'} />
        <Typography.Caption color={pathname === '/my-pwa/my' ? COLORS.MAIN_400 : COLORS.GRAY_SCALE_200}>마이페이지</Typography.Caption>
      </div>
    </StyledGNB>
  );
}

export default GlobalNavigationBar;
