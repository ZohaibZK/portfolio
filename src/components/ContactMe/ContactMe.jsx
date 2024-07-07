import React from "react";
import ContactWidget from "./Widget/ContactWidget";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
    return (
        <>
            <div class="breadcrumb-option spad set-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                                <h2>Contact Me</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactWidget />
            <ContactForm />
        </>
    )
}

export default ContactMe;
