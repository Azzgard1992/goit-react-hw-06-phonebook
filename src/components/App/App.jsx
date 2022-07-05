import { Component } from 'react';
import { PhoonebookForm } from '../PhonebookForm/PhonebookForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Box } from '../Box/Box';
import { ContactsTitle, Title } from './App.styled';
import { nanoid } from 'nanoid';
const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  createContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    for (const { name } of this.state.contacts) {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contact`);
        return;
      }
    }

    // this.state.contacts.find(({ name }) =>
    //   name === newContact.name
    //     ? alert(`${newContact.name} is already in contact`)
    //     : alert(`sfsdfds!`)
    // );

    // this.state.contacts.find(({ name }) => {
    //   if (name === newContact.name) {
    //     alert(`${newContact.name} is already in contact`);
    //     return;
    //   }
    // });

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    console.log(this.state.contacts);
    return (
      <Box pt="4" width="container" mx="auto" as="main">
        <Title>Phoonebook</Title>
        <PhoonebookForm
          contacts={this.state.contacts}
          onCreateContact={this.createContact}
        />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onHandleChange={this.handleChange} />
        <ContactList
          onFilterContacts={this.filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
