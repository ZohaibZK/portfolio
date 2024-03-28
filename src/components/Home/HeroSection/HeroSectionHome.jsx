import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";

const HeroSectionHome = () => {
    return (
        <section className="hero">
            <div className="hero__item set-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <span>A full stack web developer</span>
                                <h2>Zohaib's Portfolio</h2>
                                <Link to={routes.myProjects} className="primary-btn">View my work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSectionHome;
