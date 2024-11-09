import React from 'react'

function navbar() {
  return (
    <>

    <header>

    <div className="mrb">
      <a href="/">MR.B</a>
    </div>

    <ul className="nav">
        <div className="listbar"><a href="/">Home</a></div>
        <div className="listbar"><a href="/products">Product</a></div>
        <div className="listbar"><a href="/checkout">Checkout</a></div>
    </ul>

    </header>

    </>
  );
}

export default navbar