import Icon from "@/components/Icon/Icon"
import Button from "@/components/Button/Button"

type Props = {
    placeholder: string,
    buttonText: string,
}

const SearchBar = (props: Props) => {
  return (
      <div className="flex items-center border px-5 py-2.5 bg-white rounded-lg focus-within:border-[#4DA1FF] focus-within:border-2">
          <div className="w-4 h-4 text-[#4F5761] text-opacity-30">
              <Icon name="search" />
          </div>
          <input className="text-[#A5A7AB] w-[70%] ml-1.5 outline-none" placeholder={props.placeholder} />
          <span className="text-black text-xl">Search</span>
          <Button className="text-xl px-5 ml-6">{props.buttonText}</Button>
      </div>
  )
}

export default SearchBar