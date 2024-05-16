import React from 'react';

interface TjdLogoProps {
  size?: string; // Size can be 'small', 'medium', 'large', or any custom CSS size
}

const TjdLogo: React.FC<TjdLogoProps> = ({ size = 'medium' }) => {
    const sizeStyles: { [key: string]: string } = {
      small: '3em',
      medium: '5em',
      large: '7em'
    };
  
    return (
      <img
        src="/tjd-logo.png"
        alt="TJD Logo"
        style={{ height: sizeStyles[size] || size }}
        className="logo spin-slow"
      />
    );
  };

export default TjdLogo;