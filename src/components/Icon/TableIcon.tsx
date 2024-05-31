
type TableProps = {
    color: string
}

const Table = ({color}: TableProps) => {

    let style = `w-4 h-[7px] mt-[1px] ${color}`;

    return (
        <div className="">
            <div className={style}/>
            <div className={style}/>
        </div>
    )
}

export default Table;
