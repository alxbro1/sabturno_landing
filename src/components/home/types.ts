export type NavItem = {
  label: string
  href: string
}

export type HeroMetric = {
  value: string
  label: string
  detail: string
}

export type StoryCard = {
  eyebrow: string
  title: string
  description: string
}

export type AudienceCard = {
  eyebrow: string
  title: string
  summary: string
  bullets: string[]
}

export type WebMoment = {
  label: string
  title: string
  description: string
  result: string
}

export type FlowStep = {
  step: string
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type CtaHighlight = {
  title: string
  detail: string
}

export type ServiceSnapshot = {
  service: string
  time: string
  client: string
}
