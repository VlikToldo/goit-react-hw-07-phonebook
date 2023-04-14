import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './contact-form.module.css';
import initialState from './initialState';

import {fetchContacts, fetchAddContact} from '../../redux/contacts/contacts-operations';


const ContactForm = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchContacts())
  }, [dispatch])


  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form className={styles.boxForm} action="" onSubmit={handleSubmit}>
      <div className={styles.boxInput}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={styles.boxInput}>
        <label>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={styles.buttonAdd}>Add contact</button>
    </form>
  );
};

export default ContactForm;
