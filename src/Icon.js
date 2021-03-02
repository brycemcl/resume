import React from 'react';
import sharp from 'sharp';
import ReactPDF, { Image } from '@react-pdf/renderer';

// ReactPDF doesn't support svg. This function is used to convert the svg icons from FontAwesome to png.
const svgToPng = async (path) => {
  const pngData = await sharp(path).png().toBuffer();
  return { data: pngData, format: 'png' };
};
// Component for using FontAwesome icons
export default ({ name }) => {
  const basepath = 'node_modules/@fortawesome/fontawesome-free/svgs/';
  const path = basepath + name;
  return <Image src={() => svgToPng(path)} />;
};

/*
examples
<Icon name='brands/github-square.svg' />
<Icon name='solid/phone-square.svg' />
<Icon name='solid/envelope-square.svg' />
<Icon name='brands/linkedin.svg' />
 */
