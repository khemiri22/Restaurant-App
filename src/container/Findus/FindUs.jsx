import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components'
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact' >
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant'>Find Us</h1>
      <div className='app__wrapper-content'>
      <p className='p__opensans' style={{color:"#AAA",marginTop:"4rem"}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className='p__cormorant' style={{color:"#DCCA87",marginTop:"2rem"}}>Opening Hours</p>
      <p className='p__opensans' style={{marginTop:"1rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className='p__opensans' style={{marginTop:"1rem"}}>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop:"3rem"}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
