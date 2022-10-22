function detailscomponent({ title,images }) {
    const styling = {
        backgroundImage: `url('/assets/images/${images}')`,
    }
    return <>
        <div class="container-fluid">
            <div class="row">
                <div style={styling} class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 top-container">
                    <h1 class="top-heading">{ title }</h1>
                    <h1 class="top-sub-heading"><span class="house-icon"><i class="fa-solid fa-house"></i></span><span class="angle-arrows-icon"><i class="fa-solid fa-angle-right"></i></span><span class="sub-heading">{ title }</span></h1>
                </div>
            </div>
        </div>
    </>
};

export default detailscomponent;