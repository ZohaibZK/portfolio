import { useState } from "react";

const useContactForm = validate => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const getErrors = e => {
        e.preventDefault();
        setErrors(Object.assign({}, validate(values)));
    };

    return { handleChange, values, getErrors, errors };
};

export default useContactForm;
