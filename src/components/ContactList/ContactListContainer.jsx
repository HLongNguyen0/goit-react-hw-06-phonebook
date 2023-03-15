import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ContactList,
  ContactListElem,
  ContactListSearch,
} from "./ContactListContainer.styled";

export default function ContactListContainer() {
  const [search, setSearch] = useState("");

  const contacts = useSelector((state) => state.contact);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <p>Contacts</p>
      <ContactListSearch
        onChange={handleChange}
        value={search}
        name="search"
        type="text"
      />
      <ContactList>
        {contacts.map((contact) => {
          return (
            contact.name.toLowerCase().includes(search.toLowerCase()) && (
              <ContactListElem key={contact.id}>
                {contact.name}: {contact.number}
              </ContactListElem>
            )
          );
        })}
      </ContactList>
    </>
  );
}
