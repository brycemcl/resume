export enum SkillTypes {
  Monitoring = 'Monitoring',
  Protocols = 'Protocols',
  Languages = 'Languages',
  Frameworks = 'Frameworks',
  Libraries = 'Libraries',
  Environments = 'Environments',
  Storage = 'Storage',
  Tools = 'Tools',
  Testing = 'Testing',
}

export interface Skill {
  type: SkillTypes
  name: string
}
