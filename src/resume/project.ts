import { Url } from 'url'

export interface Project {
  name: string
  date: Date
  github: Url
  liveDemo: Url
  callToAction: string
  summary: string
  stack: string[]
}
