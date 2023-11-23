import React from 'react';
import { footer } from './data';

function antCloudFooter() {
  const children = footer.map((item, i) => (<div key={i}><a href={item.src}>{item.text}</a></div>));
  return (<div>
    <div className="logo" key="logo">
      <img src="http://drive.google.com/uc?id=14_vDq3EcxBWXwk3pfvkSTlCOHs9Q_W4T" width="72" height="82" />
    </div>
    <div key="nav" className="home-footer-nav-wrapper">
      {children}
    </div>
  </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">Copyright@ 2023 trinhhoanganh0510@gmai.com</p>
      </div>
    </div>
  );
}

export default Footer;
