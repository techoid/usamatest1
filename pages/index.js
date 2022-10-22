import Header from './components/header';
import FooterTop from './components/footertop';
import Footer from './components/footer';
import HomeComponent from './components/homecomponent';
import SliderBar from './components/sliderbar';
import ProductComponent from './components/productcomponent';
import ProductDetailsComponent from './components/productdetailscomponent';
import GoogleReviewsComponent from './components/googlereviewscomponent';
import BlogComponent from './components/blogcomponent';
import IconComponents from './components/iconcomponents';
import NoificationComponents from './components/noificationcomponents';

function index() {
  return <>
      <Header />
      <FooterTop />
        <section>
          <div class="container-fluid">
            <SliderBar />
            <HomeComponent />
            <ProductComponent />
            <ProductDetailsComponent />
            <GoogleReviewsComponent />
            <BlogComponent />
            <IconComponents />
            <NoificationComponents />
          </div>
        </section>
      <Footer />
      
    </>
};

export default index
