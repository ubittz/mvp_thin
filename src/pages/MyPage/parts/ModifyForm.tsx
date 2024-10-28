import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { CameraIcon, UserIcon } from '@@constants/images';
import { ModifyUserForm } from '@@pages/MyPage/type';

const StyledModifyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100%;

  .modify__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;

    padding: 40px 16px 36px;
    overflow-y: scroll;

    .modify__icon {
      flex: 0 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;

      width: 92px;
      height: 92px;
      border-radius: 50%;
      background: ${COLORS.GRAY_SCALE_050};

      .modify__icon_camera {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        bottom: 0;

        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${COLORS.GRAY_SCALE_900};
      }
    }

    .modify__form {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .modify__form_item {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
`;

const StyledSubmitButton = styled.button`
  align-self: stretch;
  height: 64px;
  outline: none;
  border: none;
  background: ${COLORS.MAIN_400};
`;

function ModifyForm() {
  const navigate = useNavigate();

  const { getFieldProps, handleSubmit } = useFormikContext<ModifyUserForm>();

  return (
    <StyledModifyForm onSubmit={handleSubmit}>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>내 정보 수정</Typography.MediumSubTitle>
      </Header>
      <div className='modify__body'>
        <div className='modify__icon'>
          <UserIcon width={38} height={42} />
          <div className='modify__icon_camera'>
            <CameraIcon />
          </div>
        </div>
        <div className='modify__form'>
          <div className='modify__form_item'>
            <InputFormGroup inputType='fill' label='아이디' {...getFieldProps('id')} disabled placeholder='honggildong123' />
            <Typography.Caption color={COLORS.GRAY_SCALE_400}>*아이디는 수정이 불가능합니다.</Typography.Caption>
          </div>
          <div className='modify__form_item'>
            <InputFormGroup
              inputType='fill'
              type='password'
              label='비밀번호'
              {...getFieldProps('password')}
              placeholder='비밀번호를 입력해 주세요.'
            />
            <InputFormGroup inputType='fill' type='password' {...getFieldProps('passwordCheck')} placeholder='비밀번호를 한 번 더 입력해 주세요.' />
          </div>
          <InputFormGroup inputType='fill' label='이름' {...getFieldProps('name')} placeholder='이름을 입력해 주세요.' />
          <InputFormGroup inputType='fill' label='이메일' {...getFieldProps('email')} placeholder='이메일을 입력해 주세요.' />
          <InputFormGroup inputType='fill' label='휴대전화 번호' {...getFieldProps('phone')} placeholder='휴대전화 번호를 입력해 주세요.' />
        </div>
      </div>
      <StyledSubmitButton type='submit'>
        <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>수정</Typography.MediumButton>
      </StyledSubmitButton>
    </StyledModifyForm>
  );
}

export default ModifyForm;
