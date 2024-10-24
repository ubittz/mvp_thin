import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { RightArrowIcon } from '@@constants/images';

const StyledUserMenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 4px;

  padding: 16px 0;
`;

function UserMenuItem({ title, hiddenArrow, onClick }: { title: string; hiddenArrow?: boolean; onClick: () => void }) {
  return (
    <StyledUserMenuItem onClick={onClick}>
      <Typography.SmallBody color={COLORS.GRAY_SCALE_800}>{title}</Typography.SmallBody>
      {!hiddenArrow && <RightArrowIcon />}
    </StyledUserMenuItem>
  );
}

export default UserMenuItem;
