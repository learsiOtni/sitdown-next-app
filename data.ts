import { faArrowsRotate, faTag, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'


export const statistics = [
    {
        id: 1,
        title: "Status Updates",
        currentValue: 50,
        previousValue: 45,
        icon: {
            name: faArrowsRotate,
            className: "-scale-y-100 rotate-45",
            bgColor: "#EBDB82"
        }
    },
    {
        id: 2,
        title: "Projects",
        currentValue: 24,
        previousValue: 28,
        icon: {
            name: faCopy,
            className: "-scale-y-100",
            bgColor: "#82CFEB"
        }
    },
    {
        id: 3,
        title: "Tags",
        currentValue: 156,
        icon: {
            name: faTag,
            bgColor: "#B282EB"
        }
    },
    {
        id: 4,
        title: "Users",
        currentValue: 86,
        icon: {
            name: faUserFriends,
            bgColor: "#EB82A6"
        }
    },

]


export const statusUpdates = [
    {
        statusId: 1,
        title: "Performance - GetUserDetails request is slow",
        body: "The Performance details takes too long to load which leaves the user with... empty field screen. There are some screen in the",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "5 mins ago",
        tags: [
            "Subscription",
            "Trial"
        ]
    },
    {
        statusId: 2,
        title: "Performance - GetUserDetails request is slow",
        body: "The Performance details takes too long to load which leaves the user with... empty field screen. There are some screen in the",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "10 mins ago",
        tags: [
            "Subscription",
            "Trial"
        ]
    },
    {
        statusId: 3,
        title: "Performance - GetUserDetails request is slow",
        body: "The Performance details takes too long to load which leaves the user with... empty field screen. There are some screen in the",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "20 mins ago",
        tags: [
            "Subscription",
            "Trial"
        ]
    },
    {
        statusId: 4,
        title: "Performance - GetUserDetails request is slow",
        body: "The Performance details takes too long to load which leaves the user with... empty field screen. There are some screen in the",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "1 hour ago",
        tags: [
            "Subscription",
            "Trial"
        ]
    }
]

export const Projects = [
    {
        id: 1,
        title: "Project Twitter",
        body: "lorem posum",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ]
    },
    {
        id: 2,
        title: "Project Twitter",
        body: "lorem posum",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ]
    },
    {
        id: 3,
        title: "Project Twitter",
        body: "lorem posum",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ]
    },
    {
        id: 4,
        title: "Project Twitter",
        body: "lorem posum",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ]
    }
]

export const Users = [
    {
        id: 1,
        name: "Isaac Newton",
        role: "Senior Project Leader",
        updates: [
            "ProjectX",
            "ProjectY",
        ],
        teams: [
            "ProjectX",
            "ProjectY",
        ],
        projects: [
            "ProjectX",
            "ProjectY",
        ]
    }
]


