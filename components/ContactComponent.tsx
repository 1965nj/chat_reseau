import React from 'react'
import Image from "next/image";

type Contact = {
    id: number;
    name: string;
    imageUrl: string;
    messages: string[];
    lastMessageAt: string;
};


type ContactComponentProps = {
    contact: Contact;
};

const ContactComponent: React.FC<ContactComponentProps> = ({ contact }) => {
    return (
        <div className="flex flex-wrap items-center gap-3 hover:bg-gray-300 cursor-pointer rounded ">
            <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
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
                <div className="flex-grow">
                    <p className="font-semibold mb-1"> {contact.name} </p>
                    <span className="block text-xs clr-neutral-500">
                        {contact.messages[0]}
                    </span>
                </div>
                <div className="shrink-0 inline-block text-center">
                    <div className="grid place-content-center w-6 h-6 rounded-full bg-primary text-white">
                        <span className="text-sm lh-1">{contact.messages.length}</span>
                    </div>
                    <span className="inline-block text-primary text-xs">
                        {contact.lastMessageAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent