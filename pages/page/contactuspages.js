import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent';
import ContactUsComponent from '../components/contactuscomponent';
import ContactUsFormComponent from '../components/contactusformcomponent';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';
import Script from "next/script";

function contactuspages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent title="Contact Us" images={'img_group531.png'} />
            <Script src="../assets/js/custom.js"/>
            <div class="container-fluid home-default-padding">
                <div class="row contact-us-btn-components-display-flex">
                    <ContactUsComponent />
                    <ContactUsFormComponent />
                </div>
            </div>
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default contactuspages;