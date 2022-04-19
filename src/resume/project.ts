export interface Project {
  name: string
  date: Date
  summary: string
  stack: string[]
  github?: URL
  liveDemo?: URL
  callToAction?: string
}
