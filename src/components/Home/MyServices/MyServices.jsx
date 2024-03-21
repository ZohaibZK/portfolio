import React from "react";
import { MyHomeServices } from "../../../constants/Home";

const MyServicesHome = () => {
    return (
        <section className="services spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="services__title">
                            <div className="section-title">
                                <span>My Services</span>
                                <h2>What I do?</h2>
                            </div>
                            <p>
                                Are you looking to bring your ideas to life on the web? Whether it's creating beautiful and intuitive user interfaces or building the behind-the-scenes magic that makes everything work seamlessly, I've got you covered.</p>
                            <p>
                                Whether you're a business looking to establish your online presence or an entrepreneur with a game-changing idea, let's work together to turn your vision into reality—no tech jargon required!
                            </p>
                            <a href="#" className="primary-btn">View all services</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {
                                MyHomeServices?.map((service, index) => {
                                    return (
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="services__item">
                                                <div className="services__item__icon">
                                                    <img src={service.icon} alt="" style={{ filter: 'invert(1)' }} width={40} />
                                                </div>
                                                <h4>{service.name}</h4>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyServicesHome;
