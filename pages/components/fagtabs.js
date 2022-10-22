import FaqsAccordion from '../components/faqsaccordion';

function fagtabs() {
    return <>
        <h1 class="faq-us-heading faq-us-row-col-check">FREQUENTLY ASKED QUESTIONS</h1>
        <div class="faq-us-image-background-image"></div>
        <ul class="nav nav-pills mb-3 faq-us-heading-components-display faq-us-row-col-ul" id="pills-tab" role="tablist">
            <li class="nav-item faq-us-div-components-display" role="presentation">
                <button class="nav-link faq-us-components-two faq-us-font-family active" id="pills-aboutus-tab" data-bs-toggle="pill" data-bs-target="#pills-aboutus" type="button" role="tab" aria-controls="pills-aboutus" aria-selected="true">About Us</button>
            </li>
            <li class="nav-item faq-us-div-components-display" role="presentation">
                <button class="nav-link faq-us-components-two faq-us-font-family" id="pills-getstarted-tab" data-bs-toggle="pill" data-bs-target="#pills-getstarted" type="button" role="tab" aria-controls="pills-getstarted" aria-selected="false">Get Started</button>
            </li>
            <li class="nav-item faq-us-div-components-display" role="presentation">
                <button class="nav-link faq-us-components-two faq-us-font-family" id="pills-nutritionconsultation-tab" data-bs-toggle="pill" data-bs-target="#pills-nutritionconsultation" type="button" role="tab" aria-controls="pills-nutritionconsultation" aria-selected="false">Nutrition Consultation</button>
            </li>
            <li class="nav-item faq-us-div-components-display" role="presentation">
                <button class="nav-link faq-us-components-two faq-us-font-family" id="pills-mealplan-tab" data-bs-toggle="pill" data-bs-target="#pills-mealplan" type="button" role="tab" aria-controls="pills-mealplan" aria-selected="false">Meal Plan</button>
            </li>
            <li class="nav-item faq-us-div-components-display" role="presentation">
                <button class="nav-link faq-us-components-two faq-us-font-family" id="pills-payment-tab" data-bs-toggle="pill" data-bs-target="#pills-payment" type="button" role="tab" aria-controls="pills-payment" aria-selected="false">Payment</button>
            </li>
            <li class="nav-item faq-us-div-components-display" role="presentation">
                <button class="nav-link faq-us-components-two faq-us-font-family" id="pills-lifestyle-tab" data-bs-toggle="pill" data-bs-target="#pills-lifestyle" type="button" role="tab" aria-controls="pills-lifestyle" aria-selected="false">Lifestyle</button>
            </li>
            <li class="nav-item faq-us-div-components-display" role="presentation">
                <button class="nav-link faq-us-components-two faq-us-font-family" id="pills-assistance-tab" data-bs-toggle="pill" data-bs-target="#pills-assistance" type="button" role="tab" aria-controls="pills-assistance" aria-selected="false">Assistance</button>
            </li>
        </ul>
        <div class="tab-content faq-us-tabs-contents faq-us-row-col-check" id="pills-tabContent">
            <div class="tab-pane fade show active faq-us-tab-pane" id="pills-aboutus" role="tabpanel" aria-labelledby="pills-aboutus-tab">
                <FaqsAccordion />
            </div>
            <div class="tab-pane fade faq-us-tab-pane" id="pills-getstarted" role="tabpanel" aria-labelledby="pills-getstarted-tab">
                <FaqsAccordion />
            </div>
            <div class="tab-pane fade faq-us-tab-pane" id="pills-nutritionconsultation" role="tabpanel" aria-labelledby="pills-nutritionconsultation-tab">
                <FaqsAccordion />
            </div>
            <div class="tab-pane fade faq-us-tab-pane" id="pills-mealplan" role="tabpanel" aria-labelledby="pills-mealplan-tab">
                <FaqsAccordion />
            </div>
            <div class="tab-pane fade faq-us-tab-pane" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab">
                <FaqsAccordion />
            </div>
            <div class="tab-pane fade faq-us-tab-pane" id="pills-lifestyle" role="tabpanel" aria-labelledby="pills-lifestyle-tab">
                <FaqsAccordion />
            </div>
            <div class="tab-pane fade faq-us-tab-pane" id="pills-assistance" role="tabpanel" aria-labelledby="pills-assistance-tab">
                <FaqsAccordion />
            </div>
        </div>
      </>
  };
  
  export default fagtabs;