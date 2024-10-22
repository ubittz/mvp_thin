import { useState } from "react";

import styled from "styled-components";

import InputFormGroup from "@@components/InputFormGroup";
import { Typography } from "@@components/Typography";
import { COLORS } from "@@constants/colors";
import {
  AppleIcon,
  GoogleIcon,
  KakaotalkIcon,
  NaverIcon,
} from "@@constants/images";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  padding-top: 96px;
  padding-bottom: 50px;
  height: 100vh;

  .login__form {
    flex: 1;
    flex-direction: column;
    display: flex;
    gap: 20px;
    margin-top: 40px;
    .login__form_additional_button_wrap {
      display: flex;
      gap: 8px;
      justify-content: center;

      .additional_button {
        background: none;
        border: none;
        outline: none;
      }

      .divider {
        align-self: stretch;
        width: 1px;
        background: ${COLORS.GRAY_SCALE_400};
      }
    }
  }

  .login__sns_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .sns_login__label {
      display: flex;
      gap: 12px;
      align-items: center;
      .divider {
        width: 60px;
        height: 1px;
        background: ${COLORS.GRAY_SCALE_200};
      }
    }

    .sns_login__icon_wrap {
      display: flex;
      gap: 16px;
    }
  }
`;

const StyledLoginButton = styled.button`
  outline: none;
  border: none;
  background: ${COLORS.MAIN};
  height: 48px;
  border-radius: 8px;
`;

function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
        <InputFormGroup
          label="아이디"
          id="id"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputFormGroup
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledLoginButton>
          <Typography.MediumButton as="span" color={COLORS.GRAY_SCALE_000}>
            로그인
          </Typography.MediumButton>
        </StyledLoginButton>
        <div className="login__form_additional_button_wrap">
          <button className="additional_button">회원가입</button>
          <div className="divider" />
          <button className="additional_button">아이디 찾기</button>
          <div className="divider" />
          <button className="additional_button">비밀번호 재설정</button>
        </div>
      </div>
      <div className="login__sns_wrap">
        <div className="sns_login__label">
          <div className="divider" />
          <Typography.Caption color={COLORS.GRAY_SCALE_600}>
            SNS로 로그인
          </Typography.Caption>
          <div className="divider" />
        </div>
        <div className="sns_login__icon_wrap">
          <KakaotalkIcon />
          <NaverIcon />
          <GoogleIcon />
          <AppleIcon />
        </div>
      </div>
    </StyledLogin>
  );
}

export default Login;
