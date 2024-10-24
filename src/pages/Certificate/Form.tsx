import { Formik } from 'formik';

import { CertificateForm as CertificateFormType } from '@@pages/Certificate/type';
import { FormType } from '@@types/common';

import FormContent from './parts/FormContent';

function CertificateForm({ initialValues, type }: { initialValues: CertificateFormType; type: FormType }) {
  const handleSubmit = (form: CertificateFormType) => {
    console.log(form);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormContent type={type} />
    </Formik>
  );
}

export default CertificateForm;
