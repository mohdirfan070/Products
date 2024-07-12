import React from 'react'
import CartTop from '../components/CartTop'
import { useState } from "react";
import Product from '../components/Product.jsx'
export default function Cart() {

    let[products,setProducts]=useState(null);
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>{
       setProducts([...json]);
    });

  return <>
    <CartTop />
    <div className="list flex flex-wrap p-2 bg-slate-400 m-12">
          {
              (products)?(
                  products.map((ele,index) => (
                      <Product key={index} name={ele.title} img={ele.image} price={ele.price} />
                    ))
                ): <h1>Rukre Bhai Loading...</h1>
            }
          </div>
            </>
}
