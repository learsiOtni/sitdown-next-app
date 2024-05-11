import Text from "@/components/Text/Text"

type DividerProps = {
    title: string
}

const Divider = ({title}: DividerProps) => {
    return (
        <div className="flex items-center">
            <Text tag="p" type="body" className="whitespace-nowrap">{title}</Text>
            <div className="ml-2.5 border-b-2 border-b-[#E6E7E8] w-full h-min" />
        </div>
    )
}

export default Divider