import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  border-radius: 5px;
`;

export const ListItem = styled.li`
  list-style:circle;
  flex-basis: calc((100% - 20px) / 4);
  padding: : 30px 10px;
`;
