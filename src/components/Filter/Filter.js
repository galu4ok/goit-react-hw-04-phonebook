export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChange} />
    </div>
  );
};
