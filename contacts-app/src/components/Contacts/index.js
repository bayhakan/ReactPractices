import {useState} from 'react'
import Form from './Form';
import List from './List';

function Contacts() {
  const [contacts, setContacts] = useState ([]); 

   

    return (
    <div>
    <List />
    <Form addContact={setContacts} />
    </div>
  )
}

export default Contacts