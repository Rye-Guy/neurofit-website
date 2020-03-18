import React from 'react';
import MainCTABtn from './MainCTABtn.js';

const FeatureItem = ({reverse, image, heading, paragraph, button_text, button_href})=>{
    return (
        <div className={reverse ? 'row s_features_item s_features_item_two flex-row-reverse mt_100' : 'row s_features_item'}>
            <div className="col-lg-6">
                <div className={reverse ? 's_features_img wow fadeInRight' : 's_features_img wow fadeInLeft'} data-wow-delay="0.3s" style={{textAlign: 'center'}}>
                    <img src={image} alt={""}/>
                </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
                <div className="s_features_content pl_120">
                    <div className={reverse ? 'icon_square wow fadeInLeft' : "icon_square wow fadeInRight"} data-wow-delay="0.2s">
                        <i className="ti-eye"></i>
                    </div>
                    <h2 className={reverse ? 'f_p f_size_30 f_700 t_color l_height45 wow fadeInLeft' : 'f_p f_size_30 f_700 t_color l_height45 wow fadeInRight'} data-wow-delay="0.4s">{heading}</h2>
                    <p className={reverse ? 'f_size_18 l_height30 f_400 wow fadeInLeft' : 'f_size_18 l_height30 f_400 wow fadeInRight'} data-wow-delay="0.5s">{paragraph}</p>
                    {/* <a className={reverse ? 'learn_btn wow fadeInLeft' : 'learn_btn wow fadeInRight'}  data-wow-delay="0.6s">Request a demo!<i className="ti-arrow-right"></i></a> */}
                    <MainCTABtn fat={false} button_text={button_text} button_href={button_href}></MainCTABtn>
                </div>
            </div>
        </div>
    )
}

export default FeatureItem