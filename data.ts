export const statistics = [
    {
        id: 1,
        name: "updates",
        title: "Status Updates",
        currentValue: 50,
        previousValue: 45,
    },
    {
        id: 2,
        name: "projects",
        title: "Projects",
        currentValue: 24,
        previousValue: 28,
    },
    {
        id: 3,
        name: "tags",
        title: "Tags",
        currentValue: 156,
    },
    {
        id: 4,
        name: "users",
        title: "Users",
        currentValue: 86,
    },

]


export const statusUpdates = [
    {
        id: 1,
        title: "Performance - GetUserDetails request is slow",
        body: "The Performance details takes too long to load which leaves the user with... empty field screen. There are some screen in the",
        user: {
            userId: 123,
            firstname: "Time Stones",
            lastname: "test"
        },
        createdAt: "2024-05-05T23:49:15.807Z",
        tags: [
            "Subscription",
            "Trial"
        ]
    },
    {
        id: 2,
        title: "IE - Logout screen not visible",
        body: "In Internet Explorer, when you click ‘logout’ you are taken to a completely blank screen. Depending on what’s causing this, the bug may be a big issue when it comes to hand-offs in and out of the app during payment process.",
        user: {
            userId: 123,
            firstname: "Jake",
            lastname: "Cuenca"
        },
        createdAt: "2024-04-05T23:49:15.807Z",
        tags: [
            "Bug",
            "Internet",
            "Network"
        ]
    },
    {
        id: 3,
        title: "Add and test new token endpoint to API",
        body: "Need to Add endpoint and retrieve and re-use JToken. Need to find alternative to change the app settings to disable cookie authentication. This would disable the possibility of manually testing on test. This needs to be check",
        user: {
            userId: 123,
            firstname: "Maddy",
            lastname: "Jane"
        },
        createdAt: "2024-05-05T22:49:15.807Z",
        tags: [
            "Test",
            "Token"
        ]
    },
    {
        id: 4,
        title: "Create user alerts for trial/subscription",
        body: "The user should get a notification when a user’s trial/subscription is due to expire within the app. This will be shown when a user next login. There is no current framework within the application itself so this will be build from scratch",
        user: {
            userId: 123,
            firstname: "Thomas",
            lastname: "Cook"
        },
        createdAt: "2024-05-05T21:49:15.807Z",
        tags: [
            "Subscription",
            "Trial"
        ]
    }
]

export const projects = [
    {
        id: 1,
        title: "Project Twitter",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: true,
    },
    {
        id: 2,
        title: "Firefox Stratum",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: false
    },
    {
        id: 3,
        title: "Doc Ox",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: true,
    },
    {
        id: 4,
        title: "Ace the Fire",
        body: "Nulla tincidunt ipsum eu lorem vulputate, id imperdiet nunc condimentum. Praesent ut leo ultricies justo facilisis iaculis. Nullam rutrum arcu vel lacus bibendum, eu vehicula orci tempor.",
        user: {
            userId: 123,
            name: "Time Stones"
        },
        createdAt: "",
        teamMembers: [
            "Jane Dayle",
            "John Doe"
        ],
        editable: false,
    }
]

export const users = [
    {
        id: 1,
        name: "Isaac Newton",
        role: "Senior Project Leader",
        updates: 0,
        teams: 4,
        projects: 4,
    },
    {
        id: 2,
        name: "Isaac Newton",
        role: "Senior Software Developer",
        updates: 10,
        teams: 2,
        projects: 3,
    },
    {
        id: 3,
        name: "Leah Smith",
        role: "Junior Software Developer",
        updates: 50,
        teams: 1,
        projects: 4,
    },
    {
        id: 4,
        name: "Firefist Ace",
        role: "HR Manager",
        updates: 20,
        teams: 0,
        projects: 0,
    },
    {
        id: 5,
        name: "Jack Sparrow",
        role: "Project Manager",
        updates: 20,
        teams: 10,
        projects: 10,
    },
    {
        id: 5,
        name: "Holly Mane",
        role: "Junior Software Developer",
        updates: 40,
        teams: 1,
        projects: 5,
    },
]


