import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ParticleBackground } from '@/components/particles/ParticleBackground'
import { AppShell } from '@/components/layout/AppShell'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { LinkHub } from '@/components/linkhub/LinkHub'
import { ResumePage } from '@/components/resume/ResumePage'
import { EpkPage } from '@/components/epk/EpkPage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ParticleBackground />
      <ScrollToTop />
      <AppShell>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LinkHub />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/epk" element={<EpkPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </AppShell>
    </>
  )
}
