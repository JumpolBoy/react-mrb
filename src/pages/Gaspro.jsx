import React from 'react';
import gas from '../photos/gas.png';
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

function Gaspro() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 4,
    name: 'GAS 12-25 PL Professional',
    price: 9420,
    image: gas
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <>
      <h1 className='detailtophead'>GAS 12-25 PL Professional</h1>
      <div className='allprodetail'>
        <div className='detailleft'>
          <div className="detailfit">
            <img className='picoproduct' src={gas} alt="GAS 12-25 PL Professional"/>
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
            <p className='pricedetail'>9,420 Baht</p>
            <button className='btndetail' onClick={handleAddToCart}>
              Add to Cart <AddShoppingCartIcon className="cart-icon" />
            </button>
          </div>
        </div>
        
        <div className='detailright'>
        
        <p className='namedetail'>เครื่องดูดฝุ่น/ดูดน้ำ GAS 12-25 PL Professional เทคโนโลยีการทำความสะอาดตัวกรองของบ๊อชที่จดสิทธิบัตรแล้ว ช่วยให้มีแรงดูดสม่ำเสมอและไม่ต้องทำความสะอาดตัวกรองบ่อยครั้ง
ตัวกรอง H13 HEPA สามารถกรองอนุภาคฝุ่นละเอียด (ขนาด &gt; 0.3 ไมครอน) ได้ถึง 99.95%
เพิ่มอายุการใช้งานของตัวกรองหลักด้วยตัวกรองขั้นต้นที่มีพื้นผิวขนาดใหญ่</p>

        <div className="list-container0" aria-label="mailbox folders">
            <div className="list-item0">
              <span>กำลังไฟสูงสุด
              1,250 W</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>น้ำหนัก
              9 กก.</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>ปริมาตรความจุ (สุทธิ)
              21 ล.</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>แรงดันไฟฟ้า (ไฟฟ้า)
              230 V</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>กำลังไฟ
              1,250 W</span>
            </div>
      </div>

    </div>

  </div>
  
  <h1 className='procomment'>COMMENT</h1>

  <div className="stack">

    <div className="card">
      <h1 className="title-md">คุณโต</h1>
      <p className="body-md">อุปกรณ์ครบครัน ราคาดี บริการก็ดีด้วยครับ ชอบมาก!</p>
      <p className="body-sm">04/03/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณตาล</h1>
      <p className="body-md">ร้านสะดวก มีทุกอย่างที่ต้องการ จะกลับมาซื้ออีกแน่นอนครับ</p>
      <p className="body-sm">17/02/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณยุซุป</h1>
      <p className="body-md">ร้านมีทุกอย่างที่ต้องการ พนักงานก็ดูแลดี ราคาเหมาะสมสุดๆ ครับ</p>
      <p className="body-sm">18/06/2024</p>
    </div>

  
        
      </div>
    </>
  );
}

export default Gaspro;