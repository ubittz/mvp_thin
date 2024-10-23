import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledCopyRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 24px 16px;

  border-top: 1px solid ${COLORS.GRAY_SCALE_100};

  .copy_right__item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

function CopyRight() {
  return (
    <StyledCopyRight>
      <Typography.LargeSubTitle color={COLORS.GRAY_SCALE_400}>주식회사 쓰인</Typography.LargeSubTitle>
      <div className='copy_right__item'>
        <Typography.Caption color={COLORS.GRAY_SCALE_400}>대표이사 이인석</Typography.Caption>
        <Typography.Caption color={COLORS.GRAY_SCALE_400}>경기도 안산시</Typography.Caption>
        <Typography.Caption color={COLORS.GRAY_SCALE_400}>사업자등록번호 000-00-00000</Typography.Caption>
      </div>
      <div className='copy_right__item'>
        <Typography.Caption color={COLORS.GRAY_SCALE_400}>고객센터 &#40;평일 09:00 ~ 18:00&#41;</Typography.Caption>
        <Typography.Caption color={COLORS.GRAY_SCALE_400}>전화 : 010-2935-1078 E-mail : th_in@naver.com</Typography.Caption>
      </div>
    </StyledCopyRight>
  );
}

export default CopyRight;
