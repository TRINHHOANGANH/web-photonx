import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import BannerImage from './BannerImage';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-banner',
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
              Photonx, AI in your life
            </h1>
            <p key="p">Let me show you my AI-integrated applications.</p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                window.location.href = '/activity/home';
              }}
              >
                Get started
              </Button>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
