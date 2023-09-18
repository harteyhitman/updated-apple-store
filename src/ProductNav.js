import React from "react";

function ProductNav(){
    const Nav1 = 'ipad'
    const Nav2 = 'iwatch'
    const Nav3 = 'Macbook'
    const Nav4 = 'iphone'
    return(
        <div className="productNav">
            <h3>{Nav1}</h3>
            <h3>{Nav2}</h3>
            <h3>{Nav3}</h3>
            <h3>{Nav4}</h3>
            <div className="line"></div>
        </div>
        
    )
}

export default ProductNav