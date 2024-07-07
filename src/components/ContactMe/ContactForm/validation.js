const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "Enter your name.";
    } else if (!values.email) {
        errors.email = "Enter your email.";
    } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)
    ) {
        errors.email = "Invalid email address.";
    } else if (!values.subject) {
        errors.subject = "Type the email subject.";
    } else if (!values.message) {
        errors.message = "Type your message.";
    }

    return errors;
};

export default validate;
