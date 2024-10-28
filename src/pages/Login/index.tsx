import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { AppleIcon, GoogleIcon, KakaotalkIcon, NaverIcon } from '@@constants/images';
import LoginForm from '@@pages/Login/parts/LoginForm';
import { LoginFormType } from '@@pages/Login/type';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  padding-top: 96px;
  padding-bottom: 50px;
  height: 100%;

  .login__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .login__form {
      flex-direction: column;
      display: flex;
      gap: 20px;
      margin-top: 40px;
    }

    .login__additional_button_wrap {
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

function Login() {
  const initialValues: LoginFormType = {
    id: '',
    password: '',
  };

  const navigate = useNavigate();

  const handleSubmit = (form: LoginFormType) => {
    if (!form.id.trim()) {
      return alert('아이디를 입력해주세요');
    } else if (!form.password.trim()) {
      return alert('비밀번호를 입력해주세요.');
    }

    navigate('/my-pwa/home');
  };

  return (
    <StyledLogin>
      <Typography.LargeTitle>
        반가워요.
        <br />
        일과 사람이 만나는 곳,
        <br />
        쓰인 입니다 :&#41;
      </Typography.LargeTitle>
      <div className='login__body'>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <LoginForm />
        </Formik>
        <div className='login__additional_button_wrap'>
          <button className='additional_button' onClick={() => navigate('/my-pwa/register')}>
            회원가입
          </button>
          <div className='divider' />
          <button className='additional_button'>아이디 찾기</button>
          <div className='divider' />
          <button className='additional_button'>비밀번호 재설정</button>
        </div>
      </div>
      <div className='login__sns_wrap'>
        <div className='sns_login__label'>
          <div className='divider' />
          <Typography.Caption color={COLORS.GRAY_SCALE_600}>SNS로 로그인</Typography.Caption>
          <div className='divider' />
        </div>
        <div className='sns_login__icon_wrap'>
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
