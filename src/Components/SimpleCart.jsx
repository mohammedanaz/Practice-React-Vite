import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'

export default function SimpleCart() {
    const [carts, setCarts] = useState([])
const products = [
    {id:1, name:'prod-1', price:100},
    {id:2, name:'prod-2', price:200},
    {id:3, name:'prod-3', price:300}
]

useEffect(()=>{
    console.log('Cart is- ', carts);
},[carts])

function ProductsPage(){
    function handleAddCart(id){
        const newProduct = products.find(product=> product.id === id)
        setCarts([...carts, newProduct])
    };
    return (
        <div>
            <h1>Product Page</h1>
            <hr />
            <div className='row'>
            {
                products.map(product=>(
                    <div key={product.id} className='col-md-4'>
                        <h1>{product.name}</h1>
                        <h2>{product.id}</h2>
                        <h3>{product.price}</h3>
                        <br />
                        <button onClick={()=> handleAddCart(product.id)}>
                            Add to cart
                        </button>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

function CartPage(){
    return (
        <div>
            <h1>Cart Page</h1>
            <hr />
            <div className='row'>
            {
                carts.map(cart=>(
                    <div key={cart.id} className='col-md-4'>
                        <h1>{cart.name}</h1>
                        <h2>{cart.id}</h2>
                        <h3>{cart.price}</h3>
                    </div>
                ))
            }
        </div>
        </div>
    )
}
    
  return (
    <BrowserRouter>
        <div>
            <nav>
                <Link to='/' className='me-2'>Products</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </div>
        <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  )
}
