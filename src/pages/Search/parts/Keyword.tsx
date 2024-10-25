import { ChangeEventHandler } from 'react';

import styled from 'styled-components';

import TextField from '@@components/TextField';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledKeyword = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};
`;

function Keyword({ value, onChange }: { value: string; onChange: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <StyledKeyword className='search__keyword'>
      <Typography.MediumButton>키워드</Typography.MediumButton>
      <TextField background={COLORS.GRAY_SCALE_050} value={value} onChange={onChange} placeholder='검색어를 입력해 주세요.' />
    </StyledKeyword>
  );
}

export default Keyword;
