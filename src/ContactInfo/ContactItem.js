import React from 'react';
import { Link, StyleSheet } from '@react-pdf/renderer';
import Icon from '../Icon.js';

const styles = StyleSheet.create({
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'blue',
    textDecoration: 'none',
    alignSelf: 'flex-end',
  },
  leftAlign: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'blue',
    textDecoration: 'none',
    alignSelf: 'flex-end',
  },
});

export default ({ src, iconName, children, leftAlign = false }) => {
  if (leftAlign) {
    return (
      <Link
        src={src}
        target="_blank"
        style={leftAlign ? styles.LeftAlign : styles.link}
      >
        <Icon name={iconName} />
        &nbsp;{children}
      </Link>
    );
  } else {
    return (
      <Link
        src={src}
        target="_blank"
        style={leftAlign ? styles.LeftAlign : styles.link}
      >
        {children}&nbsp;
        <Icon name={iconName} />
      </Link>
    );
  }
};
