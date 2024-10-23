import styled from 'styled-components';

import { InputFormGroupProps } from '@@components/InputFormGroup/type';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledInputFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input_wrap {
    position: relative;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 13px 12px;
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

const StyledButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  background: none;
  outline: none;
  border: none;
`;

function InputFormGroup({ id, label, inputButtonProps, ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup>
      {label && (
        <label htmlFor={id}>
          <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>{label}</Typography.SmallBody>
        </label>
      )}
      <div className='input_wrap'>
        <StyledInput id={id} {...props} />
        {inputButtonProps && (
          <StyledButton>
            <Typography.MediumButton color={COLORS.MAIN_700} onClick={inputButtonProps.onClick}>
              {inputButtonProps.title}
            </Typography.MediumButton>
          </StyledButton>
        )}
      </div>
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
