const GameImage = ({image, heading,fadeInDelay}) =>{
    return (
        <div className="col-lg-4 col-sm-6 portfolio_item br ux mb_50">
            <div className="portfolio_img wow fadeInLeft" data-wow-delay={`0.${fadeInDelay}s`} >
                <a href={image} className="img_popup"><img className="img_rounded" src={image} /></a>
                <div className="portfolio_description">
                    <a className="portfolio-title">
                        <h3 className="f_500 f_size_20 f_p mt_30">{heading}</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GameImage