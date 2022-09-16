import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {

    const[img, setimg] = useState(" ")

    const inputEvent = (event) => {
        setimg(event.target.value);
    }

    return(
        <>
        <div className="Search_page">
            <h1>This is Search Page</h1>
        
            <div className="main">
                <input type="text" onChange={inputEvent} placeholder="Search Anything" value={img}/>
                <button>Go</button>
            </div>
            {img === " " ? null : <Sresult name={img}/>}

        </div>
        </>
    )
}

export default Search;