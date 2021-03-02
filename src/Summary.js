import React from 'react';

import Title from './Title.js';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import data from './data/index.js';
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato',
    fontSize: 10,
    paddingBottom: 5,
  },
});

const Summary = () => {
  return (
    <View>
      <Title>Summary</Title>
      <Text style={styles.text}>{data.summary}</Text>
    </View>
  );
};

export default Summary;
