import { Wrapper, Text, SpanText, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <Wrapper>
      <Text>
        {name}:<SpanText>{number}</SpanText>
      </Text>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </Wrapper>
  );
};
