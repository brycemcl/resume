import { fileURLToPath } from 'url';
import { dirname } from 'path';
import React from 'react';
import ReactPDF, {
  Document,
  Font,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer';
import Header from './Header.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Summary from './Summary.js';
import data from './data/index.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const styles = StyleSheet.create({
  page: { padding: 30 },
  container: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: { width: '30%', paddingRight: 15 },
  rightColumn: { width: '70%' },
});

Font.register({
  family: 'Open Sans',
  src: `${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
});
Font.register({
  family: 'Lato',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`,
});
Font.register({
  family: 'Lato Italic',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`,
});
Font.register({
  family: 'Lato Bold',
  src: `${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`,
});
const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Skills />
      </View>
      <View style={styles.rightColumn}>
        <Summary />
        <Projects title="Projects" data={data.projects} />
        <Experience title="Education" data={data.education} />
        <Experience title="Experience" data={data.experience} />
      </View>
    </View>
  </Page>
);

const Output = () => (
  <Document
    title="Bryce McLachlan Resume"
    author="Bryce McLachlan"
    creator="Bryce McLachlan"
    producer="Bryce McLachlan"
    keywords="resume"
    subject="The resume of Bryce McLachlan"
  >
    <Resume size="letter" />
  </Document>
);

ReactPDF.render(<Output />, `${__dirname}/output.pdf`);
