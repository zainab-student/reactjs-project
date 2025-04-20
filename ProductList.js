import React from "react";
import Product from "./Product.js";

export default function Productlist(props) {
  return props.productList.length>0?(
   props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
        addItem={props.addItem}
      />
    );
  })
  ):(
    <h1>No Products Exists in the Carts.</h1>
  );
}
