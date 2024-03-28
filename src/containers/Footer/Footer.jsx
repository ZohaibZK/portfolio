import React from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { FooterItems } from "../../constants/Footer";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            {/* <div className="footer__top__logo">
                                Back to Top
                            </div> */}
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
                        {
                            FooterItems.map((item, index) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                                        <div className="footer__option__item">
                                            <h5>{item.name}</h5>
                                            <p>{item.description}</p>
                                            <Link to={item.route}
                                                className={`${index === 3 ? 'primary-btn' : "read__more"}`}>{item.linkName}
                                                {
                                                    index !== 3 &&
                                                    <span className="arrow_right" />
                                                }
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
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
