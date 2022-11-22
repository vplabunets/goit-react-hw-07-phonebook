import { React } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrap, PageTitle, SectionTitle } from './App.styled';
export const App = () => {
  return (
    <AppWrap>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm></ContactForm>
      <SectionTitle>Contacts</SectionTitle>
      <Filter></Filter>
      <ContactList></ContactList>
    </AppWrap>
  );
};
