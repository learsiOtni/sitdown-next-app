
type Props = {
    direction: "up" | "down"
    color: string
    size?: "sm"
}

const Triangle = (props : Props) => {

    // color must be border-b-color
    let triangleDown = `w-0 h-0 
        border-l-[7.5px] border-l-transparent
        border-t-[10px] ${props.color}
        border-r-[7.5px] border-r-transparent
    `

    // color must be border-t-color
    let triangleUp = `w-0 h-0
        border-l-[7.5px] border-l-transparent
        border-b-[10px] ${props.color}
        border-r-[7.5px] border-r-transparent
    `

    if (props.size === "sm") {

        triangleDown = `w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[7.5px] ${props.color}
            border-r-[5px] border-r-transparent
        `

        triangleUp = `w-0 h-0
            border-l-[5px] border-l-transparent
            border-b-[7.5px}] ${props.color}
            border-r-[5px] border-r-transparent
        `
    }

    let style;
    props.direction === "up" && (style = triangleUp);
    props.direction === "down" && (style = triangleDown);


    return (
        <div className={style} />
    )
}

export default Triangle