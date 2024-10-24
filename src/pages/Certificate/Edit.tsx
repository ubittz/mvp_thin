import CertificateForm from '@@pages/Certificate/Form';

function EidtCertificate() {
  return <CertificateForm initialValues={{ title: '', email: '' }} type='edit' />;
}

export default EidtCertificate;
