import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent';
import OurPartnersComponents from '../components/ourpartnerscomponents';
import OurPartnersFormComponents from '../components/ourpartnersformcomponents';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';
import Script from "next/script";


function contactuspages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent title="Our Partners" images={'img_group905.png'} />
            <Script src="../assets/js/custom.js"/>
            <div class="container-fluid home-default-padding">
                <div class="row contact-us-btn-components-display-flex">
                    <OurPartnersComponents />
                    <OurPartnersFormComponents />
                </div>
            </div>
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default contactuspages;