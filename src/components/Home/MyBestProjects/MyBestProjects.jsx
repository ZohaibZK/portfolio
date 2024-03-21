import React from "react";
import { MyBestProjectsData } from "../../../constants/Home";

const MyBestProjects = () => {
    return (
        <section className="team spad set-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title team__title">
                            <span>Have a look</span>
                            <h2>My Best Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        MyBestProjectsData?.map((project, index) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                                    <div className={`team__item ${project.class} set-bg`}>
                                        <img src={project.icon} alt="" />
                                        <div className="team__item__text">
                                            <h4>{project.title}</h4>
                                            <a href={project.link} style={{ color: '#8742c0' }} target="_blank" rel="noreferrer">{project.linkName}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="col-lg-12 p-0">
                        <div className="team__btn">
                            <a href="#" className="primary-btn">View All Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyBestProjects;
