
type Props = {
  className?: string,
  type?: string,
  children: React.ReactNode
}
const Button = (props: Props) => {

  let defaultStyle = `rounded py-2 text-white bg-primary shadow-md `
  props.className && (defaultStyle = defaultStyle + props.className)

  return (
    <button className={defaultStyle}>
      {props.children}
    </button>
    
  )
}

export default Button