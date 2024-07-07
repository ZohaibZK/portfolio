import React from "react";
import { MyServices } from "../../../constants/MyServices";

const ServicesData = () => {
    return (
        <>
            <section class="services-page spad">
                <div class="container">
                    <div class="row">
                        {
                            MyServices?.map((service, index) => {
                                return (
                                    <div class="col-lg-4 col-md-6 col-sm-6">
                                        <div class="services__item">
                                            <div class="services__item__icon" >
                                                <img src={service.icon} alt="" style={{ filter: 'invert(1)' }} width={40}/>
                                            </div>
                                            <h4>{service.name}</h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesData;
