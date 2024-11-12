import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import ModifyForm from '@@pages/MyPage/parts/ModifyForm';
import { ModifyUserForm } from '@@pages/MyPage/type';
import { useAppState } from '@@store/hooks';

function Modify() {
  const navigate = useNavigate();

  const me = useAppState((state) => state.home.me);
  const initialValues: ModifyUserForm = {
    id: 'th_in123',
    password: '',
    passwordCheck: '',
    name: me?.name ?? '',
    email: me?.email ?? '',
    phone: me?.phone ?? '',
  };

  const handleSubmit = () => {
    alert('수정이 완료되었습니다.');
    navigate('/thin/my');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ModifyForm />
    </Formik>
  );
}

export default Modify;
