const ProjectFormFile = {
    title: {
        elementType: 'input',
        label: "Project name*",
        config: {
            id: "title",
            type: "text",
            name: "title",
        },
        value: '',
        validation: {
            isRequired: true
        },
        valid: true
    },
    body: {
        elementType: 'editor',
        label: "Description*",
        config: {
            id: "body",
            type: "text",
            name: "body",
        },
        value: '',
        validation: {

        },
        valid: true
    },
    teamMembers: {
        elementType: 'teamMenu',
        label: "Team members*",
        config: {
            id: "teamMembers",
            type: "text",
            name: "teamMembers",
        },
        value: '',
        validation: {
            //arrayRequired: true
        },
        valid: true
    },
}

export default ProjectFormFile