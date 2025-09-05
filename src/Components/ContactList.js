import React from 'react';

const ContactList = ({ contacts }) => {
  if (contacts.length === 0) return <p>No contacts found.</p>;

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>{contact.name}</strong> - {contact.phone}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
