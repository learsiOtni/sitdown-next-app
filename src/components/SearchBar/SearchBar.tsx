import Icon from "@/components/Icon/Icon";
import Button from "@/components/Button/Button";

type SearchBarProps = {
  placeholder: string;
  buttonText: string;
  buttonDropdown?: boolean;
  addProjectClicked?: () => void;
};

const SearchBar = ({
  placeholder,
  buttonText,
  buttonDropdown,
  addProjectClicked,
}: SearchBarProps) => {
  return (
    <div className="flex items-center border p-1.5 bg-white rounded-lg md:px-5 md:py-2.5 focus-within:border-[#4DA1FF] focus-within:border-2">
      <Icon
        name="search"
        iconContainerStyle="text-xs text-[#4F5761] text-opacity-30 md:text-base"
      />

      <input
        className="text-[#A5A7AB] w-full ml-1.5 outline-none text-[10px] md:text-base"
        placeholder={placeholder}
      />
      <Button className="p-1.5 text-black text-xs md:text-xl md:px-5" bgNone>
        Search
      </Button>

      <Button
        className="p-1.5 ml-1.5 md:px-5 text-xs md:ml-6 md:text-xl"
        dropdown={buttonDropdown}
        onClick={addProjectClicked}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default SearchBar;
