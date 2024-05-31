
type CardIconProps = {
    color: string
}

const CardIcon = ({color}: CardIconProps) => {

    let style = `w-1.5 h-1.5 m-[0.5px] ${color}`

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