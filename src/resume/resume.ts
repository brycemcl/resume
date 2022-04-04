import { Education } from './education'
import { Experience } from './experience'
import { Person } from './person'
import { Project } from './project'
import { Skill } from './skills'

interface Resume {
  person: Person
  projects: Project[]
  education: Education[]
  skills: Skill[]
  experience: Experience[]
}

export const resume: Resume = {
  education: [],
  experience: [],
  person: {
    name: 'Bryce McLachlan',
    position: 'Full Stack Software Engineer, Team Lead',
    summary: 'UPDATE ME',
  },
  projects: [],
  skills: [],
}
