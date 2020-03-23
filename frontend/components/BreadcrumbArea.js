const BreadcrumbArea = ({image, heading, paragraph}) => {
    return (
        <section className="breadcrumb_area">
            <img className="breadcrumb_shap" src={image} alt=""/>
            <div className="container">
                <div className="breadcrumb_content text-center">
                    <h1 className="f_p f_700 f_size_50 w_color l_height50 wow fadeIn" data-wow-delay="0.4s">{heading}</h1>
                    {/* <p className="f_400 w_color f_size_16 l_height26 wow fadeIn" data-wow-delay="0.9s">{paragraph}</p> */}
                </div>
            </div>
        </section>
    )
}

export default BreadcrumbArea