"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";

type Contact = {
  id: number;
  name: string;
  password: string;
  imageUrl: string;
  messages: string[];
  lastMessageAt: string;
};

export default function Home() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      password: 'jeu',
      imageUrl: '/img/user-1.PNG',
      messages: ['Hello!', 'How are you?', 'This is a test message.'],
      lastMessageAt: '3m'
    },
    {
      id: 2,
      name: 'Jane Smith',
      password: 'password',
      imageUrl: '/img/user-2.PNG',
      messages: ['Hi there!', 'Just wanted to say hi.'],
      lastMessageAt: '2m',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      password: 'erreur',
      imageUrl: '/img/user-3.PNG',
      messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
      lastMessageAt: '5m',
    },
    {
      id: 4,
      name: 'Bob le Japhar',
      password: 'jeune',
      imageUrl: '/img/user-3.PNG',
      messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
      lastMessageAt: '7m',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérifier si le nom et le mot de passe sont dans la liste des contacts
    const matchingContact = contacts.find(
      (contact) => contact.name === name && contact.password === password
    );

    if (matchingContact) {
      console.log('Connexion réussie!');
      // Rediriger vers la page /chat en passant le contact authentifié dans l'URL
      router.push(`/chat?contactId=${matchingContact.id}`);
      // Vous pouvez ajouter ici la logique pour rediriger l'utilisateur vers une autre page
    } else {
      console.log('Nom ou mot de passe incorrect.');
    }
  };

  return (
    <div className="flex justify-center items-center h-[100%] p-20">
      <form onSubmit={handleSubmit} className='m-20 bg-gray-200 rounded-lg px-10 py-10 w-[30%]'>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded-full p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-2">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-full p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 w-full text-white py-2 px-4 rounded-full hover:bg-blue-600">
          Sign in
        </button>
      </form>
    </div>
  );
}