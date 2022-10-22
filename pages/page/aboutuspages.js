import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent';
import AboutUsDetails from '../components/aboutusdetails';
import AboutUsPlan from '../components/aboutusplan';
import GoogleReviewsComponent from '../components/googlereviewscomponent';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';

function aboutuspages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent title="About Us" images={'img_maskgroup_558X1920.png'} />
            <AboutUsDetails />
            <div class="faq-us-image-background-image"></div>
            <div class="container-fluid about-us-container-fluid">
                <div class="row">
                    <AboutUsPlan />
                </div>
            </div>
            <br />
            <br />
            <GoogleReviewsComponent />
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default aboutuspages;