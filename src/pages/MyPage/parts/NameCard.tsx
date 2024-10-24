import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { UserIcon } from '@@constants/images';

const StyledNameCard = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  padding: 32px 16px;
  background: ${COLORS.GRAY_SCALE_000};

  .name_card__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 72px;
    height: 72px;
    background: ${COLORS.GRAY_SCALE_050};
    border-radius: 50%;
  }

  .name_card__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function NameCard() {
  return (
    <StyledNameCard>
      <div className='name_card__icon'>
        <UserIcon width={29} height={33} />
      </div>
      <div className='name_card__info'>
        <Typography.SmallTitle>홍길동님</Typography.SmallTitle>
        <Typography.SmallBody color={COLORS.GRAY_SCALE_500}>@honggildong123</Typography.SmallBody>
      </div>
    </StyledNameCard>
  );
}

export default NameCard;
