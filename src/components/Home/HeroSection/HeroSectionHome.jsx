import React from "react";

const HeroSectionHome = () => {
    return (
        <section className="hero">
            <div className="hero__slider owl-carousel">
                <div className="hero__item set-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="hero__text">
                                    <span>A full stack web developer</span>
                                    <h2>Zohaib's Portfolio</h2>
                                    <a href="#" className="primary-btn">View my work</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSectionHome;
