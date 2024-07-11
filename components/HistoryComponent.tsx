import React from 'react'
import Image from "next/image";
import ContactComponent from './ContactComponent';

function HistoryComponent() {

  const contacts=[{
    id: 1,
    name: 'John Doe',
    imageUrl: '/img/user-1.PNG',
    messages: ['Hello!', 'How are you?', 'This is a test message.'],
    lastMessageAt: '3m'
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageUrl: '/img/user-2.PNG',
    messages: ['Hi there!', 'Just wanted to say hi.'],
    lastMessageAt: '2m',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    imageUrl: '/img/user-3.PNG',
    messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
    lastMessageAt: '5m',
  },
  {
    id: 4,
    name: 'Bob le Japhar',
    imageUrl: '/img/user-3.PNG',
    messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
    lastMessageAt: '7m',
  },]

  return (
    <div
          className="max-h-[600px] overflow-y-auto scrollbar-hide"
          style={{ overflowY: "auto" }}>
          <ul className="flex flex-col gap-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <a href=""><ContactComponent contact={contact} /></a>
          </li>
        ))}
      </ul>
        </div>
  )
}

export default HistoryComponent