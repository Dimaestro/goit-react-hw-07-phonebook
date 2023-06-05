import Contact from 'components/Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { countPage } from 'redux/pagination/paginationSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)
  // const name = useSelector(state => state.filter.name)
  const page = useSelector(state => state.pagination.page)
  const perPage = useSelector(state => state.pagination.perPage)

  const renderContacts = () => {
    return [...contacts.slice((page - 1) * perPage, page * perPage)]
  }

  const loadMore = () => {
      dispatch(countPage(3))
  }

  // const onFilteredContact = (name) => {
  //     return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()))
  // }
  
  // const filteredContacts = onFilteredContact(name);
  const renderContactsPage = renderContacts(page);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {renderContactsPage.map((contact) => {
        return (
          <li className={styles.item} key={contact.id}>
            <Contact contact={contact}/>
          </li>
        )
      })}
      </ul>
      {contacts.length > perPage && (
        <button
        type="button"
        className={styles.button}
        onClick={loadMore}
      >
        Load more
      </button>
      )}
    </div>
  )
}

export default ContactList;