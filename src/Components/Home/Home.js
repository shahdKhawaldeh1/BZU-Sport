import React from 'react';
import './stylesHome.css' ;
import logo from '../../assets/images/birzeit.jpg';
import Photo from '../../assets/images/sport1.jpg';
import Photo2 from '../../assets/images/sport2.jpg';
import Photo3 from '../../assets/images/sport3.jpg';
import Photo4 from '../../assets/images/sport4.jpg';
import Photo5 from '../../assets/images/sport5.jpg';
import Photo6 from '../../assets/images/sport6.jpg';

export const Home = () => {
  return (
    <>
      <div className="header">
        <div className="d-flex justify-content-center align-items-center">
          <div className="header-content text-center text-white">
            <h1 className="title">Sport and Exercises as BZU SPORT</h1>
            <button className="btn-home">Let's Start</button>
          </div>
        </div>
      </div>
<div className="card-container">
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <p classname="text-front">About BZU Sport</p>
      </div>
      <div className="card-back">
        <img alt="error" src={logo} />
      </div>
    </div>
  </div>
  <div className="text-about">
    <p>
      We are here to foster a vibrant university sports community, offering students unique opportunities for participation and engagement. Our mission extends beyond mere presence; we aim to inspire and support you in achieving your physical and fitness goals throughout your university journey. We provide guidance on a wide range of essential exercises and physical activities, tailored to enhance your overall well-being and enrich your university experience.
    </p>
  </div>
</div>



      <section className="birzeit-section">
        <h3 className="text-birzeit">
          Sport Activities at <span>Birzeit University</span>
        </h3>
        <div className="grid-container">
          {/* Item 1 */}
          <div className="grid-item portfolio-item">
            <div className="portfolio-hover portfolio-hover-content">
              Club Activities
            </div>
            <img className="todo" alt="error" src={Photo} />
          </div>
          {/* Item 2 */}
          <div className="grid-item portfolio-item">
            <div className="portfolio-hover portfolio-hover-content">
              New Activities
            </div>
            <img className="todo" alt="error" src={Photo2} />
          </div>
          {/* Item 3 */}
          <div className="grid-item portfolio-item">
            <div className="portfolio-hover portfolio-hover-content">Tennis</div>
            <img className="todo" alt="error" src={Photo3} />
          </div>
          {/* Item 4 */}
          <div className="grid-item portfolio-item">
            <div className="portfolio-hover portfolio-hover-content">Gaming</div>
            <img className="todo" alt="error" src={Photo4} />
          </div>
          {/* Item 5 */}
          <div className="grid-item portfolio-item">
            <div className="portfolio-hover portfolio-hover-content">Winners</div>
            <img className="todo" alt="error" src={Photo5} />
          </div>
          {/* Item 6 */}
          <div className="grid-item portfolio-item">
            <div className="portfolio-hover portfolio-hover-content">Football</div>
            <img className="todo" alt="error" src={Photo6} />
          </div>
        </div>
      </section>
    </>
  );
};
