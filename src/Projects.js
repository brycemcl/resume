import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title.js';
import ContactItem from './ContactInfo/ContactItem.js';

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lato',
    fontSize: 10,
    paddingBottom: 5,
  },
  summary: {
    width: '80%',
    fontFamily: 'Lato',
    fontSize: 10,
    paddingBottom: 0,
  },
  heading: {
    fontSize: 11,
    fontFamily: 'Lato Bold',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  organization: { fontFamily: 'Lato Italic', fontSize: 10 },
  rightHeading: {
    fontFamily: 'Lato',
    fontSize: 10,
    alignSelf: 'flex-start',
  },
  date: {
    alignSelf: 'flex-end',
  },
  stack: {
    paddingTop: 5,
    fontFamily: 'Lato Italic',
  },
});

const Entry = ({
  name,
  date,
  github,
  liveDemo,
  callToAction,
  summary,
  stack,
}) => {
  if (!Array.isArray(stack)) {
    stack = [stack];
  }
  stack =
    'Made with: ' +
    stack.reduce((previous, current, index, array) => {
      if (array.length - 1 === index) {
        previous = `${previous} and ${current}`;
      } else {
        previous = `${previous}, ${current}`;
      }
      return previous;
    });

  return (
    <View>
      <View style={styles.heading}>
        <View style={styles.leftHeading}>
          <Text>{name}</Text>
          <View style={styles.summary}>
            <Text>{summary}</Text>
            <Text style={styles.stack}>{stack}</Text>
          </View>
        </View>
        <View style={styles.rightHeading}>
          <Text style={styles.date}>{date}</Text>
          <ContactItem src={github} iconName="brands/github-square.svg">
            Repository
          </ContactItem>
          <ContactItem src={liveDemo} iconName="solid/link.svg">
            {callToAction}
          </ContactItem>
        </View>
      </View>
    </View>
  );
};
const Projects = ({ title, data }) => {
  return (
    <View style={null}>
      <Title>{title}</Title>
      {data.map(({ name, date, demo, summary, stack }) => (
        <Entry
          key={name}
          name={name}
          date={date}
          github={demo.github}
          liveDemo={demo.liveDemo}
          callToAction={demo.callToAction}
          summary={summary}
          stack={stack}
        />
      ))}
    </View>
  );
};

export default Projects;
