import React from 'react';
import pic01 from '../../../Images/slider/img1.jpg'
import pic02 from '../../../Images/slider/img2.jpg'
import pic03 from '../../../Images/slider/img3.jpg'
import pic04 from '../../../Images/slider/img4.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <div id="Slider">
            <div className="start">
                <div className="text-item">
                    <button className="btn-skewX">
                        <p>The All New</p>
                    </button>
                    <h1>The Beautiful Car</h1>
                    <p>High Performance Outstanding
                        Technology Combined</p>


                    <div style={{ marginTop: '10px' }} className="line "></div>
                    <div className="line margin-left"></div>


                </div>
                <div className="pic-wrapper">
                    <figure className="pic-1" style={{ animationDelay: '0s' }}><img src={pic01} alt="" />
                    </figure>
                    <figure className="pic-2" style={{ animationDelay: '10s' }}><img src={pic02} alt="" />
                    </figure>
                    <figure className="pic-2" style={{ animationDelay: '20s' }}><img src={pic03} alt="" />
                    </figure>
                    <figure className="pic-2" style={{ animationDelay: '30s' }}><img src={pic04} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Slider;