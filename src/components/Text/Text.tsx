import classes from './text.module.css';

type TextProps = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    type: "heading" | "title" | "body" | "caption" | "caption-underline" | "caption-primary";
    className?: string
    children: React.ReactNode
}

const Text = (props: TextProps) => {

    let text;
    let textClasses = [];

    props.className && textClasses.push(props.className)

    textClasses.push(classes[props.type])

    switch(props.tag) {
        case 'h1': text = <h1 className={textClasses.join(' ')}>{props.children}</h1>; break;
        case 'h2': text = <h2 className={textClasses.join(' ')}>{props.children}</h2>; break;
        case 'h3': text = <h3 className={textClasses.join(' ')}>{props.children}</h3>; break;
        case 'h4': text = <h4 className={textClasses.join(' ')}>{props.children}</h4>; break;
        case 'h5': text = <h5 className={textClasses.join(' ')}>{props.children}</h5>; break;
        case 'h6': text = <h6 className={textClasses.join(' ')}>{props.children}</h6>; break;
        case 'p': text = <p className={textClasses.join(' ')}>{props.children}</p>; break;
        case 'span': text = <span className={textClasses.join(' ')}>{props.children}</span>; break;
        default: text = <p className={textClasses.join(' ')}>{props.children}</p>;
    };

    return text;
}

export default Text