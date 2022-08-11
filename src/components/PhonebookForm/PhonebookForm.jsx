import { Button } from 'components/Button/Button';
import { Formik, ErrorMessage } from 'formik';
import { ErrorText, Input, Label, StyledForm } from './PhoonebookForm.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { createContact } from 'redux/contactsSlice/constactsSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().integer().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const PhoonebookForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findContact) {
      alert(`${name} is already in contact`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(createContact(newContact));
    resetForm();
  };

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

        <Button type="submit" size="150">
          Create contact
        </Button>
      </StyledForm>
    </Formik>
  );
};
