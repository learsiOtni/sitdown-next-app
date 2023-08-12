
type Props = {
    key: number,
    className?: string
    children: React.ReactNode
}

const Card = (props: Props) => {

    let defaultStyle = `border-[#E2E5E6] bg-white rounded shadow-md `
    props.className && (defaultStyle = defaultStyle + props.className)

    return (
        <div className={defaultStyle}>
            {props.children}
        </div>
    )
}

export default Card