import { FilterInput } from './Filter.styled';
export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search name..."
      />
    </div>
  );
};
