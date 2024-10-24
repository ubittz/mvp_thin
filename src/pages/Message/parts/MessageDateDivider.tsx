import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledMessageDateDivider = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

function MessageDateDivider({ date }: { date: Date }) {
  const formattedDate = format(date, 'yyyy년 MM월 dd일 EEE요일', { locale: ko });

  return (
    <StyledMessageDateDivider>
      <Typography.SmallBody color={COLORS.GRAY_SCALE_400}>{formattedDate}</Typography.SmallBody>
    </StyledMessageDateDivider>
  );
}

export default MessageDateDivider;
