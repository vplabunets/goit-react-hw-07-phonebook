import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';

import { AppWrap, PageTitle, SectionTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppWrap>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm></ContactForm>
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      {isLoading && 'Your contacts are loading, please wait foe a while'}
      {error && { error }}
      {getContacts.length > 0 && <ContactList />}
    </AppWrap>
  );
};
