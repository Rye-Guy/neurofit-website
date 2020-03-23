import React from 'react';

const MainCTABtn = ({button_text, button_href, fat}) => <a href={button_href}  className={fat ? `app_btn btn_hover cus_mb-10 wow fadeIn fat-btn` : `app_btn btn_hover cus_mb-10 wow fadeIn`} data-wow-delay="0.3s" target="_blank">{button_text}</a>

export default MainCTABtn