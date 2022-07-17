import { PhoonebookForm } from '../PhonebookForm/PhonebookForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Box } from '../Box/Box';
import { ContactsTitle, Title } from './App.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
// const contacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filterContacts, setFilterContacts] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = ({ name, number }) => {
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findContact) {
      alert(`${name} is already in contact`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleChange = e => {
    setFilterContacts(e.target.value);
  };

  const handlefilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContacts.toLowerCase())
    );
  };

  return (
    <Box pt="4" width="container" mx="auto" as="main">
      <Title>Phoonebook</Title>
      <PhoonebookForm contacts={contacts} onCreateContact={createContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filterContacts} onHandleChange={handleChange} />
      <ContactList
        onFilterContacts={handlefilterContacts}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};
