import React from 'react'
import Contact from './images/contact.png'
import Search from './images/search.png'
import Bag from './images/bag.png'





function Navbar() {
    return(
        <div className="apple-nav">
            <div>
                <img className='bitten-apple' src="https://next-js-apple-clone.vercel.app/_next/image?url=https%3A%2F%2Frb.gy%2Fvsvv2o&w=1920&q=75" alt="" />
            </div>
            <div className="navbar-center">
                <h3>MacBook</h3>
                <h3>Apple Watch</h3>
                <h3>iphone</h3>
                <h3>ipad</h3>
            </div>
            <div className='icons'>
                <img src={Contact} alt="" />
                <img src={Search} alt="" />
                <img src={Bag} alt="" />
            </div>
        </div>
    )
}

export default Navbar