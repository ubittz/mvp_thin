import CertificateForm from '@@pages/Certificate/Form';

function NewCertificate() {
  return <CertificateForm initialValues={{ title: '', email: '' }} type='new' />;
}

export default NewCertificate;
