import React from 'react';
import './section-header.css';

interface SectionHeaderProps {
  text: string;
  level?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text, level = 'h2' }) => {
  switch (level) {
    case 'h3':
      return <h3 className="section-header section-header_h3">{text}</h3>;
    case 'h4':
      return <h4 className="section-header section-header_h4">{text}</h4>;
    case 'h5':
      return <h5 className="section-header section-header_h5">{text}</h5>;
    case 'h6':
      return <h6 className="section-header section-header_h6">{text}</h6>;
    default:
      return <h2 className="section-header section-header_h2">{text}</h2>;
  }
}; 