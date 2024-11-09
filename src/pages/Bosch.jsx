import React from 'react';
import bosch from '../photos/bosch.png';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../App.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const labels = {
  4.5: 'Excellent'
};

function Bosch() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: 'GSR 12-2-LI BOSCH',
    price: 7890,
    image: bosch
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <>
      <h1 className='detailtophead'>GSR 12-2-LI BOSCH</h1>
      <div className='allprodetail'>
        <div className='detailleft'>
          <div className="detailfit">
            <img className='picoproduct' src={bosch} alt={product.name} />
          </div>
          <Box sx={{ width: 200, display: 'flex', alignItems: 'center', margin: 'auto'}}>
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
          <div className='proinfo'>
            <p className='pricedetail'>7,890 Baht</p>
            <button className='btndetail' onClick={handleAddToCart}>
              Add to Cart <AddShoppingCartIcon className="cart-icon" />
            </button>
          </div>
        </div>
        
        <div className='detailright'>
        
        <p className='namedetail'>สว่าน/ไขควงไฟฟ้าไร้สาย GSR 12-2-LI BOSCH ไขควงขนาดกะทัดรัดและทรงพลังที่สุดในกลุ่มเดียวกัน สว่าน/ไขควงไฟฟ้าไร้สายจากบ๊อชไม่เพียงทรงพลัง แต่ยังสร้างมาตรฐานใหม่ในด้านความแข็งแกร่ง อีกทั้งยังโดดเด่นในด้านน้ำหนักเบาและระยะเวลาใช้งานแบตเตอรี่ที่ยาวนาน ระบบแบตเตอรี่ที่ยืดหยุ่นทำให้คุณสามารถใช้แบตเตอรี่และเครื่องชาร์จกับเครื่องมือรุ่นใดก็ได้ที่มีแรงดันไฟฟ้าในระดับเดียวกัน</p>

        <div className="list-container0" aria-label="mailbox folders">
            <div className="list-item0">
              <span>แรงดันไฟแบตเตอรี่	12 V</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>แรงบิด (เบา/หนัก/สูงสุด)	15/30/- Nm</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>ความเร็วรอบขณะเดินเครื่องเปล่า (เกียร์ 1/เกียร์ 2)	0 – 400 / 0 – 1.300 รอบ/นาที</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>ขนาดของหัวจับดอก, ต่ำสุด/สูงสุด	1 / 10 มม.</span>
        </div>
      </div>

    </div>

  </div>
  
  <h1 className='procomment'>COMMENT</h1>

  <div className="stack">

    <div className="card">
      <h1 className="title-md">คุณสมชาย</h1>
      <p className="body-md">ใช้งานดีมากครับ เบาแรงและแบตเตอรี่อึดจริงๆ คุ้มราคา!</p>
      <p className="body-sm">15/01/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณอร</h1>
      <p className="body-md">สินค้าคุณภาพเยี่ยม จับถนัดมือ ใช้งานง่ายค่ะ ประทับใจมาก</p>
      <p className="body-sm">05/06/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณตัน</h1>
      <p className="body-md">แบตทนดี ใช้สะดวก ประกอบงานเสร็จเร็วขึ้นเยอะ แนะนำเลยครับ</p>
      <p className="body-sm">31/01/2024</p>
    </div>

  
        
      </div>
    </>
  );
}

export default Bosch;
