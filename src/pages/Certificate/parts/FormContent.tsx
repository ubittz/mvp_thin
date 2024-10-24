import { format } from 'date-fns';
import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { CertificateForm } from '@@pages/Certificate/type';
import { FormType } from '@@types/common';

const StyledFormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .certificate_form__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;

    padding: 0 16px;
    padding-top: 40px;
  }

  .certificate_form__footer {
    padding: 8px 16px;
    border-top: 1px solid ${COLORS.MAIN_050};

    button {
      width: 100%;
    }
  }
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  height: 48px;
  background: ${COLORS.MAIN_400};
`;

function FormContent({ type }: { type: FormType }) {
  const navigate = useNavigate();

  const { getFieldProps, handleSubmit } = useFormikContext<CertificateForm>();

  return (
    <StyledFormContent onSubmit={handleSubmit}>
      <Header onBack={() => navigate(-1)}>증명서 {type === 'edit' ? '수정' : '발행'}</Header>
      <div className='certificate_form__body'>
        <Typography.LargeTitle>
          {type === 'edit' ? '수정하실' : '발행하실'} 증명서 내용을
          <br />
          입력해주세요
        </Typography.LargeTitle>
        <InputFormGroup inputType='outline' label='증명서 제목' {...getFieldProps('title')} placeholder='증명서 제목을 입력해 주세요.' />
        <InputFormGroup inputType='outline' label='받을 이메일' {...getFieldProps('email')} placeholder='받아보실 이메일을 입력해 주세요.' />
        <InputFormGroup inputType='outline' label='등록일' placeholder={format(new Date(), 'yyyy-MM-dd')} readOnly />
      </div>
      <div className='certificate_form__footer'>
        <StyledButton type='submit'>
          <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>완료</Typography.MediumButton>
        </StyledButton>
      </div>
    </StyledFormContent>
  );
}

export default FormContent;
