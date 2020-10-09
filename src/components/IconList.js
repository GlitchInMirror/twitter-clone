import React from "react";


const IconList = ({classname, src, alt, titleName})=>{
    return(
        <div className={classname}>
            <img src={src} alt={alt} />

            <h4>{titleName}</h4>
        </div>
    )
}

export default IconList;