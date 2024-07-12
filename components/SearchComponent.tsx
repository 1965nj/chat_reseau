import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchComponent() {
  return (
    <div className="flex h-10 items-center p-2 border border-neutral-30 bg-[var(--bg-2)] rounded-full my-3">
      <input
        type="text"
        placeholder="Search"
        className="w-full focus:outline-none lg:pl-2 bg-transparent border-0"
      />
      <button
        type="button"
        className="grid place-content-center  w-10 h-10 rounded-full border-0 bg-primary text-white shrink-0 hover:text-primary">
        <MagnifyingGlassIcon className="h-3 w-5" />
      </button>
    </div>
  )
}

export default SearchComponent