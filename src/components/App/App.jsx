import Section from '../Section/Section'
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import Contacts from '../Contacts/Contacts';

import s from './App.module.css'

export default function App () {
  return (
      <div className={s.container}>
        <Section title="Phonebook">
          <ContactsForm/>
          </Section>
        <Section title="Contacts">
          <Filter/> 
          <Contacts/>
        </Section>
      </div>
  )
  }
