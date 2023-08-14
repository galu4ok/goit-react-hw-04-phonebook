import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  text-align: counter;
  margin: 10px;
`;

export const Text = styled.p`
  color: #444444;
  text-align: center;
  padding: 5px;
`;

export const SpanText = styled.span`
  font-weight: 500;
  padding-left: 20px;
`;
export const DeleteBtn = styled.button`
  font-size: 14px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #3d85c6;
    outline: teal;
    color: #ffffff;
  }
`;
