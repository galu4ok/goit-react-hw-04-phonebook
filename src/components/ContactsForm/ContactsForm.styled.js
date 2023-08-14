import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
export const StyledField = styled(Field)`
  padding: 5px;
  border: 1px solid grey;
`;

export const StyledError = styled(ErrorMessage)`
  font-style: italic;
  font-size: 10px;
  color: tomato;
`;
export const AddBtn = styled.button`
  width: 150px;
  height: 30px;
  color: black;
  border: 1px solid grey;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
