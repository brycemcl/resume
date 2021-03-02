const {
  data,
  project,
  name,
  position,
  summary,
  contactInfo,
  education,
  skill,
  experience,
} = (() => {
  const data = {
    projects: [],
    contactInfo: [],
    education: [],
    skills: [],
    experience: [],
  };
  const name = (name) => {
    data.name = name;
  };
  const position = (position) => {
    data.position = position;
  };
  const summary = (summary) => {
    data.summary = summary;
  };
  const project = ({
    name,
    date,
    github,
    liveDemo,
    callToAction,
    summary,
    stack,
  }) => {
    data.projects.push({
      name,
      date,
      demo: { github, liveDemo, callToAction },
      summary,
      stack,
    });
  };

  const contactInfo = ({ src, iconName, text }) => {
    data.contactInfo.push({ src, iconName, text });
  };
  const education = ({
    organization,
    position,
    skills,
    dateStart,
    dateEnd,
  }) => {
    data.education.push({
      organization,
      position,
      skills,
      dates: { dateStart, dateEnd },
    });
  };
  const skill = (skill) => {
    Object.entries(skill).reduce((previous, current) => {
      const previousKeys = Object.keys(previous);
      const currentKey = current[0];
      const currentValue = current[1];
      if (!previousKeys.includes(currentKey)) {
        previous[currentKey] = [];
      }
      previous[currentKey].push(currentValue);
      return previous;
    }, data.skills);
  };
  const experience = ({
    organization,
    position,
    dateStart,
    dateEnd,
    skills = [],
  }) => {
    data.experience.push({
      organization,
      position,
      dates: { dateStart, dateEnd },
      skills,
    });
  };

  return {
    data,
    project,
    name,
    position,
    summary,
    contactInfo,
    education,
    skill,
    experience,
  };
})();

export {
  data,
  project,
  name,
  position,
  summary,
  contactInfo,
  education,
  skill,
  experience,
};
