import React from "react";
import useContactForm from "./useContactForm";
import validate from "./validation";
import { toast } from "react-toastify";

const ContactForm = () => {

    const { handleChange, values, getErrors, errors } = useContactForm(validate);

    const handleSubmit = (e) => {
        e.preventDefault();

        getErrors(e);
        const validateErrors = validate(values);
        let isValid = true;
        Object.keys(validateErrors).forEach((key) => {
            if (validateErrors[key]) {
                toast.error(`${validateErrors[key]}`)
                isValid = false;
            }
        });

        if (isValid) {
            toast.success('he')
        }
    }

    return (
        <section className="contact spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact__form">
                            <h3>Get in touch</h3>
                            <form onSubmit={handleSubmit}>
                                <input name="name" value={values.name} onChange={handleChange} type="text" placeholder="Name" />
                                <input name="email" value={values.email} onChange={handleChange} type="text" placeholder="Email" />
                                <input name="subject" value={values.subject} onChange={handleChange} type="text" placeholder="Website" />
                                <textarea name="message" value={values.message} onChange={handleChange} placeholder="Message"></textarea>
                                <button type="submit" className="site-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;
