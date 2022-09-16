import React from "react";

const Sresult = (props) => {

    const img = `https://source.unsplash.com/random/?${props.name}`;

    return(
        <>
        <div>
            <img src={img} alt="preview" className="img_size"/>
        </div>
        </>
    );
}

export default Sresult;