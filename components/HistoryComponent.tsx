"use client";
import React, { useState } from 'react'
import Image from "next/image";
import ContactComponent from './ContactComponent';
import { contacts } from '../components/contacts';

type Contact = {
  id: number;
  name: string;
  imageUrl: string;
  messages: string[];
  lastMessageAt: string;
};

interface HistoryComponentProps {
  onClickContact: boolean;
  setOnClickContact: (value: boolean) => void;
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact | null) => void;
  authenticatedContact: Contact | null;
}

function HistoryComponent({ onClickContact, setOnClickContact, selectedContact, setSelectedContact, authenticatedContact }: HistoryComponentProps) {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);
  const filteredContacts = contacts.filter((contact) => {
    // Exclure le contact authentifié de la liste des contacts
    return authenticatedContact === null || contact.id !== authenticatedContact.id;
  });

  const handleContactClick = (contact: Contact) => {
    setOnClickContact(true);
    setSelectedContact(contact);
  };

  const handleContactOnClick = (id: number) => {
    setSelectedContactId(id);
  };

  return (
    <div
      className="max-h-[600px] overflow-y-auto scrollbar-hide"
      style={{ overflowY: "auto" }}>
      <ul className="flex flex-col gap-2">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => handleContactClick(contact)} className='w-full'>
              <ContactComponent contact={contact} isSelected={selectedContactId === contact.id} onContactClick={handleContactOnClick}/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HistoryComponent