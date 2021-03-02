import React from 'react';
import ContactItem from './ContactItem.js';
import data from '../data/index.js';
export default () => {
  const contactInfo = data.contactInfo.map((item, index) => {
    return (
      <ContactItem key={index} src={item.src} iconName={item.iconName}>
        {item.text}
      </ContactItem>
    );
  });
  return <>{contactInfo}</>;
};
