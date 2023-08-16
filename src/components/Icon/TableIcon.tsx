
type Props = {
    color: string
}

const Table = (props: Props) => {

    let style = `w-4 h-[7px] mt-[1px] ${props.color && props.color}`;

    return (
        <div className="">
            <div className={style}/>
            <div className={style}/>
        </div>
    )
}

export default Table;
