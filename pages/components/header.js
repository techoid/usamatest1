import Link from 'next/link';
import Script from "next/script";

function header() {
    return <>
        <link rel="stylesheet" href="../assets/css/menu.css" />
        <Script src="../assets/js/menu.js"/>
        <div class="desktop">
            <header class="header-first-div mobile-responsize-continer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="header-div">
                                <div class="header-padding-left">
                                    <ul class="header-ul">
                                        <li class="header-li header-li-padding-right">
                                        <Link class="header-a faq-us-nav-menu" href="/">Home</Link>
                                        </li>
                                        <li class="header-li header-li-padding-right">
                                            <Link class="header-a faq-us-nav-menu" href="/page/aboutuspages">About Us</Link>
                                        </li>
                                        <li class="header-li header-li-padding-right">
                                            <div class="dropdown">
                                                <a class="header-a dropbtn">Our Plans <i class="fa-solid fa-angle-down"></i></a>
                                                <div class="dropdown-content">
                                                    <Link class="a-first faq-us-nav-menu" href="/page/seopages">SEO Page-1</Link>
                                                    <Link class="a-middle faq-us-nav-menu" href="/page/seopages">SEO Page-2</Link>
                                                    <Link class="a-last faq-us-nav-menu" href="/page/seopages">SEO Page-3</Link>
                                                    <Link class="a-last faq-us-nav-menu" href="/page/contactuspages">Contact Us</Link>
                                                    <Link class="a-last faq-us-nav-menu" href="/page/ourpartners">Our Partners</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="header-li header-li-padding-right">
                                            <a class="header-a faq-us-nav-menu" href="#">Neet Assistance?</a>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div class="header-logo">
                                    <img class="header-img" src="/assets/images/img_vmealslogoori.png" alt="No-Image"/>
                                </div>
                                <div class="header-padding-right">
                                    <ul class="header-ul">
                                        <li class="header-li header-li-padding-right">
                                            <Link class="header-a faq-us-nav-menu" href="/page/blogpages">Blog</Link>
                                        </li>
                                        <li class="header-li header-li-padding-right-second">
                                            <a class="header-a faq-us-nav-menu" href="#">Arabic</a>
                                            <span> / </span>
                                            <a class="header-a faq-us-nav-menu" href="#">English</a>
                                        </li>
                                        <li class="header-li">
                                            <a  class="btn btn-primary header-btn-components header-btn-components-color"><Link href="/page/contactuspages">Get Started</Link></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="mobile">
            <header class="header-first-div mobile-responsize-continer">
                <div class="container-fluid mobile-responsize-continer">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mobile-responsize-padding">
                            <nav id='cssmenu' class="mobile-responsize-continer">
                                <div class="logo"><Link href="/"><img class="image-heading-view" src="/assets/images/img_vmealslogoori.png" alt="No-Image" /></Link></div>
                                <div id="head-mobile" class="mobile-responsize-head-mobile"></div>
                                <div class="button"></div>
                                <ul class="mobile-responsize-display-none">
                                    <li class='active mobile-responsize-active mobile-responsize-atag'><Link class="heading-font-family mobile-responsize-atag" href='/'>Home</Link></li>
                                    <li><Link class="heading-font-family" href='#'>About Us</Link></li>
                                    <li><Link class="heading-font-family" href='#'>Our Plans</Link>
                                        <ul>
                                            <li><Link class="heading-font-family" href='/page/seopages'>SEO Page-1</Link></li>
                                            <li><Link class="heading-font-family" href='/page/seopages'>SEO Page-2</Link></li>
                                            <li><Link class="heading-font-family" href='/page/seopages'>SEO Page-3</Link></li>
                                            <li><Link class="heading-font-family" href='/page/contactuspages'>Contact Us</Link></li>
                                            <li><Link class="heading-font-family" href='/page/ourpartners'>Our Partners1</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href='#'>Neet Assistance?</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
      </>
  };
  
  export default header;