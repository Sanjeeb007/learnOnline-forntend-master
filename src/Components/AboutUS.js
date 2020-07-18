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
                    <span class="text-link lead">LearnOnline Nepal is one of the best e-Learning website in
                        Nepal.</span>
                    <p class="lead">Online Education Nepal is a web-based e-learning platform that aims to provide
                     easily accessible digital technological 
                    education at the click of your fingertips to a larger public 
                    with the content in native language Online Distance Learning is much more than 
                    just taking classes over the Internet.  It's really about bringing "anytime, anywhere"
                     learning directly to YOU regardless of your age, academic or social background.
                    </p>
                    <p class="lead">Learning is not limited to schools and universities anymore as you 
                    have access to all types of learning resources online. Most of the online learning 
                    resources are completely free to use and some even provide verified certificates for 
                    a tiny fee. You can choose to either learn some general lessons or check out actual 
                    university courses. However, it can be a bit tedious to search for high-quality learning 
                    resources when there are so many websites. To solve this problem, we have created this list 
                    of top learning websites. It contains the most popular and reliable learning resources. So, if you are 
                    interested in improving your skills, here are the 35 best websites to learn something new.
                    </p>
                    <ul class="list_marker lead">
                        <li>Best price guarantee.</li>
                        <li>No cancellation or amendment fees.</li>
                        <li>No hidden extras to pay - theft and damage cover included.</li>
                    </ul>
                </div>
               
               <div class="col-md-6">
                    <img src="images/learn.jpg" class="img-fluid" alt="sideimage"></img>
                    <img src="images/learnn.jpg" class="img-fluid" alt="sideimage"></img>
                    <img src="images/learnnn.jpg" class="img-fluid" alt="sideimage"></img>
                </div>
             </div>
</div>

<section class="info-box_with-background">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="display-4 text-center">Why Choose Us</h1>
                        <p class="dislay-5 text-center text-primary">Committed to give student a delightful renting
                            experience</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="block-icon">
                            <p class="lead"><i class="fas fa-check-double"></i> Lower fee</p>
                            <p class="display-5">Visit your selected locations with ease and at your pace with a cheap
                                learning site in Nepal. </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="block-icon">
                            <p class="lead"><i class="fas fa-check-double"></i> Study anywhere, any time</p>
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
                        <h1 class="display-4 text-center">Start your learning planning here</h1>
                        <p class="display-5 text-center text-primary">Most FutureLearn courses run multiple times. Every run of a course 
                        has a set start date but you can join it and work through it after it starts.</p>
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
