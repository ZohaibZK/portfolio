import React from "react";
import { MyAcadamics } from "../../../constants/AboutMe";

const AboutAcademics = () => {
    return (
        <section className="about spad">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-6">
                        <div className="about__pic">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="about__pic__item about__pic__item--large set-bg"
                                        data-setbg="img/about/about-1.jpg"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="about__pic__item set-bg" data-setbg="img/about/about-2.jpg"></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="about__pic__item set-bg" data-setbg="img/about/about-3.jpg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-12">
                        <div className="about__text">
                            <div className="section-title">
                                {/* <span>Acam</span> */}
                                <h2>Academics</h2>
                            </div>
                            <div className="row">
                                {
                                    MyAcadamics?.map((instiution, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="services__item">
                                                    <div className="services__item__icon">
                                                        {/* <i className="fal fa-school" /> */}
                                                        <img src={instiution.icon} alt="" style={{ filter: 'invert(100%' }} width="50px" height="50px" />
                                                    </div>
                                                    <h4>{instiution.education}</h4>
                                                    <p>{instiution.institution}</p>
                                                    <p>{instiution.city}</p>
                                                    <p>{instiution.duration}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAcademics;
