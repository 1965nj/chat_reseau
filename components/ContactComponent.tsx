"use client";
import React, { useState } from 'react'
import Image from "next/image";




interface ContactComponentProps {
    contact: {
      id: number;
      name: string;
      imageUrl: string;
      messages: string[];
      lastMessageAt: string;
    };
    isSelected: boolean;
    onContactClick: (id: number) => void;
  }

const ContactComponent: React.FC<ContactComponentProps> = ({ contact, isSelected, onContactClick }) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleClick = () => {
        onContactClick(contact.id);
    };

    return (
        <div onClick={handleClick} className={`flex flex-wrap items-center gap-3 hover:bg-gray-300 cursor-pointer rounded p-4 ${isSelected ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>
            <div className="w-16 h-16 relative z-[1] rounded-full shrink-0">
                <Image
                    width={44}
                    height={44}
                    src={contact.imageUrl}
                    alt="image"
                    className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                />
                <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
            </div>
            <div className="flex-grow flex items-center justify-between gap-4">
                <div className="flex flex-col items-start">
                    <p className="font-semibold mb-1 text-2xl font-medium"> {contact.name} </p>
                    <span className="block text-xl font-light clr-neutral-500 max-content">
                        {contact.messages[0]}
                    </span>
                </div>
                <div className="shrink-0 inline-block text-center">
                    <span className="inline-block text-primary text-sl">
                        {contact.lastMessageAt}
                    </span>
                    <div className="grid place-content-center w-6 h-6 rounded-full bg-[#37D27A] text-white">
                        <span className="text-sm lh-1">{contact.messages.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent