import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {addContact, deleteContact, filter} from './contacts-actions';
import defaultContacts from '../../data/contacts.json';

const contactsReducer = createReducer(defaultContacts, {
  [addContact]: (state, { payload }) => {
    if (
      state.find(
        contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts.`);
    } else if (state.find(contact => contact.number === payload.number)) {
      alert(`${payload.number} is already in contacts.`);
    } else if (!payload.name.trim() || !payload.number.trim()) {
      alert("Enter the contact's name and number phone!");
    } return [...state, payload];
  },

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

export default combineReducers({
  contactsReducer,
  filterReducer,
});