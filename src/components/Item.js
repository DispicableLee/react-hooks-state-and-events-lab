import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const [addToCart, setAddToCart] = useState("Add to Cart")
  function handleCart(e){
    e.preventDefault()
    setIsInCart(!isInCart)
    setIsAdded(!isAdded)
    if(isAdded === false){
      setIsAdded(!isAdded)
      setAddToCart("Added to cart!")
    }else{
      setAddToCart("Add to cart")
    }
  }
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
        onClick={handleCart}
      >{addToCart}</button>
    </li>
  );
}

export default Item;
