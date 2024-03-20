import Icon, { CustomIcons } from "../Icon/Icon"
import TriangleIcon from "../Icon/TriangleIcon"
import { MouseEventHandler } from 'react';

type Props = {
  className?: string,
  type?: string,
  icon?: CustomIcons,
  iconStyle?: string,
  bgNone?: boolean,
  dropdown?: boolean,
  children: React.ReactNode,
  onClick: () => {},
}
const Button = (props: Props) => {

  let defaultStyle = `whitespace-nowrap rounded py-2 text-white bg-primary shadow-md hover:opacity-70 `
  let bgNoneStyle = `whitespace-nowrap py-3 px-5 hover:bg-slate-100 `
  
  if (props.className) {
    defaultStyle = defaultStyle + props.className;

    props.bgNone && (defaultStyle = bgNoneStyle + props.className);
  } else {
    props.bgNone && (defaultStyle = bgNoneStyle)
  }

  props.icon && (defaultStyle = defaultStyle + ` flex px-5`)

  let dropdownEl;
  if (props.dropdown) dropdownEl = <span className="inline-block ml-2 "><TriangleIcon direction="down" color="border-b-[##FFFFFF]" size="sm" /></span>

  return (
    <button className={defaultStyle} onClick={props.onClick}>

      {props.icon ? <>
        <Icon name={props.icon} iconContainerStyle={props.iconStyle} />
        <div className="ml-2">
          {props.children}
        </div>
      </> : <>
        {props.children}
      </>}

      {dropdownEl}
    </button>
  )
}

export default Button