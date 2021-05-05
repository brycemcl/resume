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
  `I am an experienced building designer looking to make the career shift to web development. I am a quick learner and have great attention to detail which is critical in building design as well as web development.`,
)
project({
  name: 'xkdc Viewer',
  date: 'May 2021',
  github: 'https://github.com/brycemcl/xkdc-viewer',
  liveDemo: 'https://xkcd.brycemclachlan.me/',
  callToAction: 'Live Demo',
  summary:
    'Created with Next.js, this progressive web app is statically deployed to a CDN via a CI/CD pipeline. A service worker enables offline access.',
  stack: [
    'React',
    'Next.js',
    // 'Service Worker',
    'Tailwindcss',
    'Github Actions',
    // 'Firebase Hosting',
    'Typescript',
    // 'Git',
  ],
})
project({
  name: 'The resume you are looking at',
  date: 'May 2021',
  github: 'https://github.com/brycemcl/resume',
  liveDemo: 'https://brycemcl.github.io/resume/',
  callToAction: 'Updated PDF',
  summary:
    'Created with React-PDF, this resume shows how print media can be automated using web technology.',
  stack: ['React', 'React-PDF', 'Babel', 'Font Awesome', 'Javascript', 'Git'],
})
project({
  name: 'Pattr.Chat',
  date: 'March 2021',
  github: 'https://github.com/brycemcl/Pattr-Chat',
  liveDemo: 'https://pattr.chat/',
  callToAction: 'Live Demo',
  summary:
    'Created with React, this project uses GraphQL subscriptions to update multiple clients in realtime. The architecture allows for horizontal scaling & is deployed in a Kubernetes cluster with a load balancer, ingress & https certificates. Created with two other contributors we used extensive pull requests & code reviews.',
  stack: [
    'React',
    'Apollo',
    'GraphQL',
    'WebSocket',
    'Material-UI',
    'Firebase Authentication',
    'Kubernetes',
    'Javascript',
    'Git',
  ],
})

// project({
//   name: 'Scheduler',
//   date: 'March 2021',
//   github: 'https://github.com/brycemcl/scheduler',
//   summary:
//     'Created with React, this project demonstrates a modern web technology stack.',
//   stack: [
//     'React',
//     'ReactDOM',
//     'PostgreSQL',
//     'Express',
//     'Rest',
//     'Create React App',
//     'Babel',
//     'Axios',
//     'Storybook',
//     'Jest',
//     'Cypress',
//     'Javascript',
//     'Git',
//   ],
// })
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
    'Learned practical skills to use web technologies to build modern websites, apps, & tools.',
  dateStart: '2021',
  dateEnd: '2021',
})
education({
  organization: 'University of the Fraser Valley',
  position: 'Architectural Drafting Certificate',
  skills:
    'Developed skills to design buildings, write technical documents, draw building plans & navigate the legal frameworks regulating the building industry.',
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
skill({ Languages: 'Typescript' })
skill({ Languages: 'Bash' })
skill({ Languages: 'HTML' })
skill({ Languages: 'CSS' })
skill({ Languages: 'SQL (Postgres)' })
skill({ Languages: 'GraphQL' })
// skill({ Languages: 'Ruby' })
// skill({ Languages: 'Go' });
// skill({ Languages: 'Rust' });
skill({ Frameworks: 'Express' })
// skill({ Frameworks: 'Ruby on Rails' })
// skill({ Frameworks: 'React Ecosystem' })
skill({ Frameworks: 'Next.js' })
skill({ Frameworks: 'Tailwind CSS' })
skill({ libraries: 'React' })
// skill({ libraries: 'ReactDOM' });
// skill({ libraries: 'React-PDF' });
skill({ libraries: 'Redux' })
skill({ libraries: 'Axios' })
skill({ libraries: 'Apollo Client' })
skill({ libraries: 'jQuery' })
skill({ Environments: 'Client Side(Web Browsers)' })
skill({ Environments: 'Serverless(Firebase Functions)' })
skill({ Environments: 'Containers(Docker & Kubernetes)' })
skill({ Environments: 'Virtual Machines(Hyper-V & KVM)' })
skill({ Environments: 'Bare Metal(Server & Desktop)' })
skill({ Storage: 'SQL (PostgreSQL)' })
skill({ Storage: 'Object Storage (S3)' })
skill({ Storage: 'Ceph-Rook (Block)' })
skill({ Storage: 'NAS (Samaba running on a on-prem Kubernetes cluster)' })
// skill({ Storage: 'Nextcloud (docker-compose on a dedicated cloud server)' })
// skill({ Automation: 'Rsync' })
// skill({ Automation: 'Bash' })
// skill({ Automation: 'rsnapshot' })
// skill({ Runtimes: 'Node' })
// skill({ Runtimes: 'Browsers' })
skill({ Tools: 'NPM' })
skill({ Tools: 'NPX' })
skill({ Tools: 'Babel' })
skill({ Tools: 'PostCSS' })
// skill({ Tools: 'Snowpack' })
skill({ Tools: 'Webpack' })
// skill({ Tools: 'PSQL' });
skill({ Tools: 'Docker' })
// skill({ Tools: 'Docker-Compose' })
// skill({ Tools: 'Kind(Kubernetes in Docker)' });
// skill({ Tools: 'DigitalOcean Kubernetes' });
// skill({ Tools: 'Microk8s' });
skill({ Tools: 'Kubectl' })
// skill({ Tools: 'Kubeadm' })
// skill({ Tools: 'Skaffold' })
skill({ Tools: 'Git' })
// skill({ Tools: 'Github' })
skill({ Tools: 'Github Actions' })
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
skill({ Testing: 'Mocha' })
skill({ Testing: 'Chai' })
skill({ Testing: 'Jest' })
skill({ Testing: 'Cypress' })
experience({
  // organization: 'JCR Design',
  organization: 'JCR Design & Drafting',
  position: 'Building Designer',
  dateStart: '2016',
  dateEnd: '2020',
  skills: [
    // 'System administration for internal services',
    // 'Draw building plans in AutoCAD & Revit',
    // 'Communicate with stakeholders in project',
    // 'Review junior building designers drawings',
    // 'Mentor & train junior building designers',
    // 'Research & ensure compliance with zoning regulations, building bylaws & building codes',
    // 'Collaborate with team members as necessary',
    'In my position as as a building designer I automated the repetitive parts of my job & took on some system admin duties. During COVID my team had to transition from the office to WFH. During this transition I setup the IT infrastructure & documentation to make this a reality.',
  ],
})
experience({
  // organization: 'The Keg',
  organization: 'The Keg Steakhouse & Bar',
  position: 'Preparation & 1st Cook',
  dateStart: '2010',
  dateEnd: '2016',
  skills: [
    // 'Started as a Dishwasher',
    // 'Worked way up to the highest positions in the kitchen',
    // 'Semi-finalist in internal Keg wide “Grill Master” competition',
    // 'Lead a team of cooks',
    // 'Respond to guest requests & complaints',
    // // 'Provide customer service over the phone',
    // 'Train staff',

    'Hired on as a Dishwasher, I worked my way up into a leadership position where I enjoyed being a mentor for our new generation of staff.',
  ],
})

export default data
