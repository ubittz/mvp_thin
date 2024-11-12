import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Form from '@@pages/Certificate/Form';
import { CertificateForm } from '@@pages/Certificate/type';
import { useAppState } from '@@store/hooks';
import { updateCertificateRequest } from '@@stores/certificate/reducer';

function EidtCertificate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = +(useParams().id ?? 0) as number;
  const certificate = useAppState((state) => state.certificate.certificateList).find((certificate) => certificate.id === id);

  const handleSubmit = (form: CertificateForm) => {
    if (!form.title.trim()) {
      return alert('제목을 입력해주세요.');
    } else if (!form.email.trim()) {
      return alert('이메일을 입력해주세요');
    }

    dispatch(
      updateCertificateRequest({
        id,
        title: form.title,
        email: form.email,
      })
    );

    alert('증명서 수정이 완료되었습니다.');
    navigate('/thin/my/certificate');
  };

  if (!id || !certificate) {
    return <Navigate to='/thin/my/certificate/new' />;
  }

  return <Form initialValues={{ title: certificate.title, email: certificate.email }} type='edit' onSubmit={handleSubmit} />;
}

export default EidtCertificate;
