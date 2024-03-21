import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__logo">
                                Back to Top
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__social">
                                <a href="https://www.linkedin.com/in/zohaib-khalid-a3624b159/" target="_blank" rel='noreferrer'>
                                    <i className="fa fa-linkedin" />
                                </a>
                                <a href="https://github.com/ZohaibZK" target="_blank" rel='noreferrer'>
                                    <i className="fa fa-github" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__option">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__option__item">
                                <h5>About me</h5>
                                <p>I am a computer engineer from NUST. I currently carry 4+ years of experience in web development. Click the button below to read more.</p>
                                <a href="#" className="read__more">Read more <span className="arrow_right"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="footer__option__item">
                                <h5>My Services</h5>
                                <p>I provide different web services including frontend development, backend development and deployments and much more.</p>
                                <a href="#" className="read__more">View all services <span className="arrow_right"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="footer__option__item">
                                <h5>My Projects</h5>
                                <p>I have 20+ live projects running and I have completed 25+ projects with 10+ happy clients. Click below view my work</p>
                                <a href="#" className="read__more">View all projects <span className="arrow_right"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="footer__option__item">
                                <h5>Contact me</h5>
                                <a href='#' className="primary-btn">Click here</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer__copyright">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p className="footer__copyright__text">Copyright &copy;
                                All rights reserved | This template is made with <i className="fa fa-heart-o"
                                    aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;
