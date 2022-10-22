import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const OwlCarousel = dynamic(import("react-owl-carousel"), {
ssr: false,
});

const Resposnive = {
    0:{
        items:1,
        margin: 5,
    },
    600:{
        items:1,
        margin: 10,
    },
    768:{
        items:2,
        margin: 10,
    },
    820:{
        items:2,
        margin: 10,
    },
    992:{
        items:4,
        margin: 20,
    },
    1200:{
        items:4,
        margin: 20,
    },
}

function googlereviewscomponent() {
    return <>
        <div class="row home-google-reviews-api-border-row">
            <div class="home-background-color home-google-reviews-api-border-width">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1 class="home-review-star-heading"><span class="home-review-star-one">G</span><span class="home-review-star-two">o</span><span class="home-review-star-three">o</span><span class="home-review-star-four">g</span><span class="home-review-star-five">l</span><span class="home-review-star-six">e</span><span class="home-review-star-heading-small">Rating</span></h1>
                        <div>
                            <span class="home-review-star-number">4.9</span>
                            <i class="fa-solid fa-star home-review-star-color"></i>
                            <i class="fa-solid fa-star home-review-star-color"></i>
                            <i class="fa-solid fa-star home-review-star-color"></i>
                            <i class="fa-solid fa-star home-review-star-color"></i>
                            <i class="fa-regular fa-star home-review-star-border"></i>
                            <span class="home-review-star-reviews">170 Reviews</span>
                        </div>
                        
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 home-review-row">
                        <a href="#" class="btn btn-primary home-btn-components home-btn-components-color">Write a Review</a>
                    </div>
                </div>
            </div>
            <div class="home-background-color-two home-google-reviews-api-border-width">
                <div class="row">
                    <OwlCarousel className='owl-theme' loop={true} nav={false} dots={true} autoplay={true} autoplayTimeout={5000} autoplaySpeed={5000} autoplayHoverPause={false}
                    responsive={Resposnive}>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div class="home-google-reviews-api-border-postion">
                                    <div>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                        <i class="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p class="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p class="home-section-two-heading-four"><a class="home-section-two-atag" href="#">Read More</a></p>
                                    <div class="home-google-reviews-api-div">
                                        <div class="home-google-reviews-api-div-width">
                                            <img class="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                            <p class="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div class="home-google-reviews-api-div-width">
                                        <img class="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 class="home-google-reviews-api-heading">Posted On</h1>
                                        <p class="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> 
                </div>
            </div>
        </div>
      </>
};
  
  export default googlereviewscomponent;