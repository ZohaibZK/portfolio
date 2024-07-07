import React from "react";
import { QualificationsData, TechnicalDatabases, TechnicalLanguages, TechnicalSoftwares } from "../../../constants/AboutMe";

const AboutMeOverview = () => {
    return (
        <section className="about-description-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{ paddingBottom: '40px' }}>
                        {/* <h2 style={{ color: '#00bfe7', fontWeight: '700', textAlign: 'center', marginBottom: '15px' }}>About Me</h2> */}
                        <p className="about-description-paragraph">
                            I am Muhammad Zohaib Khalid, a Computer Engineer from NUST. I carry 4+ years of experience for frontend development. I have worked on many projects ranging from portfolio websites to web3 projects including AI projects as well. I am currently working as a Team Lead and Frontend Developer.
                        </p>
                    </div>
                    <div className="col-md-12" style={{ paddingBottom: '40px' }}>
                        <h2 style={{ color: '#00bfe7', fontWeight: '700', textAlign: 'center', marginBottom: '15px' }}>
                            EXPERIENCE SUMMARY
                        </h2>
                        <ul style={{ color: 'white', paddingLeft: '20px' }}>
                            {
                                QualificationsData?.map((qualification, index) => {
                                    return (
                                        <li key={index}>
                                            {qualification}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-12" style={{ paddingBottom: '40px' }}>
                        <h2 style={{ color: '#00bfe7', fontWeight: '700', textAlign: 'center', marginBottom: '15px' }}>
                            TECHNICAL SKILLS
                        </h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{ paddingBottom: '40px' }}>
                        <h4 style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: '15px' }}>
                            LANGUAGES
                        </h4>
                        <ul style={{ color: '#adadad', paddingLeft: '120px' }}>
                            {
                                TechnicalLanguages?.map((language, index) => {
                                    return (
                                        <li key={index}>{language}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{ paddingBottom: '40px' }}>
                        <h4 style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: '15px' }}>
                            DATABASES
                        </h4>
                        <ul style={{ color: '#adadad', paddingLeft: '125px' }}>
                            {
                                TechnicalDatabases?.map((database, index) => {
                                    return (
                                        <li key={index}>{database}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{ paddingBottom: '40px' }}>
                        <h4 style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: '15px' }}>
                            SOFTWARE TOOLS
                        </h4>
                        <ul style={{ color: '#adadad', paddingLeft: '90px' }}>
                            {
                                TechnicalSoftwares?.map((softwareTools, index) => {
                                    return (
                                        <li key={index}>{softwareTools}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeOverview;
