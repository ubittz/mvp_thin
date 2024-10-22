import styled from "styled-components";

import Input from "@@components/Input";
import { InputFormGroupProps } from "@@components/InputFormGroup/type";

const StyledInputFormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -4%;
  line-height: 20px;
`;

function InputFormGroup({ id, label, ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup>
      <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>
      <Input id={id} {...props} />
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
