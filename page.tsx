"use client";
import React, { useState } from 'react'
import Image from "next/image";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";

type Contact = {
  id: number;
  name: string;
  imageUrl: string;
  messages: string[];
  lastMessageAt: string;
};

export default function Home() {
  const [onClickContact, setOnClickContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <div className="flex">
      <div className="w-[30%]">
        <LeftComponent onClickContact={onClickContact} setOnClickContact={setOnClickContact} selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>
      </div>
      <div className="w-[70%]">
        {
          onClickContact ? (<RightComponent selectedContact={selectedContact}/>) : <div className='bg-gray-200 col-span-6 min-[1px]:col-span-6 xl:col-span-8 p-4 grid grid-rows-[50px_aut_50px] h-screen'></div>
        }
      </div>
    </div>
  );
}
