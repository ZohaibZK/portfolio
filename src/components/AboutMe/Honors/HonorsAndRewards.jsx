import React from "react";
import { MyHonorsAndRewards } from "../../../constants/AboutMe";
import './honorAndRewards.css';

const HonorsAndRewards = () => {
    return (
        <section className="testimonial spad set-bg">
            <div className="overlay"></div> {/* Add the overlay div */}
            <div className="container-honor">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-honor center-title">
                            <h2 className="honor-title">Honors & Rewards</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {MyHonorsAndRewards?.map((honor, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="testimonial__item">
                                <div className="testimonial__text">
                                    <h4><strong>{honor.name}</strong></h4>
                                    <p>Issued By: <strong>{honor.issuedBy}</strong></p>
                                    <p>{honor.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HonorsAndRewards;
