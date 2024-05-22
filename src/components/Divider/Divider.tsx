type DividerProps = {
    title: string
}

const Divider = ({title}: DividerProps) => {
    return (
        <div className="flex items-center">
            <p className="text-body whitespace-nowrap">{title}</p>
            <div className="ml-2.5 border-b-2 border-b-[#E6E7E8] w-full h-min" />
        </div>
    )
}

export default Divider