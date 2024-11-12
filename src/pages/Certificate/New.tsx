import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '@@pages/Certificate/Form';
import { createCertificateRequest } from '@@stores/certificate/reducer';

import { CertificateForm } from './type';

function NewCertificate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (form: CertificateForm) => {
    if (!form.title.trim()) {
      return alert('제목을 입력해주세요.');
    } else if (!form.email.trim()) {
      return alert('이메일을 입력해주세요');
    }

    dispatch(
      createCertificateRequest({
        title: form.title,
        email: form.email,
      })
    );

    alert('증명서 발행이 완료되었습니다.');
    navigate('/thin/my/certificate');
  };

  return <Form initialValues={{ title: '', email: '' }} type='new' onSubmit={handleSubmit} />;
}

export default NewCertificate;
