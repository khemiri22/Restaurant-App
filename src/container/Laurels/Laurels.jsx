import React from 'react';
import {images,data} from '../../constants'
import {SubHeading} from '../../components'
import './Laurels.css';


const AwardCard=(props)=>(
  <div className='app__laurels-awards_card'>
    <img src={props.award.imgUrl} alt="award"/>
    <div className='app__laurels-awards_card-content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{props.award.title}</p>
      <p className='p__opensans'>{props.award.subtitle}</p>
    </div>
  </div>
)


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels-awards'>
        {data.awards.map((award,index)=><AwardCard key={index} award={award}/>)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurels'></img>
    </div>
  </div>
);

export default Laurels;
