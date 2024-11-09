import React from 'react';
import { useCart } from './CartContext';

// ฟังก์ชัน formatPrice สำหรับแปลงราคาเป็นรูปแบบที่มีเครื่องหมายคอมม่า
const formatPrice = (price) => {
  return price.toLocaleString('th-TH');;
};

function Checkout() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal } = useCart();

  return (
    <>
      <h1 className='detailtophead'>CHECKOUT</h1>

      <div className='allcheckout'>
        <div className='checkleft'>
          {cartItems.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty</p>
          ) : (
            <ul className="cart-item-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} width={50} />
                  <div className="cart-item-details">
                    <h2 className="cart-item-name">{item.name}</h2>
                    <p className="cart-item-price">{formatPrice(item.price)} BAHT</p>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <p>Total: {formatPrice(item.price * item.quantity)} BAHT</p>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                    ลบสินค้า
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* แสดงราคาทั้งหมด */}
          {cartItems.length > 0 && (
            <div className="total-price">
              <h3>Total Price: {formatPrice(calculateTotal())} BAHT</h3>
            </div>
          )}
        </div>

        <div className='checkright'>
          <div className="checkout-container1">
            <div className="express-checkout">
              <h2>Express checkout</h2>
              <div className="payment-buttons">
                <button className="shop-pay">Prompt Pay</button>
                <button className="amazon-pay">Amazon Pay</button>
                <button className="apple-pay">Apple Pay</button>
                <button className="paypal">PayPal</button>
              </div>
            </div>

            <div className="divider">OR CONTINUE BELOW TO PAY WITH A CREDIT CARD</div>

            <div className="contact-header">
              <h2>Contact information</h2>
              <div className="login-link">
                Already have an account? <a href="#">Log in</a>
              </div>
            </div>

            <form className="checkout-form">
              <div className="form-group">
                <input type="email" placeholder="Email" />
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Email me with news and offers</span>
                </label>
              </div>

              <div className="shipping-address">
                <h2>Shipping address</h2>
                <div className="name-group">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="Company (required for business addresses)" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" />
                <input type="text" placeholder="City" />
                
                <div className="location-group">
                  <select className="country">
                    <option>United States</option>
                  </select>
                  <select className="state">
                    <option>State</option>
                  </select>
                  <input type="text" placeholder="ZIP code" />
                </div>
                
                <input type="tel" placeholder="Phone (optional)" />
              </div>

              <button type="submit" className="submit-button">
                CONTINUE TO SHIPPING
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
