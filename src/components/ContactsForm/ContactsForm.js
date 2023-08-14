import { Formik } from 'formik';
import { StyledForm, StyledField, StyledError } from './ContactsForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().required(
    '*The field cannot be empty!Please enter the name'
  ),
  number: Yup.number().required(
    '*The field cannot be empty!Please enter the number'
  ),
});

export const ContactsForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>Name</label>
        <StyledField id="name" name="name" placeholder="Enter name" />
        <StyledError name="name" component="div" />
        <label>Number</label>
        <StyledField
          id="number"
          name="number"
          placeholder="Enter phone number"
          type="number"
        />
        <StyledError name="number" component="div" />
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
