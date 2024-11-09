import React from 'react';
import gks from '../photos/gks.png';
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

function Gkspro() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 2,
    name: 'GKS 18V-44 Professional',
    price: 3850,
    image: gks
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <>
      <h1 className='detailtophead'>GKS 18V-44 Professional</h1>
      <div className='allprodetail'>
        <div className='detailleft'>
          <div className="detailfit">
            <img className='picoproduct' src={gks} alt="GKS 18V-44 Professional" />
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
            <p className='pricedetail'>3,850 Baht</p>
            <button className='btndetail' onClick={handleAddToCart}>
              Add to Cart <AddShoppingCartIcon className="cart-icon" />
            </button>
          </div>
        </div>
        
        <div className='detailright'>
        
        <p className='namedetail'>เลื่อยวงเดือนไร้สาย GKS 18V-44 Professional เคลื่อนย้ายได้อย่างอิสระและทำการตัดง่ายไม่เปลืองแรง
ลดความเมื่อยล้าขณะตัดด้วยมอเตอร์ไร้แปรงถ่าน 18V
พกพาง่ายและใช้งานสะดวกด้วยรูปทรงกะทัดรัดและมือจับออกแบบตามหลักสรีรศาสตร์
ช่วยป้องกันฝุ่นด้วยช่องระบบดูดฝุ่นที่ออกแบบให้มีประสิทธิภาพยิ่งขึ้น
เริ่มและหยุดการทำงานได้อย่างง่ายดายด้วยระบบเริ่มการทำงานอย่างนุ่มนวลและฟังก์ชั่นเบรก
มองเห็นแนวตัดได้ชัดเจนด้วยฟังก์ชั่นเป่าฝุ่น
มาพร้อมไฟ LED ช่วยให้มองเห็นได้ชัดเจนแม้ในมุมแคบ</p>

        <div className="list-container0" aria-label="mailbox folders">
            <div className="list-item0">
              <span>ความเร็วรอบขณะเดินเครื่องเปล่า 5,800 – 6,300 รอบ/นาที</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>เส้นผ่าศูนย์กลางของรูใบเลื่อย 20 มม.</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>น้ำหนักไม่รวมแบตเตอรี่ 2.1 กก.</span>
            </div>
            <div className="divider0" />
            <div className="list-item0">
              <span>BITURBO - ไม่ใช่</span>
        </div>
      </div>

    </div>

  </div>
  
  <h1 className='procomment'>COMMENT</h1>

  <div className="stack">

    <div className="card">
      <h1 className="title-md">คุณหมิว</h1>
      <p className="body-md">ประทับใจร้านนี้ ของครบ แถมราคาไม่แพงอย่างที่คิดค่ะ</p>
      <p className="body-sm">13/03/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณพีท</h1>
      <p className="body-md">อุปกรณ์พร้อมใช้งานดีมาก บริการรวดเร็ว พนักงานน่ารักครับ</p>
      <p className="body-sm">25/12/2024</p>
    </div>

    <div className="card">
      <h1 className="title-md">คุณแพท</h1>
      <p className="body-md">เจอของที่ต้องการทุกครั้งที่มา ไม่ผิดหวังเลยค่ะ</p>
      <p className="body-sm">02/04/2024</p>
    </div>

  
        
      </div>
    </>
  );
}

export default Gkspro;
