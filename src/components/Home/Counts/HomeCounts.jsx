import React from "react";
import { HomeCountData } from "../../../constants/Home";

const HomeCounts = () => {
    return (
        <section className="counter">
            <div className="container">
                <div className="counter__content">
                    <div className="row">
                        {
                            HomeCountData?.map((count, index) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className={`counter__item ${count.class}`}>
                                            <div className="counter__item__text">
                                                <img src={count.icon} alt="" />
                                                <h2 className="counter_num">{count.counts}</h2>
                                                <p>{count.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCounts;
