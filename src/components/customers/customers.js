import React, { Component } from "react";
import Slider from "react-slick";
import './customers.css';

import Image1 from '../../images/customers/image1.png'
import Image2 from '../../images/customers/image2.jpg'
import Image3 from '../../images/customers/image3.jpg'
import Image4 from '../../images/customers/image4.jpeg'
import Image5 from '../../images/customers/image5.png'
import Image6 from '../../images/customers/image6.jpg'
import Image7 from '../../images/customers/image7.jpg'
import Image8 from '../../images/customers/image8.png'
import Image9 from '../../images/customers/image9.png'
import Image10 from '../../images/customers/image10.jpg'
import Image11 from '../../images/customers/image11.png'
import Image12 from '../../images/customers/image12.jpg'
import Image13 from '../../images/customers/image13.png'
import Image14 from '../../images/customers/image14.png'
import Image15 from '../../images/customers/image15.png'
import Image16 from '../../images/customers/image16.jpg'
import Image17 from '../../images/customers/image17.png'
import Image18 from '../../images/customers/image18.jpg'

export default class CustomersSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      speed: 1500,
    //   rtl: false
    };
    return (
      <div className="slide">
        <h2 className="client">Наши клиенты</h2>
        <Slider {...settings}>
          <div>
          <img className="image" src={Image1}></img>
          </div>
          <div>
          <img className="image" src={Image2}></img>
          </div>
          <div>
          <img className="image" src={Image3}></img>
          </div>
          <div>
          <img className="image" src={Image4}></img>
          </div>
          <div>
          <img className="image" src={Image5}></img>
          </div>
          <div>
          <img className="image" src={Image6}></img>
          </div>
          <div>
          <img className="image" src={Image7}></img>
          </div>
          <div>
          <img className="image" src={Image8}></img>
          </div>
          <div>
          <img className="image" src={Image9}></img>
          </div>
          <div>
          <img className="image" src={Image10}></img>
          </div>
          <div>
          <img className="image" src={Image11}></img>
          </div>
          <div>
          <img className="image" src={Image12}></img>
          </div>
          <div>
          <img className="image" src={Image13}></img>
          </div>
          <div>
          <img className="image" src={Image14}></img>
          </div>
          <div>
          <img className="image" src={Image15}></img>
          </div>
          <div>
          <img className="image" src={Image16}></img>
          </div>
          <div>
          <img className="image" src={Image17}></img>
          </div>
          <div>
          <img className="image" src={Image18}></img>
          </div>
        </Slider>
      </div>
    );
  }
}