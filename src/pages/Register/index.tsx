import { useRef } from 'react';

import { Form, Formik, FormikProps } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { RegisterFormType } from './type';

const StyledRegister = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .register_body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px 16px;

    overflow-y: scroll;

    .register_body__description {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .register_body__password_wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;

const StyledRegisterButton = styled.button`
  border: none;
  outline: none;
  background: ${COLORS.MAIN_400};
  height: 64px;
`;

function Register() {
  const initialValues: RegisterFormType = {
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    email: '',
  };

  const navigate = useNavigate();

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (form: RegisterFormType) => {
    if (!form.id.trim()) {
      idRef.current?.focus();
      return alert('아이디를 입력해주세요');
    } else if (!form.password.trim()) {
      passwordRef.current?.focus();
      return alert('비밀번호를 입력해주세요');
    } else if (form.password.trim() !== form.passwordCheck.trim()) {
      passwordCheckRef.current?.focus();
      return alert('비밀번호가 일치하지 않습니다.');
    } else if (!form.name.trim()) {
      nameRef.current?.focus();
      return alert('이름을 입력해주세요');
    } else if (!form.email.trim()) {
      emailRef.current?.focus();
      return alert('이메일을 입력해주세요');
    }
    navigate('/my-pwa/register/verify');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ getFieldProps, handleSubmit }: FormikProps<RegisterFormType>) => (
        <StyledRegister onSubmit={handleSubmit}>
          <Header
            onBack={() => {
              navigate('/my-pwa/');
            }}
          >
            <Typography.MediumSubTitle>회원가입</Typography.MediumSubTitle>
          </Header>
          <div className='register_body'>
            <div className='register_body__description'>
              <Typography.LargeTitle>기본 정보 입력</Typography.LargeTitle>
              <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>가입을 위해 회원님의 정보를 입력해 주세요.</Typography.SmallBody>
            </div>
            <InputFormGroup
              ref={idRef}
              label='아이디'
              placeholder='아이디를 입력해 주세요.'
              inputButtonProps={{
                children: '중복 확인',
              }}
              {...getFieldProps('id')}
            />
            <div className='register_body__password_wrap'>
              <InputFormGroup ref={passwordRef} label='비밀번호' placeholder='비밀번호를 입력해 주세요.' {...getFieldProps('password')} />
              <InputFormGroup ref={passwordCheckRef} placeholder='비밀번호를 한 번 더 입력해주세요.' {...getFieldProps('passwordCheck')} />
            </div>
            <InputFormGroup ref={nameRef} label='이름' placeholder='이름을 입력해 주세요.' {...getFieldProps('name')} />
            <InputFormGroup ref={emailRef} label='이메일' placeholder='이메일을 입력해 주세요.' {...getFieldProps('email')} />
          </div>
          <StyledRegisterButton type='submit'>
            <Typography.SmallButton color={COLORS.GRAY_SCALE_000}>다음</Typography.SmallButton>
          </StyledRegisterButton>
        </StyledRegister>
      )}
    </Formik>
  );
}

export default Register;
