import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import './slider.css'

import Slide1 from '../../images/slider/slide1.jpg'
import Slide2 from '../../images/slider/slide2.jpg'
import Slide3 from '../../images/slider/slide3.jpg'
import Slide4 from '../../images/slider/slide4.jpg'

class ImageSlider extends Component {
    render(){
        return(
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={4}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
              // ride={true}
            >
            <MDBCarouselInner>

              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="First slide"
                  />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Первый слайд</h3>
                  <p>First text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={Slide2}
                    alt="Second slide"
                  />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Второй слайд</h3>
                  <p>Second text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={Slide3}
                    alt="Third slide"
                  />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Третий слайд</h3>
                  <p>Third text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={Slide4}
                    alt="Fourth slide"
                    width="100%"
                  />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Четвертый слайд</h3>
                  <p>Fourth text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>

            </MDBCarouselInner>
          </MDBCarousel>
          </MDBContainer>
        );
    }
}

export default ImageSlider;