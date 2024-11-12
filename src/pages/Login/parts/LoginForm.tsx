import { Form, useFormikContext } from 'formik';
import styled from 'styled-components';

import InputFormGroup from '@@components/InputFormGroup';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { LoginFormType } from '@@pages/Login/type';

const StyledLoginButton = styled.button`
  outline: none;
  border: none;
  background: ${COLORS.MAIN_400};
  height: 48px;
  border-radius: 8px;
`;

function LoginForm() {
  const { getFieldProps, handleSubmit } = useFormikContext<LoginFormType>();

  return (
    <Form className='login__form' onSubmit={handleSubmit}>
      <InputFormGroup label='아이디' id='id' placeholder='아이디를 입력해주세요' {...getFieldProps('id')} />
      <InputFormGroup label='비밀번호' id='password' type='password' placeholder='비밀번호를 입력해 주세요.' {...getFieldProps('password')} />
      <StyledLoginButton>
        <Typography.MediumButton as='span' color={COLORS.GRAY_SCALE_000}>
          로그인
        </Typography.MediumButton>
      </StyledLoginButton>
    </Form>
  );
}

export default LoginForm;
