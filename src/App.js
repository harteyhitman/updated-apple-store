

// function App() {
//   const title = 'Blog Post'
//   const Body = 'This is my blog post'
//   const Comments = [
//     {id: 1, text: 'Comment one'},
//     {id: 2, text: 'Comment two'},
//     {id: 3, text: 'Comment three'}
//   ]
//   const loading  = true

//   if (!loading) return <h1>loading....</h1>

//   return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>
//       <p>{Body}</p>
//       <div className="comments">
//         <h3>Comments({Comments.length})</h3>
//         <ul>
//           {Comments.map((comment, index)=>(
//               <li key={index}>{comment.text}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
    
//   )
// }


// export default App;
import React from 'react'
import Navbar from './Navbar'
import './App.css'
import Main from './Main'
import Overflow from './Overflow'
import Product from './ProductHeader'
import ProductNav from './ProductNav'
import Cart from './images/cart.png'



function App() {
  return(
    <div>
        <Navbar /> 
        <Main />
        <Product />
        <ProductNav />
        <div className='container'>
          <Overflow img="https://next-js-apple-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4c5cbu6f%2Fproduction%2F4e7120ab903087632c8952197be0ca967d44e824-497x502.png&w=1920&q=75" text="ipad mini X" price="1999" cart={Cart}/>
          <Overflow img="https://next-js-apple-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4c5cbu6f%2Fproduction%2F1a20f64319137217bf8ca936aba51448336ea8a0-940x1112.png&w=1920&q=75" text="ipad pro 12" price="2999" cart={Cart}/>
          <Overflow img="https://next-js-apple-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4c5cbu6f%2Fproduction%2F948c6c97d890f13d56059b1adb3e58cc55193eaf-940x1112.png&w=1920&q=75" text="ipad Air" price="799" cart={Cart}/>
        </div>
        <div className="container2">
          <Overflow img="https://next-js-apple-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4c5cbu6f%2Fproduction%2Fbe6c1d8c403a35691e70af6a01e454dd810811f3-468x533.png&w=1920&q=75" text="ipad Air" price="599" cart={Cart}/>
          <Overflow img="https://next-js-apple-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4c5cbu6f%2Fproduction%2Fe682a128da109c6376e382bc4a326da005863ead-500x500.png&w=1920&q=75" text="ipad Pro 11" price="599" cart={Cart}/>
          <Overflow img="https://next-js-apple-clone.vercel.app/_next/image?url=https%3A%2F%2Frb.gy%2Fvsvv2o&w=1920&q=75" text="Apple" price="699" cart={Cart}/>
          </div>
    </div>
  )
}

export default App