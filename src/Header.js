import React from 'react';
import { Link, Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import ContactInfo from './ContactInfo/index.js';
import data from './data/index.js';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
  },
  detailColumn: {
    alignItems: 'flex-start',
  },
  contactInfo: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'center',
  },
  name: {
    padding: 0,
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{data.name}</Text>
      <Text Text style={styles.subtitle}>
        {data.position}
      </Text>
    </View>
    <View style={styles.contactInfo}>
      <ContactInfo />
    </View>
  </View>
);
