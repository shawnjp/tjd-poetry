import React from 'react';

interface PrideFlagProps {
  style?: React.CSSProperties; // Type definition for style prop
}

const colors = [
  '#E40303', // Red
  '#FF8C00', // Orange
  '#FFED00', // Yellow
  '#008026', // Green
  '#004DFF', // Blue
  '#750787', // Purple
  '#000000', // Black
  '#8B4513', // Brown
  '#00BFFF', // Light Blue
  '#FF69B4', // Pink
  '#FFFFFF', // White
  '#FFD700'  // Yellow (Ring)
];

export const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
const PrideFlag: React.FC<PrideFlagProps> = ({ style }) => {
  
  return (
    <div style={{ ...{ width: '100%', height: '50px', background: gradient }, ...style }}>
    </div>
  );
};

export default PrideFlag;