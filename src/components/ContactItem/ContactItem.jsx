import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { fetchDeleteContacts } from 'redux/contacts/contacts-operations';

import styles from './contact-item.module.css';

const ContactItem = ({ id, number, name}) => {
  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    dispatch(fetchDeleteContacts(id));
  };

  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        className={styles.buttonRemove}
        onClick={() => handleRemoveContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.defaultProps = {
  items: [],
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
