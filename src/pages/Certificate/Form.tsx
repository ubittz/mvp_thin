import { Formik } from 'formik';

import FormContent from '@@pages/Certificate/parts/FormContent';
import { CertificateForm } from '@@pages/Certificate/type';
import { FormType } from '@@types/common';

function Form({ initialValues, type, onSubmit }: { initialValues: CertificateForm; type: FormType; onSubmit: (form: CertificateForm) => void }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormContent type={type} />
    </Formik>
  );
}

export default Form;
