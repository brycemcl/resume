import React from 'react';

import Title from './Title.js';
import List, { Item } from './List.js';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import data from './data/index.js';
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    paddingBottom: 5,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  lastSkill: {
    paddingBottom: 5,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, index, array) => {
        if (array.length - 1 === index) {
          return (
            <View key={index}>
              <Item key={index}>{skill}</Item>
              <Text style={styles.lastSkill} />
            </View>
          );
        } else {
          return <Item key={index}>{skill}</Item>;
        }
      })}
    </List>
  </View>
);

const Skills = () => {
  const SkillEntries = Object.keys(data.skills).map((key) => {
    return <SkillEntry name={key} key={key} skills={data.skills[key]} />;
  });
  return (
    <View>
      <Title>Skills</Title>
      {SkillEntries}
    </View>
  );
};

export default Skills;
