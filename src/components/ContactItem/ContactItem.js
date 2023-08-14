export const ContactItem = ({ contact: { name, number, id } }) => {
  return (
    <div>
      <p>
        {name}:<span>{number}</span>
      </p>
    </div>
  );
};
