import React from "react";
import Breadcrumb from "../common/Breadcrumb";

import heroImg from '../../assets/img/hero/hero-1.jpg'
import MyServicesHome from "./MyServices/MyServices";
import HomeCounts from "./Counts/HomeCounts";
import MyBestProjects from "./MyBestProjects/MyBestProjects";
import HeroSectionHome from "./HeroSection/HeroSectionHome";

const Home = () => {
    return (
        <>
            {/* <Breadcrumb /> */}
            {/* <div id="preloder">
                <div className="loader"></div>
            </div> */}
            <HeroSectionHome />
            <MyServicesHome />
            <HomeCounts />
            <MyBestProjects />
        </>
    )
}

export default Home;
