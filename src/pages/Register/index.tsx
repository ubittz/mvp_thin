import styled from 'styled-components';

import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledRegister = styled.div`
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
  return (
    <StyledRegister>
      <Header title='회원가입' onBack={() => {}} />
      <div className='register_body'>
        <div className='register_body__description'>
          <Typography.LargeTitle>기본 정보 입력</Typography.LargeTitle>
          <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>가입을 위해 회원님의 정보를 입력해 주세요.</Typography.SmallBody>
        </div>
        <InputFormGroup
          label='아이디'
          placeholder='아이디를 입력해 주세요.'
          inputButtonProps={{
            title: '중복 확인',
            onClick: () => {},
          }}
        />
        <div className='register_body__password_wrap'>
          <InputFormGroup label='비밀번호' placeholder='비밀번호를 입력해 주세요.' />
          <InputFormGroup placeholder='비밀번호를 한 번 더 입력해주세요.' />
        </div>
        <InputFormGroup label='이름' placeholder='이름을 입력해 주세요.' />
        <InputFormGroup label='이메일' placeholder='이메일을 입력해 주세요.' />
      </div>
      <StyledRegisterButton>
        <Typography.SmallButton color={COLORS.GRAY_SCALE_000}>다음</Typography.SmallButton>
      </StyledRegisterButton>
    </StyledRegister>
  );
}

export default Register;
