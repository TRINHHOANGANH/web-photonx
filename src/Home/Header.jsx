import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>HOANGANH</span>
          </a>
          <span>PHOTONX</span>
        </h1>
      </div>
    </header>
  );
}
