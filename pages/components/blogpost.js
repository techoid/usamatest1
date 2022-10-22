import Link from 'next/link';

function blogpost() {
    return <>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div class="on-blog-width-border-radius-one">
                <br />
                <h1 class="on-blog-tabs">Food</h1>
            </div>
            <h1 class="on-blog-heading-font-style"><Link class="on-blog-atag-font-weight" href="/page/blogdetailspages">10 Foods that Speed Up Your Metabolism | VMeals</Link></h1>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div class="on-blog-width-border-radius-two">
                <br />
                <h1 class="on-blog-tabs">Nutrition</h1>
            </div>
            <h1 class="on-blog-heading-font-style"><Link class="on-blog-atag-font-weight" href="/page/blogdetailspages">How Much Protein Do You Need, Daily Protein Requirements</Link></h1>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div class="on-blog-width-border-radius-three">
                <br />
                <h1 class="on-blog-tabs">Vegetarian</h1>
            </div>
            <h1 class="on-blog-heading-font-style"><Link class="on-blog-atag-font-weight" href="/page/blogdetailspages">Is Vegetarian Diet a Better Option for Athletes | VMeals</Link></h1>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-div-check on-blog-padding">
            <div class="on-blog-width-border-radius-four">
                <br />
                <h1 class="on-blog-tabs">Healthy Food</h1>
            </div>
            <h1 class="on-blog-heading-font-style"><Link class="on-blog-atag-font-weight" href="/page/blogdetailspages">Healthy Dinner for Weight Loss, Nutritious Low Calorie Options</Link></h1>
        </div>
    </>
};
  
export default blogpost;