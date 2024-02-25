import Contact from '../Contact/Contact';

const ContactList = ({ ContactsList, onDelete }) => {
  const deleteContact = ContactId => {
    onDelete(prevUsers => {
      return prevUsers.filter(Contact => Contact.id !== ContactId);
    });
  };

  return (
    <ul>
      {ContactsList.map(contactItem => (
        <li key={contactItem.id}>
          <Contact contactItem={contactItem} onDelete={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
