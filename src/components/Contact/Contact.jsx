const Contact = ({ onDelete, contactItem: { name, number, id } }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
