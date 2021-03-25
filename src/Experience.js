import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import Title from './Title.js'

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lato',
    fontSize: 10,
    paddingBottom: 5,
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
  RightHeading: { fontFamily: 'Lato', fontSize: 10 },
})

const Entry = ({ organization, dates, skills, position }) => {
  if (!Array.isArray(skills)) {
    skills = [skills]
  }
  skills = skills.map((item, index) => {
    return <Text key={index}>{item}</Text>
  })
  const heading = (
    <>
      <Text>{position}</Text>
      <Text style={styles.organization}>{organization}</Text>
    </>
  )
  const dateAttended = `${dates.dateStart} - ${dates.dateEnd}`
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.leftHeading}>{heading}</View>
        <Text style={styles.RightHeading}>{dateAttended}</Text>
      </View>
      <View>
        {skills}
        {/* <List>{skills}</List> */}
      </View>
    </View>
  )
}
const Experience = ({ title, data }) => {
  return (
    <View style={null}>
      <Title>{title}</Title>
      {data.map(({ organization, dates, skills, position }) => (
        <Entry
          organization={organization}
          dates={dates}
          skills={skills}
          position={position}
          key={organization + position}
        />
      ))}
    </View>
  )
}

export default Experience
