import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import UserMenuItem from './UserMenuItem';

const StyledUserMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;

  background: ${COLORS.GRAY_SCALE_000};
  padding: 0 16px;
  padding-top: 24px;
`;

function UserMenu() {
  const navigate = useNavigate();

  const MENU_ITEMS = [
    {
      title: '서비스 내역',
      onClick: () => {
        navigate('/thin/my/service');
      },
    },
    {
      title: '증명서 발행',
      onClick: () => {
        navigate('/thin/my/certificate');
      },
    },
    {
      title: '로그아웃',
      hiddenArrow: true,
      onClick: () => {
        navigate('/thin/');
      },
    },
  ];

  return (
    <StyledUserMenu>
      <Typography.MediumSubTitle>메뉴</Typography.MediumSubTitle>
      <ul className='user_menu__list'>
        {MENU_ITEMS.map(({ title, hiddenArrow, onClick }) => (
          <UserMenuItem key={title} title={title} hiddenArrow={hiddenArrow} onClick={onClick} />
        ))}
      </ul>
    </StyledUserMenu>
  );
}

export default UserMenu;
