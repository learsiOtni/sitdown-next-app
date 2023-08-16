
type Props = {
    color: string
}

const CardIcon = (props: Props) => {

    let style = `w-1.5 h-1.5 m-[0.5px] ${props.color && props.color}`

    return (
        <div className="flex flex-wrap w-[16px]">
            <div className={style} />
            <div className={style} />
            <div className={style} />
            <div className={style} />
        </div>
    )
}

export default CardIcon;