import React from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { HeaderItems } from "../../constants/Header";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                        </div>
                    </div> */}
                    <div className="col-lg-12">
                        <div className="header__nav__option">
                            <nav className="header__nav__menu mobile-menu">
                                <ul>
                                    {
                                        HeaderItems?.map((item, index) => {
                                            return (
                                                <li className={`${window?.location.pathname === item?.route ? 'active' : ''}`} key={index}><Link to={item?.route}>{item?.name}</Link></li>
                                            )
                                        })
                                    }
                                    {/* <li className="active"><a href="./index.html">Home</a></li>
                                    <li><a href="./about.html">About</a></li>
                                    <li><a href="./portfolio.html">Portfolio</a></li>
                                    <li><a href="./services.html">Services</a></li> */}

                                </ul>
                            </nav>
                            <div className="header__nav__social">
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
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
    )
}

export default Header;
