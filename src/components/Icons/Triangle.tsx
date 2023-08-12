
const Triangle = (props : { direction: "up" | "down"}) => {

    const triangleDown = `w-0 h-0 
        border-l-[7.5px] border-l-transparent
        border-t-[10px] border-t-error
        border-r-[7.5px] border-r-transparent
        mt-[-2px]
    `

    const triangleUp = `w-0 h-0
        border-l-[7.5px] border-l-transparent
        border-b-[10px] border-b-success
        border-r-[7.5px] border-r-transparent
        mt-[-2px]
    `

    let style;
    props.direction === "up" && (style = triangleUp);
    props.direction === "down" && (style = triangleDown);

    return (
        <div className={style} />
    )
}

export default Triangle