import React from "react";

const ContactWidget = () => {
    return (
        <section className="contact-widget spad">
            <div className="container" style={{ marginTop: '40px' }}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-md-6 col-md-3">
                        <div className="contact__widget__item">
                            <div className="contact__widget__item__icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="contact__widget__item__text">
                                <h4>Address</h4>
                                <p>Lahore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-md-6 col-md-3">
                        <div className="contact__widget__item">
                            <div className="contact__widget__item__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="contact__widget__item__text">
                                <h4>Whatsapp • Mobile</h4>
                                <p><span>+92-305-4170880</span> • <span>+92-318-5263566</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-md-6 col-md-3">
                        <div className="contact__widget__item">
                            <div className="contact__widget__item__icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact__widget__item__text">
                                <h4>Email</h4>
                                <p>zohaibkhalid2198@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactWidget;
