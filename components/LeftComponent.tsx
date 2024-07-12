"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Edit, MoreVertical } from 'lucide-react';
import HistoryComponent from './HistoryComponent'
import SearchComponent from './SearchComponent'

type Contact = {
  id: number;
  name: string;
  imageUrl: string;
  messages: string[];
  lastMessageAt: string;
};

interface LeftComponentProps {
  onClickContact: boolean;
  setOnClickContact: (value: boolean) => void;
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact | null) => void;
  authenticatedContact: Contact | null;
}

function LeftComponent({ onClickContact, setOnClickContact, selectedContact, setSelectedContact, authenticatedContact }: LeftComponentProps) {
  console.log(onClickContact)

  return (
    <div className='ml-6 p-4'>
      <div className="flex items-center justify-between flex-wrap bg-gray-200 p-4">
        <div className="w-15 h-15 rounded-full overflow-hidden shrink-0">
          <Image
            width={60}
            height={60}
            src={authenticatedContact?.imageUrl!}
            alt="image"
            className="w-full h-full object-fit-cover"
          />
        </div>
        <div className="flex gap-3 items-center justify-content-end flex-wrap">
          <Link href="#" className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
            <Edit className="text-3xl" />
          </Link>
          <Link href="#" className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
            <MoreVertical className="text-3xl" />
          </Link>
        </div>
      </div>
      <div>
        <SearchComponent/>
      </div>
      <div className='p-2'>
        <HistoryComponent onClickContact={onClickContact} setOnClickContact={setOnClickContact}
        selectedContact={selectedContact} setSelectedContact={setSelectedContact}
        authenticatedContact={authenticatedContact}
      />
      </div>
    </div>
  )
}

export default LeftComponent