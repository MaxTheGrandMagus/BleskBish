import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class Footer extends Component {
    render(){
        return(
            <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
            <div style={{ backgroundColor: "#4EA3DA" }}>
                <MDBContainer fluid className="text-center text-md-left">
                <MDBRow className="py-4 d-flex align-items-center">
                    <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0 white-text">
                        Свяжитесь с нами в социальных сетях!
                    </h6>
                    </MDBCol>
                    <MDBCol md="6" lg="7" className="text-center text-md-right">
                    <a className="fb-ic ml-0" href="https://web.facebook.com/Bleskbishkg/?_rdc=1&_rdr">
                        <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                    </a>
                    <a className="tw-ic">
                        <i className="fab fa-twitter white-text mr-lg-4"> </i>
                    </a>
                    <a className="gplus-ic">
                        <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                    </a>
                    <a className="li-ic">
                        <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                    </a>
                    <a className="ins-ic" href="https://www.instagram.com/bleskbishkg/">
                        <i className="fab fa-instagram white-text mr-lg-4"> </i>
                    </a>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
            <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Блеск</strong>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "260px" }} />
                    <p>
                    Мы выполнили за 8 лет 1500 заказов для частных домохозяйств и бизнеса. Мы гордимся своей работой.
                    </p>
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Услуги</strong>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "160px" }} />
                    <p>
                    <a href="#!">Для дома</a>
                    </p>
                    <p>
                    <a href="#!">Для бизнеса</a>
                    </p>
                    <p>
                    <a href="#!">Другие услуги</a>
                    </p>
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Полезные ссылки</strong>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "160px" }} />
                    <p>
                    <a href="#!">Контакты</a>
                    </p>
                    <p>
                    <a href="#!">Новости</a>
                    </p>
                    <p>
                    <a href="#!">О нас</a>
                    </p>
                    <p>
                    <a href="#!">Вакансии</a>
                    </p>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className="mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <strong>Контакты</strong>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "250px" }} />
                    <p>
                    <i className="fa fa-home mr-3" /> Бишкек, Байтик Баатыра 46
                    </p>
                    <p>
                    <i className="fa fa-envelope mr-3" /> blesk.bish@gmail.com
                    </p>
                    <p>
                    <i className="fa fa-phone mr-3" /> 0703 288 000
                    </p>
                    <p>
                    <i className="fa fa-phone mr-3" /> 0772 669 235
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#"> КЛИНИНГОВАЯ КОМПАНИЯ "БЛЕСК" </a>
                </MDBContainer>
            </div>
            </MDBFooter>
        );
    }
}