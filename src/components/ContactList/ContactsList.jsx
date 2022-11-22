import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    let visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  return (
    <List>
      {filterContacts().map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
