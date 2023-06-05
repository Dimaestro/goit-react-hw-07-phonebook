import React from 'react'
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsOperations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    console.log(contact.id);
    dispatch(deleteContacts(contact.id));
  }
  return (
    <>
      <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <button className={styles.button} type="button" onClick={handleDelete}>
              delete
            </button>
    </>
  )
}

export default Contact;
