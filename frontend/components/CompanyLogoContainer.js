import React from 'react';

const CompanyLogoContainer = ({url}) =>{
    return (
        <div className="col-lg-2 col-md-3 col-4">
            <a href="#"><img src={url}/></a>
        </div>
    )
}

export default CompanyLogoContainer