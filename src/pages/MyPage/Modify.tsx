import { Formik } from 'formik';

import ModifyForm from '@@pages/MyPage/parts/ModifyForm';
import { ModifyUserForm } from '@@pages/MyPage/type';

function Modify() {
  const initialValues: ModifyUserForm = {
    id: 'honggildong123',
    password: '',
    passwordCheck: '',
    name: '홍길동',
    email: '',
    phone: '',
  };

  const handleSubmit = (form: ModifyUserForm) => {
    console.log(form);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ModifyForm />
    </Formik>
  );
}

export default Modify;
