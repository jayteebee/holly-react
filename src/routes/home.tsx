import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Fully automated, AI-powered cold outreach. From lead list to booked meeting."
        content="Seamless, personalised automation across all your outreach platforms. Runs 24/7, letting you spend your time and money elsewhere."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
