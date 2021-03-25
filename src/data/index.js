import {
  data,
  project,
  name,
  position,
  summary,
  contactInfo,
  education,
  skill,
  experience,
} from './dataShape.js'
name('Bryce McLachlan')
position('Full Stack Web Developer')
summary(
  'I am an experienced building designer looking to make the career shift to web development. I left my job in November to pursue a career in web development.',
)
project({
  name: 'This Resume',
  date: 2021,
  github: 'https://github.com/brycemcl/resume',
  liveDemo: 'https://raw.githubusercontent.com/brycemcl/resume/main/resume.pdf',
  callToAction: 'Updated PDF',
  summary:
    'Created with React and React-PDF, this resume shows how print media can be automated using web technology.',
  stack: ['React', 'React-PDF', 'Babel', 'Font Awesome', 'Javascript', 'Git'],
})
project({
  name: 'Scheduler',
  date: 2021,
  github: 'https://github.com/brycemcl/scheduler',
  // liveDemo: 'https://github.com/brycemcl/scheduler',
  // callToAction: '',
  summary:
    'Created with React, this project demonstrates a modern web technology stack.',
  stack: [
    'React',
    'ReactDOM',
    // 'Kubernetes',
    // 'Docker',
    'PostgreSQL',
    'Express',
    'Rest',
    'Create React App',
    'Babel',
    'Axios',
    'Storybook',
    'Jest',
    'Cypress',
    'Javascript',
    'Git',
  ],
})
contactInfo({
  src: 'mailto:brycemclachlan@gmail.com',
  iconName: 'solid/envelope-square.svg',
  text: 'brycemclachlan@gmail.com',
})
contactInfo({
  src: 'tel:604-300-5727',
  iconName: 'solid/phone-square.svg',
  text: '604-300-5727',
})
contactInfo({
  src: 'https://www.linkedin.com/in/bryce-mclachlan',
  iconName: 'brands/linkedin.svg',
  text: 'linkedin.com/in/bryce-mclachlan',
})
contactInfo({
  src: 'https://github.com/brycemcl',
  iconName: 'brands/github-square.svg',
  text: 'github.com/brycemcl',
})
education({
  organization: 'Lighthouse Labs',
  position: 'Web Development Diploma',
  skills:
    'Learned practical skills to use web technologies to build modern websites, apps, and tools.',
  dateStart: '2021',
  dateEnd: '2021',
})
education({
  organization: 'University of the Fraser Valley',
  position: 'Architectural Drafting Certificate',
  skills:
    'Developed skills to design buildings, write technical documents, draw building plans and navigate the legal frameworks regulating the building industry.',
  dateStart: '2015',
  dateEnd: '2016',
})
education({
  organization: 'University of the Fraser Valley',
  position: 'Computer Information Systems Studies',
  skills:
    'Developed foundational skills to integrate information technologies into a business.',
  dateStart: '2014',
  dateEnd: '2015',
})
skill({ Languages: 'Javascript' })
skill({ Languages: 'HTML' })
skill({ Languages: 'CSS' })
skill({ Languages: 'Ruby' })
// skill({ Languages: 'Go' });
// skill({ Languages: 'Rust' });
// skill({ Environments: 'Virtual Machines(Hyper-V and KVM)' });
// skill({ Environments: 'Containers(Docker and Kubernetes)' });
// skill({ Environments: 'Bare Metal Linux (Headless/server and Desktop)' });
skill({ Storage: 'SQL (PostgreSQL)' })
skill({ Storage: 'Object Storage (S3)' })
skill({ Storage: 'Ceph-Rook (Block)' })
skill({ Storage: 'NAS (Samaba running on a on-prem Kubernetes cluster)' })
skill({ Storage: 'Nextcloud (docker-compose on a dedicated cloud server)' })
skill({ Automation: 'Rsync' })
skill({ Automation: 'Bash' })
skill({ Automation: 'rsnapshot' })
skill({ Runtimes: 'Node' })
skill({ Runtimes: 'Browsers' })
skill({ Tools: 'NPM' })
skill({ Tools: 'NPX' })
skill({ Tools: 'Babel' })
skill({ Tools: 'PostCSS' })
skill({ Tools: 'Snowpack' })
skill({ Tools: 'Webpack' })
// skill({ Tools: 'PSQL' });
skill({ Tools: 'Docker' })
skill({ Tools: 'Docker-Compose' })
// skill({ Tools: 'Kind(Kubernetes in Docker)' });
// skill({ Tools: 'DigitalOcean Kubernetes' });
// skill({ Tools: 'Microk8s' });
skill({ Tools: 'Kubectl' })
skill({ Tools: 'Kubeadm' })
skill({ Tools: 'Skaffold' })
skill({ Tools: 'Git' })
// skill({ Tools: 'Github' });
// skill({ Tools: 'Gitea' });
// skill({ 'Office Tools': 'Autodesk AutoCAD' });
// skill({ 'Office Tools': 'Autodesk Revit' });
// skill({ 'Office Tools': 'Microsoft Word' });
// skill({ 'Office Tools': 'Microsoft Outlook' });
// skill({ 'Office Tools': 'Microsoft Excel' });
// skill({ 'Office Tools': 'Microsoft Windows' });
// skill({ 'Office Tools': 'Zoom' });
// skill({ 'Office Tools': 'Discord' });
// skill({ 'Office Tools': 'Slack' });
// skill({ 'Office Tools': 'Google Meet' });
// skill({ 'Office Tools': 'Google Docs' });
// skill({ 'Office Tools': 'Google Sheets' });
skill({ Frameworks: 'Express' })
skill({ Frameworks: 'Ruby on Rails' })
// skill({ Frameworks: 'React Ecosystem' });
skill({ Frameworks: 'Tailwind CSS' })
skill({ libraries: 'React' })
// skill({ libraries: 'ReactDOM' });
// skill({ libraries: 'React-PDF' });
// skill({ libraries: 'Redux' });
skill({ libraries: 'Axios' })
skill({ libraries: 'jQuery' })
skill({ 'Test Tools': 'Mocha' })
skill({ 'Test Tools': 'Chai' })
skill({ 'Test Tools': 'Jest' })
skill({ 'Test Tools': 'Cypress' })
experience({
  // organization: 'JCR Design',
  organization: 'JCR Design and Drafting',
  position: 'Building Designer',
  dateStart: 'June, 2016',
  dateEnd: 'November, 2020',
  skills: [
    'System administration for internal services',
    'Draw building plans in AutoCAD and Revit',
    'Communicate with stakeholders in project',
    'Review junior building designers drawings',
    'Mentor and train junior building designers',
    'Research and ensure compliance with zoning regulations, building bylaws and building codes',
    'Collaborate with team members as necessary',
  ],
})
experience({
  // organization: 'The Keg',
  organization: 'The Keg Steakhouse and Bar',
  position: 'Preparation and 1st Cook',
  dateStart: 'October, 2010',
  dateEnd: 'November, 2016',
  skills: [
    'Started as a Dishwasher',
    'Worked way up to the highest positions in the kitchen',
    'Semi-finalist in internal Keg wide “Grill Master” competition',
    'Lead a team of cooks',
    'Respond to guest requests and complaints',
    // 'Provide customer service over the phone',
    'Train staff',
  ],
})

export default data
