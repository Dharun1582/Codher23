import React from 'react';
import styles from './Home.module.css';

function Home() {

  return (
   <>
    <div className={`${styles.flexcontainer}`}>
      <div className={`${styles.flexitemleft}`}>
        <div>CODHER LOGO</div>
        <div className={`${styles.content}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Eget sit amet tellus cras adipiscing enim. Eleifend donec pretium vulputate sapien nec sagittis aliquam.
        </div>
        <div>
        <span><button className={`${styles.btn}`}><span>Register</span></button></span>
        
        <span className={`${styles.prev}`}>Pre events  <img src='/assets/downarrow.png' className={`${styles.darr}`}/></span>
        </div>
      </div>
      <div className={`${styles.flexitemright}`}>
        <img src='/assets/Codehergirl.png' />
      </div>
    </div>
   </>
  )
}

export default Home;
