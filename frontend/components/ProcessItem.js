import React from 'react';

const ProcessItem = ({reverse, image, icon, heading, paragraph}) =>{
    return(
        <div style={{paddingBottom: '96px', marginTop: '0'}} className={reverse ? 'row agency_featured_item mt-0 flex-row-reverse' : 'row agency_featured_item agency_featured_item_two'}>
          <div className="col-md-6">
            <div className={reverse ? 'agency_featured_img wow fadeInRight' : 'agency_featured_img mb-80 wow fadeInLeft'} data-wow-delay="0.4">
                <img src={image.toString()} alt="" />
            </div>
          </div>
          <div className="col-md-6">
              <div className={reverse ? 'agency_featured_content pr_70 pl_70 wow fadeInLeft' : 'agency_featured_content pr_70 pl_70 wow fadeInRight'}  data-wow-delay="0.4">
                    <img className="number" src={icon.toString()} alt=""/>
                    <h3>{heading}</h3>
                    <p>{paragraph}</p>
              </div>
          </div>
        </div>
    )
}

export default ProcessItem