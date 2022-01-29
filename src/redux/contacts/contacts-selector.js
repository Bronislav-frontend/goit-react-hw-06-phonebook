export const getContacts = state => state.contacts.contactsReducer;
export const getFilter = state => state.contacts.filterReducer;

export const showFiltered = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};

