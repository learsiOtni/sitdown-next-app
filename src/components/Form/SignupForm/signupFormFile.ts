const signupForm = {
    email: {
        elementType: 'input',
        config: {
            id: "email",
            type: "email",
            name: "email",
            placeholder: "Enter email"
        },
        value: '',
        validation: {

        },
        valid: true
    },
    firstname: {
        elementType: 'input',
        config: {
            id: "firstname",
            type: "text",
            name: "firstname",
            placeholder: "Enter first name"
        },
        value: '',
        validation: {

        },
        valid: true
    },
    lastname: {
        elementType: 'input',
        config: {
            id: "lastname",
            type: "text",
            name: "lastname",
            placeholder: "Enter last name"
        },
        value: '',
        validation: {

        },
        valid: true
    },
    password: {
        elementType: 'input',
        config: {
            id: "password",
            type: "password",
            name: "password",
            placeholder: "Enter password"
        },
        value: '',
        validation: {

        },
        valid: true
    },
    confirmPassword: {
        elementType: 'input',
        config: {
            id: "confirmPassword",
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm password"
        },
        value: '',
        validation: {

        },
        valid: true
    },
}

export default signupForm;