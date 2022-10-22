import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import FagTabs from '../components/fagtabs';
import DetailsComponent from '../components/detailscomponent';
import GoogleReviewsComponent from '../components/googlereviewscomponent';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';

function contactuspages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent title="FAQ" images={'img_group466.png'} />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 faq-us-btn-components-display-width-two faq-us-row-col">
                        <FagTabs />
                    </div>
                </div>
            </div>
            <GoogleReviewsComponent />
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default contactuspages;