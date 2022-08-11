import { PhoonebookForm } from '../PhonebookForm/PhonebookForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Box } from '../Box/Box';
import { ContactsTitle, Title } from './App.styled';

export const App = () => {
  return (
    <Box pt="4" width="container" mx="auto" as="main">
      <Title>Phoonebook</Title>
      <PhoonebookForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Box>
  );
};
