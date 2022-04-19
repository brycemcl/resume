import { Education } from './education'
import { Experience } from './experience'
import { Person } from './person'
import { Project } from './project'
import { Skill } from './skills'
import { datesToString } from './time'

interface IResume {
  person: Person
  projects: Project[]
  education: Education[]
  skills: Skill[]
  experience: Experience[]
}
const joinWithAnd = (strings: string[]) => {
  if (!strings.length) {
    throw new Error('Provide strings to join')
  }
  let stringToReturn = ''
  for (let index = 0; index < strings.length; index++) {
    if (index === strings.length - 1) {
      stringToReturn += strings[index]
    } else if (index === strings.length - 2) {
      stringToReturn += strings[index] + ', and '
    } else {
      stringToReturn += strings[index] + ', '
    }
  }
  return stringToReturn
}
export class Resume {
  private resume: IResume
  constructor(resume: IResume) {
    this.resume = resume
  }

  public get person() {
    return this.resume.person
  }
  public get projects() {
    return this.resume.projects.map((projects) => {
      const { date, stack } = projects
      return {
        ...projects,
        date: datesToString.month(date),
        stack: 'Made with: ' + joinWithAnd(stack),
      }
    })
  }
  public get education() {
    return this.resume.education.map((education) => {
      const { dateEnd, dateStart } = education
      return {
        ...education,
        dateEnd: datesToString.year(dateEnd),
        dateStart: datesToString.year(dateStart),
      }
    })
  }
  public get skills() {
    const skills: { [key: string]: string[] } = Object.fromEntries(
      this.resume.skills.reduce((previous, current) => {
        if (previous.has(current.type)) {
          previous.get(current.type).push(current.name)
        } else {
          previous.set(current.type, [current.name])
        }
        return previous
      }, new Map()),
    )
    return skills
  }
  public get experience() {
    return this.resume.experience.map((experience) => {
      const { dateEnd, dateStart } = experience
      return {
        ...experience,
        dateEnd: datesToString.month(dateEnd),
        dateStart: datesToString.month(dateStart),
      }
    })
  }
  valueOf() {
    return {
      person: this.person,
      projects: this.projects,
      education: this.education,
      skills: this.skills,
      experience: this.experience,
    }
  }
  toJSON() {
    return this.valueOf()
  }
}
