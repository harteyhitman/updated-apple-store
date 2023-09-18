import React from 'react'

function Main() {
    // const bold1 = 'Powered'
    const bold2 = 'By Intellect'
    const bold3 = 'Driven By Values'
    

    return(
        <div className='main'>
            <div className="info-details">
                <span className='span'>
                <span style={{color: '#EA489A'}}><h1>P</h1></span>
                <span style={{color: '#DF4BA5'}}><h1>o</h1></span>
                <span style={{color: '#D94CAB'}}><h1>w</h1></span>
                <span style={{color: '#D04DB3'}}><h1>e</h1></span>
                <span style={{color: '#CB4FB8'}}><h1>r</h1></span>
                <span style={{color: '#C850BC'}}><h1>e</h1></span>
                <span style={{color: '#BC52C7'}}><h1>d</h1></span>
                </span>
                
               <h1><span className='info2'>{bold2}</span></h1>
               <h1><span className='info3'>{bold3}</span></h1>
               
                <div className="button-link">
                    <button>Buy Now</button>
                    <button className="learnmore">Learn More</button>
                </div>
            </div>
            <div className="iphone-image">
                <img className='three-cameras' src="https://next-js-apple-clone.vercel.app/_next/image?url=%2Fiphone.png&w=1920&q=75" alt="" />
            </div>
        </div>
    )
}

export default Main