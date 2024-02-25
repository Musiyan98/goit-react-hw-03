import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
// import Contact from './Contact/Contact';

import './App.css';

const ContactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const Contact = ({ contactItem: { name, number } }) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{number}</p>
//       <button>Delete</button>
//     </div>
//   );
// };

function App() {
  // const [contacts, setContacts] = useState(ContactsList);
  const [contacts, setContacts] = useState(ContactsList);
  const [inputValue, setInputValue] = useState('');

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <SearchBox value={inputValue} onChange={evt => setInputValue(evt.target.value)} />
        <ContactList ContactsList={contactsFilter} onDelete={setContacts} />
      </div>
    </>
  );
}

export default App;
