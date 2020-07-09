import React, { Component } from 'react';
//import Slide from './Slide';
import { Container } from 'reactstrap';
import Header from './Header';

class AboutUS extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        return (
            <Container>
      <Header></Header>
      <div class="container-fluid registercon bg-light mt-1">
      <div class="row">
                <div class="col-md-6">
                    <h1 class="display-4">Company Overview</h1>
                    <span class="text-link lead">Pharping Rental is one of the leading vehicle rental companies in
                        Nepal.</span>
                    <p class="lead">Rent a vehicle in Nepal and benefit from low prices, professional service and a
                        great range of comfortable new vehicles. And with our vehicle rental stations in Nepal located
                        exactly where you need them most – in city centers, airports– you'll be hitting the road in no
                        time, whether travelling for business or pleasure. Rent a vehicle in Nepal with Truevalue Rental
                        today and find the perfect rental car or bus for your needs, while enjoying the added peace of
                        mind that comes with a name you can trust. Rent a vehicle with us .It's easy to book your
                        vehicle rental in Nepal with Truevalue Rental. Just use our simple three-step booking process to
                        find your ideal rental in no time.
                    </p>
                    <p class="lead">We aim to keep things quick and easy for our customers while offering great
                        every-day low prices car rental. So whether you're looking for a family rental, an eco-friendly
                        vehicle or a bus hire, pay us a visit at rental station and enjoy fast and friendly service. The
                        Green Program Here at Truevalue Renal, we believe what’s good for the Earth is good for our
                        drivers. That's why we work hard to understand the environmental impact of what we do.
                    </p>
                    <ul class="list_marker lead">
                        <li>Best price guarantee.</li>
                        <li>No cancellation or amendment fees.</li>
                        <li>No hidden extras to pay - theft and damage cover included.</li>
                    </ul>
                </div>
               
               <div class="col-md-6">
                    <img src="images/aboutus.jpg" class="img-fluid" alt="sideimage"></img>
                    <img src="images/ab2.jpg" class="img-fluid" alt="sideimage"></img>
                    <img src="images/test.jpg" class="img-fluid" alt="sideimage"></img>
                </div>
             </div>
</div>

<section class="info-box_with-background">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="display-4 text-center">Why Choose Us</h1>
                        <p class="dislay-5 text-center text-primary">Committed to give customer a delightful renting
                            experience</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="block-icon">
                            <p class="lead"><i class="fas fa-check-double"></i> Express pick-up service available</p>
                            <p class="display-5">Visit your selected locations with ease and at your pace with a cheap
                                rental vehicle in Nepal. </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="block-icon">
                            <p class="lead"><i class="fas fa-check-double"></i> Short and long term car rental</p>
                            <p class="display-5">Whether you're looking for a short-term rental to tour Nepal or a
                                month-long rent-a-vehicle solution. </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="block-icon">
                            <p class="lead"><i class="fas fa-check-double"></i> New, comfortable rental car fleet</p>
                            <p class="display-5">Visit your selected locations with ease and at your pace with a cheap
                                rental car in Nepal. </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="block-icon">
                            <p class="lead"><i class="fas fa-check-double"></i> Award winning car rental company</p>
                            <p class="display-5">There's definitely no reason to beg, and borrow or steal a vehicle when
                                renting a vehicle in Nepal. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row info-box">
                <div class="col-sm-12">
                    <article>
                        <h1 class="display-4 text-center">Start your travel planning here</h1>
                        <p class="display-5 text-center text-primary">Drive away with more money in your pockets and
                            more time on your itinerary.</p>
                        <p class="text-center">
                            <button type="button" class="btn-success ml-3">
                                <a href="mailto:truevaluerentals977@gmail.com" class="btn text-dark">EMAIL US</a>
                            </button>
                        </p>
                    </article>
                </div>
            </div>
        </div>
        <div class="container mx-auto bg-light">
            <section class="site-footer__top-panel">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-4">
                            <div class="top-panel__info">
                                <i class="fas fa-ban"></i>
                                <strong>Free cancellation</strong>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="top-panel__info">
                                <i class="far fa-money-bill-alt"></i>
                                <strong>Cash on pickup</strong>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="top-panel__info">
                                <i class="fas fa-phone"></i>
                                <strong>24/7 Call Center</strong>
                            </div>
                        </div>
                    </div>
                </div>
</section>
</div>
   </Container>
        );
    }
}


export default AboutUS;
