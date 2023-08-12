import { faGlobe, faArrowsRotate, faTag, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

const links = [
    {
        id: 1,
        title: "dashboard",
        url: "/dashboard",
        icon: faGlobe,
    },
    {
        id: 2,
        title: "updates",
        url: "/updates",
        icon: faArrowsRotate,
        className: "-scale-y-100 rotate-45"
    },
    {
        id: 3,
        title: "projects",
        url: "/projects",
        icon: faCopy,
        className: "-scale-y-100"
    },
    {
        id: 4,
        title: "tags",
        url: "/tags",
        icon: faTag,
    },
    {
        id: 5,
        title: "users",
        url: "/users",
        icon: faUserFriends,
    },
]

export default links;