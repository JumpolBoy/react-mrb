import React from 'react'
import handcraft from './photos/handcraft.png'
import { Link } from 'react-router-dom';
import bosch from './photos/bosch.png'
import gks from './photos/gks.png'
import gas from './photos/gas.png'
import gbl from './photos/gbl.png'
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product1 = {
    id: 1,
    name: 'สว่าน/ไขควงไฟฟ้าไร้สาย GSR 12-2-LI BOSCH',
    price: 7890,
    image: bosch
  };

  const product2 = {
    id: 2,
    name: 'GKS 18V-44 Professional',
    price: 3850,
    image: gks
  };

  const product3 = {
    id: 3,
    name: 'GBL 18V-750 Professional',
    price: 5490,
    image: gbl
  };

  const product4 = {
    id: 4,
    name: 'GAS 12-25 PL Professional',
    price: 9420,
    image: gas
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <>

      <h1 className='tophead'>Welcome to MR.B – Your ultimate destination for high-quality tools and equipment designed for craftsmen and DIY enthusiasts.</h1>
      
      
      <div className='allproduct'>
    
      <div className='product1'>
        <Link to="/bosch">
          <div className="photofit">
            <img className='pico1' src={bosch} alt="สว่านไฟฟ้าไร้สาย GSR 12-2-LI" />
          </div>
        </Link>
          <p className='namepro'>สว่านไฟฟ้าไร้สาย GSR 12-2-LI</p>
          <p className='pricepro'>7,890 บาท</p>
          <button className='btnpro' onClick={() => handleAddToCart(product1)}>Add to Cart</button>
        </div>

        <div className='product1'>
        <Link to="/gkspro">
          <div className="photofit">
            <img className='pico2' src={gks} alt="เลื่อยวงเดือน GKS 18V-44" />
          </div>
        </Link>
          <p className='namepro'>เลื่อยวงเดือน GKS 18V-44</p>
          <p className='pricepro'>3,850 บาท</p>
          <button className='btnpro' onClick={() => handleAddToCart(product2)}>Add to Cart</button>
        </div>

        <div className='product1'>
        <Link to="/gblpro">
          <div className="photofit">
            <img className='pico3' src={gbl} alt="เครื่องเป่าใบไม้ GBL 18V-750" />
          </div>
        </Link>
          <p className='namepro'>เครื่องเป่าใบไม้ GBL 18V-750</p>
          <p className='pricepro'>5,490 บาท</p>
          <button className='btnpro' onClick={() => handleAddToCart(product3)}>Add to Cart</button>
        </div>

        <div className='product1'>
        <Link to="/gaspro">
          <div className="photofit">
            <img className='pico4' src={gas} alt="เครื่องดูดฝุ่น/ดูดน้ำ GAS 12-25 PL" />
          </div>
        </Link>
          <p className='namepro'>เครื่องดูดฝุ่น GAS 12-25 PL</p>
          <p className='pricepro'>9,420 บาท</p>
          <button className='btnpro' onClick={() => handleAddToCart(product4)}>Add to Cart</button>
        </div>

      </div>
      
      <img className='handpico' src={handcraft} alt="HandCraft" />
      
    </>
  )
}

export default Home