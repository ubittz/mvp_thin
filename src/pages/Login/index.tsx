import styled from "styled-components";

import InputFormGroup from "@@components/InputFormGroup";
import { Typography } from "@@components/Typography";

const StyledLogin = styled.div`
  padding: 0 16px;
  padding-top: 96px;
  padding-bottom: 50px;
`;

function Login() {
  return (
    <StyledLogin>
      <Typography.LargeTitle>
        반가워요.
        <br />
        일과 사람이 만나는 곳,
        <br />
        쓰인 입니다 :&#41;
      </Typography.LargeTitle>
      <div className="login__form">
        <InputFormGroup label="아이디" id="id" />
        <InputFormGroup label="비밀번호" id="password" />
      </div>
    </StyledLogin>
  );
}

export default Login;
