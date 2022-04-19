export interface Person {
  name: string
  pronouns: string
  position: string
  summary: string
  contactInfo: { email: URL; phoneNumber: URL; linkedIn: URL; github: URL }
}
