import { Formik } from 'formik';

import ModifyForm from '@@pages/MyPage/parts/ModifyForm';
import { ModifyUserForm } from '@@pages/MyPage/type';
import { useAppState } from '@@store/hooks';

function Modify() {
  const me = useAppState((state) => state.home.me);
  const initialValues: ModifyUserForm = {
    id: 'th_in123',
    password: '',
    passwordCheck: '',
    name: me?.name ?? '',
    email: me?.email ?? '',
    phone: me?.phone ?? '',
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
