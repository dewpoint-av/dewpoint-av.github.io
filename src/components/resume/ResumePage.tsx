import { PageTransition } from '@/components/shared/PageTransition'
import { FloatingSocial } from '@/components/layout/FloatingSocial'
import { Hero } from './Hero'
import { About } from './About'
import { ExperienceTimeline } from './ExperienceTimeline'
import { SkillsSection } from './SkillsSection'
import { ProjectsSection } from './ProjectsSection'
import { ContactSection } from './ContactSection'

export function ResumePage() {
  return (
    <PageTransition>
      <FloatingSocial />
      <Hero />
      <About />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </PageTransition>
  )
}
