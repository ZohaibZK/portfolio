import React from "react";
import AboutMeOverview from "./OverView/AboutMeOverview";
import AboutAcademics from "./Academics/Academics";
import HonorsAndRewards from "./Honors/HonorsAndRewards";

const AboutMe = () => {
    return (
        <>
            <div class="breadcrumb-option spad set-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                                <h2>About Me</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutMeOverview />
            <AboutAcademics />
            <HonorsAndRewards />
        </>
    )
}

export default AboutMe;
