import React from 'react';

const MainCTABtn = ({button_text, button_href}) => <a href={button_href} className="app_btn btn_hover cus_mb-10 wow fadeIn" data-wow-delay="0.6s" target="_blank">{button_text}</a>

export default MainCTABtn