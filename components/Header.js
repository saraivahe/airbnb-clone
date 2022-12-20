import Image from "next/image"
import { SearchIcon } from "@heroicons/react/solid"

const header = [
  "bg-white",
  "grid",
  "grid-cols-3",
  "p-5",
  "shadow-md",
  "sticky",
  "top-0",
  "z-50",
  "md:px-10"
].join(" ")

const leftHeaderContainer = "relative flex items-center h-10 cursor-pointer my-auto"
const middleHeaderContainer = "flex items-center md:border-2 rounded-full py-2 md:shadow-sm"
const input = "pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
const searchIcon = "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"

function Header() {
  return (
    <header className={header}>
      <div className={leftHeaderContainer}>
        <Image
          src="https://links.papareact.com/qd3"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left' }}
        />
      </div>
      <div className={middleHeaderContainer}>
        <input className={input} type="text" placeholder="Start your search" />
        <SearchIcon className={searchIcon} />
      </div>
      <div>
        { /* right section */}
      </div>
    </header>
  )
}

export default Header