import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const { name, phone, id } = contact;
  const dispatch = useDispatch();
  const contactCleaner = () => dispatch(deleteContact(id));

  return (
    <Wrapper>
      <span>{name}:</span>
      <span>{phone}</span>
      <Button contact={contact.id} type="button" onClick={contactCleaner}>
        Delete
      </Button>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
