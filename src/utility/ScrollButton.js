import React, { useState } from 'react'
import {FiArrowUp} from 'react-icons/fi'
const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
      
      return (
        <button  style={{display: visible ? 'inline' : 'none'}}  className='fixed bottom-10 right-10 rounded-full  bg-green-600 p-2 text-white'>
         <FiArrowUp onClick={scrollToTop} className=""
        />
        </button>
      );
}

export default ScrollButton