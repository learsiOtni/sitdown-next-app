const EditUpdateFormFile = {
    title: {
        label: 'Headline*',
        elementType: 'input',
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
        label: 'Description*',
        elementType: 'editor',
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
    projectId: {
        label: 'Assign to a project',
        elementType: 'projectMenu',
        config: {
            id: "projectId",
            type: "text",
            name: "projectId",
        },
        value: '',
        validation: {

        },
        valid: true
    },
    tags: {
        elementType: 'input',
        label: 'Tags*',
        subLabel: '(Separate tags using space)',
        config: {
            id: "tags",
            type: "text",
            name: "tags",
        },
        value: '',
        validation: {
            //arrayRequired: true
        },
        valid: true
    },
}

export default EditUpdateFormFile