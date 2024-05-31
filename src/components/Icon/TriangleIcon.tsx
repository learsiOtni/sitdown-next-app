
type TriangleProps = {
    direction: "up" | "down"
    color: string
    size?: "sm"
}

const Triangle = ({direction, color, size} : TriangleProps) => {

    // color must be border-b-color
    let triangleDown = `w-0 h-0 
        border-l-[7.5px] border-l-transparent
        border-t-[10px] ${color}
        border-r-[7.5px] border-r-transparent`

    // color must be border-t-color
    let triangleUp = `w-0 h-0
        border-l-[7.5px] border-l-transparent
        border-b-[10px] ${color}
        border-r-[7.5px] border-r-transparent`

    if (size === "sm") {

        triangleDown = `w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[7.5px] ${color}
            border-r-[5px] border-r-transparent`

        triangleUp = `w-0 h-0
            border-l-[5px] border-l-transparent
            border-b-[7.5px] ${color}
            border-r-[5px] border-r-transparent`
    }

    let style;
    direction === "up" && (style = triangleUp);
    direction === "down" && (style = triangleDown);


    return (
        <div className={style} />
    )
}

export default Triangle