import React from 'react';
import logo from './images/logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Logo() {
    return <img src={logo}
                height={300}
                width={350}
                alt="Logo" />;
}

export default Logo;