import styled from "styled-components";

import { InputFormGroupProps } from "@@components/InputFormGroup/type";
import { Typography } from "@@components/Typography";
import { COLORS } from "@@constants/colors";

const StyledInput = styled.input`
  padding: 13px 12px;
  height: 48px;
  border: none;
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 22px;

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_300};
  }
`;

const StyledInputFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function InputFormGroup({ id, label, ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup>
      <label htmlFor={id}>
        <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>
          {label}
        </Typography.SmallBody>
      </label>
      <StyledInput id={id} {...props} />
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
