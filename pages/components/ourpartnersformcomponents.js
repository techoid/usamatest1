import Script from "next/script";

function ourpartnersformcomponents() {
    return <>
        <Script src="../assets/js/custom.js"/>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 our-partners-btn-components-display-width">
            <div class="contact-us-section-div-button">
                <h1 class="contact-us-section-button-heading-bottom">Register your Company</h1>
                <form action="" method="POST" enctype="multipart/form-data">
                    <div class="row contact-us-section-button-margin-bottom">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 our-partners-check-padding">
                            <div class="contact-us-section-button-flex-column">
                                <label class="contact-us-section-button-label" for="firstname">First Name <span class="contact-us-section-button-span">*</span></label>
                                <input class="contact-us-heading-input" type="text" name="firstname" id="firstname" placeholder="Enter your first name..." />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 our-partners-check-margin our-partners-check-padding">
                            <div class="contact-us-section-button-flex-column">
                                <label class="contact-us-section-button-label" for="lastname">Last Name <span class="contact-us-section-button-span">*</span></label>
                                <input class="contact-us-heading-input" type="text" name="lastname" id="lastname" placeholder="Enter your last name..." />
                            </div>
                        </div>
                    </div>
                    <div class="row contact-us-section-button-margin-bottom">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 our-partners-check-padding">
                            <div class="contact-us-section-button-flex-column">
                                <label class="contact-us-section-button-label" for="emailaddress">Email Address <span class="contact-us-section-button-span">*</span></label>
                                <input class="contact-us-heading-input" type="text" name="emailaddress" id="emailaddress" placeholder="Enter your email address...." />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 our-partners-check-margin our-partners-check-padding">
                            <div class="contact-us-section-button-flex-column">
                                <label class="contact-us-section-button-label" for="mobilenumber">Mobile Number <span class="contact-us-section-button-span">*</span></label>
                                <div class="select-items-flex-display">
                                    <div class="custom-select-check select-check-items-flex-display-width-20">
                                        <select id="mobilenumbercode" name="mobilenumbercode">
                                            <option value="0">+971</option>
                                            <option value="1">+971</option>
                                            <option value="2">+971</option>
                                            <option value="3">+971</option>
                                            <option value="4">+971</option>
                                            <option value="5">+971</option>
                                        </select>
                                    </div>
                                    <div class="select-check-items-flex-display-width-80">
                                        <input class="contact-us-heading-input contact-us-heading-border-top-left-radius" type="text" name="mobilenumber" id="mobilenumber" placeholder="Enter your mobile number...." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row contact-us-section-button-margin-bottom">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 our-partners-check-padding">
                            <div class="contact-us-section-button-flex-column">
                                <label class="contact-us-section-button-label" for="companyname">Company Name <span class="contact-us-section-button-span">*</span></label>
                                <input class="contact-us-heading-input" type="text" name="companyname" id="companyname" placeholder="Enter your company name..." />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 our-partners-check-margin our-partners-check-padding">
                            <div class="contact-us-section-button-flex-column">
                                <label class="contact-us-section-button-label" for="designation">Designation <span class="contact-us-section-button-span">*</span></label>
                                <input class="contact-us-heading-input" type="text" name="designation" id="designation" placeholder="Enter your designation..." />
                            </div>
                        </div>
                    </div>
                    <div class="row contact-us-section-button-margin-bottom">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 our-partners-check-margin our-partners-check-padding">
                            <div class="contact-us-section-button-flex-column">
                                <label class="contact-us-section-button-label-two" for="email">Message <span class="contact-us-section-button-span">*</span></label>
                                <textarea id="message" name="message" rows="6" cols="50" class="contact-us-heading-input" type="text" placeholder="Type your message..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row contact-us-section-button-margin-bottom">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 our-partners-check-margin our-partners-check-padding">
                            <center><input class="btn btn-primary contact-us-section-button-components-title-row-col" type="button" name="button-submit" value="Submit" id="button-submit" /></center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
};

export default ourpartnersformcomponents;