export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <p>
        {name}:<span>{number}</span>
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
