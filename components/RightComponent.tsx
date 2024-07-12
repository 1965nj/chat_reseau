"use client";
import React, { useState } from 'react'
import {
  CameraIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlusCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { MicrophoneIcon } from "@heroicons/react/20/solid";
import  InputEmoji  from "react-input-emoji";
import { useEffect, useRef } from "react";

type Contact = {
  id: number;
  name: string;
  imageUrl: string;
  messages: string[];
  lastMessageAt: string;
};

interface RightComponentProps {
  selectedContact: Contact | null;
}

function RightComponent({ selectedContact }: RightComponentProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  console.log(text)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleSendMessage = () => {
    // Envoyer le message avec la photo si elle existe
    if (selectedImage) {
      // Envoyer le message avec la photo
    } else {
      // Envoyer le message sans photo
    }
    setText('');
    setSelectedImage(null);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  return (
    <div className="col-span-6 min-[1px]:col-span-6 xl:col-span-8 p-4 grid grid-rows-[50px_aut_50px] h-screen">
        <div className="chat-box__content-head p-4  bg-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-15 h-15 relative z-[1] rounded-full shrink-0">
                <Image
                  width={60}
                  height={60}
                  src={selectedContact?.imageUrl!}
                  alt="image"
                  className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                />
                <span className="inline-block w-4 h-4 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
              </div>
              <h5 className="mb-0 flex-grow clr-neutral-500 text-3xl font-medium">{selectedContact?.name}</h5>
            </div>
            <div className="flex gap-3 items-center justify-content-end flex-wrap">
              <Link
                href="#"
                className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
                <PhoneIcon className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
                <VideoCameraIcon className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="max-h-full scrollbar-hide bg-[#EAEBFD] p-4 overflow-y-auto"
          style={{ overflowY: "auto" }}
          ref={scrollRef}>
          <ul className="flex flex-col gap-6">
            <li>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                  <Image
                    width={48}
                    height={48}
                    src={selectedContact?.imageUrl!}
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-end">
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%]  relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    I play Stronghold Kingdoms
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                  <Image
                    width={48}
                    height={48}
                    src="/img/user-2.PNG"
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                  <Image
                    width={48}
                    height={48}
                    src={selectedContact?.imageUrl!}
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    How to make payment?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-end">
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%]  relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    Lorem Ipsum is simply dummy tex
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                  <Image
                    width={48}
                    height={48}
                    src="/img/user-2.PNG"
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                  <Image
                    width={48}
                    height={48}
                    src={selectedContact?.imageUrl!}
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-end">
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%]  relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    I play Stronghold Kingdoms
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                  <Image
                    width={48}
                    height={48}
                    src="/img/user-2.PNG"
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col align-start">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                  <Image
                    width={48}
                    height={48}
                    src={selectedContact?.imageUrl!}
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    How to make payment?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-end">
                <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                  <p className="inline-block mb-0 clr-neutral-500">
                    Lorem Ipsum is simply dummy tex
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                  <Image
                    width={48}
                    height={48}
                    src="/img/user-2.PNG"
                    alt="image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="p-4 flex items-center flex-wrap gap-4">
          <div className="flex items-center justify-between max-w-[150px] gap-4 shrink-0">
            <div className="shrink-0">
              <Link
                href="#"
                className="link inline-block clr-neutral-500 hover:text-primary">
                <PlusCircleIcon className="w-8 h-8" />
              </Link>
            </div>
            <div className="shrink-0">
              <Link
                href="#"
                className="link inline-block clr-neutral-500 hover:text-primary">
                <MicrophoneIcon className="w-8 h-8" />
              </Link>
            </div>
            <div className="shrink-0">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="link inline-block clr-neutral-500 hover:text-primary"
            >
              <CameraIcon className="w-8 h-8" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <div className="shrink-0 w-[755%] h-14">
            {selectedImage ? (
              <div className="flex items-center gap-2">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected image"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <InputEmoji
                  value={text}
                  onChange={setText}
                  cleanOnEnter
                  shouldReturn
                  shouldConvertEmojiToImage
                  placeholder="Type a message"
                />
              </div>
            ) : (
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                shouldReturn
                shouldConvertEmojiToImage
                placeholder="Type a message"
              />
            )}
          </div>
        </div>
          {/* <div className="flex items-center ml-5 flex-grow p-2 border border-neutral-30 bg-[var(--bg-2)] rounded-full">
            <input
              type="text"
              placeholder="Type message..."
              className="w-full bg-transparent focus:outline-none border-0 flex-grow"
            />
          </div> */}
          {/* <div className="grid place-content-center w-10 h-8 rounded-full border-1 bg-primary text-black shrink-0">
            <button
              type="button">
              <PaperAirplaneIcon className="w-10 h-8" />
            </button>
          </div> */}
        </div>
      </div>
  )
}

export default RightComponent