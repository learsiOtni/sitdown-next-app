import { faGlobe, faArrowsRotate, faTag, faUserFriends, faPlusCircle, faPen, faSearch, faBell, faTrash, faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type CustomIcons = "dashboard" | "projects" | "tags" | 
"updates" | "users" | "add" | "edit" | "search" | "notification" |
"delete" | "user" | "settings";

type Props = {
    name: CustomIcons;
    iconContainerStyle?: string;
    background?: boolean;
}

const Icon = (props: Props) => {

    let icon = faCopy;
    let containerStyle = props.iconContainerStyle;
    let iconStyle = "";

    props.name === "updates" && (iconStyle = "-scale-y-100 rotate-45");
    props.name === "projects" && (iconStyle = "-scale-y-100");

    props.name === "dashboard" && (icon = faGlobe) && props.background && (containerStyle = containerStyle + " bg-yellow");
    props.name === "updates" && (icon = faArrowsRotate) && props.background && (containerStyle = containerStyle + " bg-yellow");
    props.name === "tags" && (icon = faTag) && props.background && (containerStyle = containerStyle + " bg-purple");
    props.name === "users" && (icon = faUserFriends) && props.background && (containerStyle = containerStyle + " bg-red");
    props.name === "projects" && (icon = faCopy) && props.background && (containerStyle = containerStyle + " bg-blue");

    props.name === "add" && (icon = faPlusCircle) && props.background && (iconStyle = iconStyle + " text-brand");
    props.name === "edit" && (icon = faPen) && (containerStyle = containerStyle + " border-b-4");
    props.name === "search" && (icon = faSearch);
    props.name === "notification" && (icon = faBell);
    props.name === "delete" && (icon = faTrash);
    props.name === "user" && (icon = faUser);
    props.name === "settings" && (icon = faGear);
    
    return (
        <div className={containerStyle}>
            <FontAwesomeIcon icon={icon} className={iconStyle}/>
        </div>
        
    )
}

export default Icon