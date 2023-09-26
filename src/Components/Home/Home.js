import React from 'react';
import './styles.css'; 
import  Photo  from "../../assets/images/sport1.jpg"
import Photo2 from "../../assets/images/sport2.jpg"
 import Photo3 from "../../assets/images/sport3.jpg"
 import Photo4  from "../../assets/images/sport4.jpg"
 import Photo5 from "../../assets/images/sport5.jpg"
 import Photo6 from "../../assets/images/sport6.jpg"

export const Home = () => {
  return (<>

<div className="header">
    <div className='d-flex justify-content-center align-items-center'>
      <div className='header-content text-center text-white'>
        <h1 className='title'>Sport and Exercises as BZU SPORT</h1>
        
        <button className='btn-home' >Let's Start</button> {/* Add the btn-home class */}

      </div>
    </div>
  </div>
<section className="birzeit-section">
  <h3 className="text-birzeit"> Sport Activties Birzeit University</h3>
  <div className="grid-container">
    {/*item 1*/}
    <div className="grid-item portfolio-item">
      <div className="portfolio-hover portfolio-hover-content">Club Activities</div>
      <img className="todo" alt="error" src={Photo} />
    </div>
    {/*item 2*/}
    <div className="grid-item portfolio-item">
      <div className=" portfolio-hover portfolio-hover-content">New Activities</div>
      <img className="todo" alt="error" src={Photo2} />
    </div>
    {/*item 3*/}
    <div className="grid-item portfolio-item">
      <div className=" portfolio-hover portfolio-hover-content">Tennis</div>
      <img className="todo" alt="error" src={Photo3} />
    </div>
    {/*item 4*/}
    <div className="grid-item portfolio-item">
      <div className="portfolio-hover portfolio-hover-content">Gaming</div>
      <img className="todo" alt="error" src={Photo4} />
    </div>
    {/*item 5*/}
    <div className="grid-item portfolio-item">
      <div className="portfolio-hover portfolio-hover-content"> Winners</div>
      <img className="todo" alt="error" src={Photo5} />
    </div>
    {/*item 6*/}
    <div className="grid-item portfolio-item">
      <div className=" portfolio-hover portfolio-hover-content">Football</div>
      <img className="todo" alt="error" src={Photo6} />
    </div>
  </div>
</section>

  </>
   

 
  )
}
