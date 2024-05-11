
type CardProps = {
    className?: string
    children: React.ReactNode
}

const Card = ({className, children}: CardProps) => {

    let defaultStyle = `border-[#E2E5E6] bg-white rounded shadow-md `
    className && (defaultStyle = defaultStyle + className)

    return (
        <div className={defaultStyle}>
            {children}
        </div>
    )
}

export default Card