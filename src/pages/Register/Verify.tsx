import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledVerify = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .verify_body {
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

    .register_body__form {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  }
`;

const StyledVerifyButton = styled.button`
  border: none;
  outline: none;
  background: ${COLORS.MAIN_400};
  height: 64px;
`;

function Verify() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState<string>('');
  const [isSend, setIsSend] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');

  const handleClickSubmit = () => {
    if (!otp.trim()) {
      return alert('인증 번호를 입력해주세요.');
    }

    navigate('/my-pwa/home');
  };

  return (
    <StyledVerify>
      <Header onBack={() => navigate('/my-pwa/register')}>
        <Typography.MediumSubTitle>회원가입</Typography.MediumSubTitle>
      </Header>
      <div className='verify_body'>
        <div className='register_body__description'>
          <Typography.LargeTitle>휴대전화 인증</Typography.LargeTitle>
          <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>마지막으로 회원님의 휴대전화 번호를 인증해 주세요.</Typography.SmallBody>
        </div>
        <div className='register_body__form'>
          <InputFormGroup
            type='tel'
            label='휴대전화 번호'
            placeholder='휴대전화 번호를 입력해 주세요.'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputButtonProps={{
              children: '인증 전송',
              disabled: !phone.trim(),
              onClick: () => {
                alert('인증 번호가 전송되었습니다.');
                setIsSend(true);
              },
            }}
          />
          <InputFormGroup placeholder='인증번호를 입력해주세요' readOnly={!isSend} value={otp} onChange={(e) => setOtp(e.target.value)} />
        </div>
      </div>
      <StyledVerifyButton>
        <Typography.SmallButton color={COLORS.GRAY_SCALE_000} onClick={handleClickSubmit}>
          완료
        </Typography.SmallButton>
      </StyledVerifyButton>
    </StyledVerify>
  );
}

export default Verify;
