import styled from "styled-components";

import { InputProps } from "@@components/Input/type";

const StyledInput = styled.input``;

function Input(props: InputProps) {
  return <StyledInput {...props} />;
}

export default Input;
