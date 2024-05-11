import Icon from "@/components/Icon/Icon"
import Button from "@/components/Button/Button"

type SearchBarProps = {
    placeholder: string,
    buttonText: string,
    buttonDropdown?: boolean,
    addProjectClicked?: () => void
}

const SearchBar = ({placeholder, buttonText, buttonDropdown, addProjectClicked}: SearchBarProps) => {
  return (
      <div className="flex items-center border px-5 py-2.5 bg-white rounded-lg focus-within:border-[#4DA1FF] focus-within:border-2">
          <div className="w-4 h-4 text-[#4F5761] text-opacity-30">
              <Icon name="search" />
          </div>
          <input className="text-[#A5A7AB] w-full ml-1.5 outline-none" placeholder={placeholder} />
          <Button className="text-black text-xl" bgNone>Search</Button>
          <Button className="text-xl px-5 ml-6" dropdown={buttonDropdown} onClick={addProjectClicked}>{buttonText}</Button>
      </div>
  )
}

export default SearchBar