import {
  faGlobe,
  faArrowsRotate,
  faTag,
  faUserFriends,
  faPlusCircle,
  faPen,
  faSearch,
  faBell,
  faTrash,
  faUser,
  faGear,
  faTimes,
  faList,
  faListOl,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export type CustomIcons =
  | "dashboard"
  | "projects"
  | "tags"
  | "updates"
  | "users"
  | "add"
  | "edit"
  | "search"
  | "notification"
  | "delete"
  | "user"
  | "settings"
  | "close"
  | "list"
  | "orList"
  | "check";

type IconProps = {
  name: CustomIcons;
  iconContainerStyle?: string;
  background?: boolean;
  size?: SizeProp
};

const Icon = ({ name, iconContainerStyle, background, size }: IconProps) => {
  let icon = faCopy;
  let containerStyle = `flex items-center justify-center ${iconContainerStyle}`;
  let iconStyle = "";

  name === "updates" && (iconStyle = "-scale-y-100 rotate-45");
  name === "projects" && (iconStyle = "-scale-y-100");

  name === "dashboard" &&
    (icon = faGlobe) &&
    background &&
    (containerStyle = containerStyle + " bg-yellow");
  name === "updates" &&
    (icon = faArrowsRotate) &&
    background &&
    (containerStyle = containerStyle + " bg-yellow");
  name === "tags" &&
    (icon = faTag) &&
    background &&
    (containerStyle = containerStyle + " bg-purple");
  name === "users" &&
    (icon = faUserFriends) &&
    background &&
    (containerStyle = containerStyle + " bg-red");
  name === "projects" &&
    (icon = faCopy) &&
    background &&
    (containerStyle = containerStyle + " bg-blue");

  name === "add" &&
    (icon = faPlusCircle) &&
    background &&
    (iconStyle = iconStyle + " text-brand");
  name === "edit" &&
    (icon = faPen) &&
    (containerStyle = containerStyle + " border-b-4");
  name === "search" && (icon = faSearch);
  name === "notification" && (icon = faBell);
  name === "delete" && (icon = faTrash);
  name === "user" && (icon = faUser);
  name === "settings" && (icon = faGear);
  name === "close" && (icon = faTimes);
  name === "list" && (icon = faList);
  name === "orList" && (icon = faListOl);
  name === "check" && (icon = faCheck);

  return (
    <div className={containerStyle}>
      <FontAwesomeIcon icon={icon} className={iconStyle} size={size} />
    </div>
  );
};

export default Icon;
