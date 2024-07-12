import React, { useState } from "react";


export default function Product(prop) {
  let [quantity, setQuantity] = useState(1);
  let [isAdded, setIsAdded] = useState(false);
  return (
    <>
   
      <div className="card h-max w-80  relative border-2 bg-violet-200  m-2 p-2  flex-auto">
        <h1>Name:{prop.name}</h1>   <p className="font-semibold">${prop.price}</p>
        <img
          className="aspect-square object-scale-down max-w-64 "
          src={prop.img}
          alt="ProductImg"
        />
      
        {isAdded ? (
          <>
            <div className="relative bottom-0 mx-8 my-1">
              <button
                className="w-6 text-white bg-slate-500 rounded-full border-black"
                onClick={() => {
                  quantity > 1 ? setQuantity(quantity - 1) : setIsAdded(false);
                }}
              >
                -
              </button>
              <p className="w-12 text-center text-orange-600 inline-block">{quantity}</p>
              <button
                className="w-6 text-white bg-slate-500 rounded-full border-black"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => {
              setIsAdded(true);
              
            }}
            className="bg-orange-300 block p-1 relative bottom-0 mx-8 my-1"
          >
            Add to cart
          </button>
        )}
      </div>
    </>
  );
}
