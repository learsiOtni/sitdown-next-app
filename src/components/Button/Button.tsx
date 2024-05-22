import Icon, { CustomIcons } from "../Icon/Icon"
import TriangleIcon from "../Icon/TriangleIcon"

type Props = {
  className?: string,
  type?: "button" | "submit" | "reset" | undefined,
  icon?: CustomIcons,
  iconStyle?: string,
  bgNone?: boolean,
  dropdown?: boolean,
  children: React.ReactNode,
  onClick?: any,
}
const Button = ({ className, type, icon, iconStyle, bgNone, dropdown, children, onClick}: Props) => {

  let style = ""
  let defaultStyle = `whitespace-nowrap rounded py-2 text-white bg-primary shadow-md hover:opacity-70`
  let bgNoneStyle = `whitespace-nowrap py-3 px-5 hover:bg-slate-100 `
  
  if (className) {
    style = `${defaultStyle} ${className}`;
    bgNone && (style = `${bgNoneStyle} ${className}`);
  } else {
    bgNone && (style = bgNoneStyle)
  }

  icon && (style = `${style} flex px-5`)

  let dropdownEl;
  if (dropdown)
    dropdownEl = (
      <span className="inline-block ml-2 ">
        <TriangleIcon direction="down" color="border-b-[#FFFFFF]" size="sm" />
      </span>
    );
    
  return (
    <button
      className={style ? style : defaultStyle}
      onClick={onClick}
      type={type}
    >
      {icon ? (
        <div className="flex items-center justify-center">
          <Icon name={icon} iconContainerStyle={iconStyle} />
          <div className="ml-2.5">{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}

      {dropdownEl}
    </button>
  );
}

export default Button