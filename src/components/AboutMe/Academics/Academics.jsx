import React from "react";

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
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <i className="fa-light fa-school"/>
                                            {/* <img src="img/icons/si-3.png" alt="" /> */}
                                        </div>
                                        <h4>Video distribution</h4>
                                        <p>Whether you’re halfway through the editing process, or you.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="img/icons/si-4.png" alt="" />
                                        </div>
                                        <h4>Video hosting</h4>
                                        <p>Whether you’re halfway through the editing process, or you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about__text__desc">
                                <p>Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service
                                    production company specializing in commercial, broadcast, tourism & action sport video
                                    production services has been featured.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAcademics;
