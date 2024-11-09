import React from 'react';
import gbl from '../photos/gbl.png';
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

function Gblpro() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 3,
    name: 'GBL 18V-750 Professional',
    price: 5490,
    image: gbl
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <>
      <h1 className='detailtophead'>GBL 18V-750 Professional</h1>
      <div className='allprodetail'>
        <div className='detailleft'>
          <div className="detailfit">
            <img className='picoproduct' src={gbl} alt="GBL 18V-750 Professional"/>
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
            <p className='pricedetail'>5,490 Baht</p>
            <button className='btndetail' onClick={handleAddToCart}>
              Add to Cart <AddShoppingCartIcon className="cart-icon" />
            </button>
          </div>
        </div>
        
        <div className='detailright'>
        
        <p className='namedetail'>เครื่องเป่าใบไม้ไร้สาย GBL 18V-750 Professional ทรงพลังด้วยมอเตอร์ไร้แปรงถ่าน BITURBO และพัดลมตามแนวแกนที่ให้ปริมาณอากาศหมุนเวียน 780 ม.³/ชม.และความเร็วลมสูงถึง 198 กม./ชม.
ควบคุมได้เต็มที่ด้วยระบบควบคุมความเร็วแบบปรับได้ที่สามารถเลือกกำลัง ระดับเสียงรบกวน และระยะเวลาการใช้งานให้เหมาะสมกับการทำงานของคุณได้
ออกแบบตามหลักสรีรศาสตร์ ทำงานได้สะดวกไม่เปลืองแรงด้วยดีไซน์น้ำหนักเบาและมีสมดุลที่ดี</p>

        <div className="list-container0" aria-label="mailbox folders">
            <div className="list-item0">
              <span>แรงดันไฟแบตเตอรี่ 18.0 V</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>ความเร็วลมสูงสุด 198 กม./ชม.</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>แรงลมสูงสุด 780 m³/h</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>น้ำหนักไม่รวมแบตเตอรี่ 2.8 กก.</span>
        </div>
      </div>

    </div>

  </div>
  
  <h1 className='procomment'>COMMENT</h1>

  <div className="stack">

    <div className="card">
      <h1 className="title-md">คุณน้อย</h1>
      <p className="body-md">ร้านนี้ของเยอะมาก มีทุกอย่างที่หามานาน แนะนำเลยค่ะ</p>
      <p className="body-sm">15/08/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณจอย</h1>
      <p className="body-md">พนักงานให้คำแนะนำดีมาก ช่วยเลือกของที่เหมาะกับงานได้ดีค่ะ</p>
      <p className="body-sm">22/11/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณต้อม</h1>
      <p className="body-md">สินค้าคุณภาพดี ราคาสมเหตุสมผล คุ้มค่าจริงๆ ครับ</p>
      <p className="body-sm">09/07/2024</p>
    </div>

  
        
      </div>
    </>
  );
}

export default Gblpro;