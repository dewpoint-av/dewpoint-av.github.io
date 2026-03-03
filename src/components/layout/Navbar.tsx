import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Play, Music, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { navActionLinks } from '@/data/socialLinks'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const hidden = useScrollDirection()

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-surface-900/90 backdrop-blur-xl border-b border-white/10"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/assets/images/DEWPOINT_LOGO_white.png"
              alt="Dewpoint"
              className="h-8 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
          </NavLink>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/resume', label: 'Resume' },
              { to: '/epk', label: 'EPK' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-accent-500 holo-underline' : 'text-text-muted hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={navActionLinks.watch} target="_blank" rel="noopener noreferrer" className="btn-watch">
              <Play size={14} /> WATCH
            </a>
            <a href={navActionLinks.listen} target="_blank" rel="noopener noreferrer" className="btn-listen">
              <Music size={14} /> LISTEN
            </a>
            <a href={navActionLinks.shop} target="_blank" rel="noopener noreferrer" className="btn-shop">
              <ShoppingCart size={14} /> SHOP
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Holographic bottom trim */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff00ff, #ff0000)',
            backgroundSize: '200% 100%',
            animation: 'holo-shift 3s linear infinite',
            opacity: 0.4,
          }}
        />
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface-900/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg transition"
            >
              <X size={28} />
            </button>

            <img
              src="/assets/images/DEWPOINT_LOGO_white.png"
              alt="Dewpoint"
              className="h-14 mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />

            <div className="flex flex-col items-center gap-6 mb-10">
              {[
                { to: '/', label: 'Home' },
                { to: '/resume', label: 'Resume' },
                { to: '/epk', label: 'EPK' },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-semibold transition-colors ${
                      isActive ? 'holo-text' : 'text-white hover:text-accent-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-3 w-64">
              <a href={navActionLinks.watch} target="_blank" rel="noopener noreferrer" className="btn-watch justify-center py-3 text-base">
                <Play size={16} /> WATCH
              </a>
              <a href={navActionLinks.listen} target="_blank" rel="noopener noreferrer" className="btn-listen justify-center py-3 text-base">
                <Music size={16} /> LISTEN
              </a>
              <a href={navActionLinks.shop} target="_blank" rel="noopener noreferrer" className="btn-shop justify-center py-3 text-base">
                <ShoppingCart size={16} /> SHOP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
