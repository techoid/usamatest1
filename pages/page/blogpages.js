import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent';
import BlogPost from '../components/blogpost';
import CategoriesBlog from '../components/categoriesblog';
import RecentPosts from '../components/recentposts';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';

function blogpages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent title="On Blog" images={'img_group311.png'} />
            <div class="container-fluid">
                <div class="row on-blog-default-size-margin">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-padding">
                        <div class="container-fluid">
                            <div class="row on-blog-row-check">
                                <BlogPost />
                            </div>
                            <ul class="pagination on-blog-pagination">
                                <li class="page-item on-blog-margin-right-check-15px"><a class="page-link on-blog-atag-check-div" href="#">1</a></li>
                                <li class="page-item on-blog-margin-right-check-15px"><a class="page-link on-blog-atag-check-div" href="#">2</a></li>
                                <li class="page-item on-blog-margin-right-check-15px"><a class="page-link on-blog-atag-check-div" href="#">3</a></li>
                                <li class="page-item on-blog-margin-right-check-15px"><a class="page-link on-blog-atag-check-div" href="#">4</a></li>
                                <li class="page-item on-blog-margin-right-check-15px"><a class="page-link on-blog-atag-check-div" href="#">5</a></li>
                                <li class="page-item on-blog-margin-right-check-15px"><a class="page-link on-blog-border-div" href="#">....</a></li>
                                <li class="page-item on-blog-margin-right-check-15px"><a class="page-link on-blog-atag-check-div" href="#">10</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 on-blog-padding">
                        <div class="container-fluid">
                            <div class="row on-blog-row-check">
                                <CategoriesBlog />
                                <RecentPosts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default blogpages;