import React from 'react'


function Overflow(props) {
    return(
        
        <div className="overflow">
            <div className='products'>
                <img className='pro-img' src={props.img} alt="" />
                <h2>{props.text}</h2>
                <h2>${props.price}</h2>
                <img className='cart' src={props.cart} alt="" />

            </div>
            
        </div>
    )
}

export default Overflow