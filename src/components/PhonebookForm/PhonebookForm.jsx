import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { Formik, ErrorMessage } from 'formik';
import { ErrorText, Input, Label, StyledForm } from './PhoonebookForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().integer().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const PhoonebookForm = ({ onCreateContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onCreateContact(values);
    resetForm();
  };

  // const StyledForm = styled(Form)`
  //   display: flex;
  //   flex-direction: column;
  // `;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" />

        <ErrorMessage name="name" component={ErrorText} />

        <Label htmlFor="number">Number</Label>
        <Input type="tel" name="number" />

        <ErrorMessage name="number" component={ErrorText} />

        <Button type="submit">Create contact</Button>
      </StyledForm>
    </Formik>
  );
};

PhoonebookForm.propTypes = {
  onCreateContact: PropTypes.func.isRequired,
};
