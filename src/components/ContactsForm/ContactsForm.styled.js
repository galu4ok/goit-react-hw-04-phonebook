import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
export const StyledField = styled(Field)`
  padding: 4px;
`;

export const StyledError = styled(ErrorMessage)`
  font-style: italic;
  font-size: 10px;
  color: tomato;
`;
