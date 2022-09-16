import React from "react";
import { NavLink } from "react-router-dom";


const Services = () => {

    return(
        <div className="services_page">
            <h1 className="head text-center my-3">This is Services Page</h1>
            <div class="card" style={{width: "18rem"}}>
                <img src="https://picsum.photos/id/237/500/300" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Services;