import React, {Component, Fragment} from 'react';
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Slide1 from '../../images/slider/slide1.jpg'
import Slide2 from '../../images/slider/slide2.jpg'
import Slide3 from '../../images/slider/slide3.jpg'
import Slide4 from '../../images/slider/slide4.jpg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", right: "1%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", left: "1%" }}
        onClick={onClick}
      />
    );
  }

class ImageSlider extends Component {
    render(){
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return(
            <Slider {...settings}>
                <div>
                    <center><img src={Slide1} width="90%" height="50%"></img></center>
                </div>
                <div>
                    <center><img src={Slide2} width="90%" height="50%"></img></center>
                </div>
                <div>
                    <center><img src={Slide3} width="90%" height="50%"></img></center>
                </div>
                <div>
                    <center><img src={Slide4} width="90%" height="50%"></img></center>
                </div>
            </Slider>
        );
    }
}

export default ImageSlider;