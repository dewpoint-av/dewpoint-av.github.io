import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTiktok,
  faYoutube,
  faSoundcloud,
  faPatreon,
  faBandcamp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { socialLinks } from '@/data/socialLinks'

const brandIcons: Record<string, typeof faTiktok> = {
  tiktok: faTiktok,
  youtube: faYoutube,
  soundcloud: faSoundcloud,
  patreon: faPatreon,
  bandcamp: faBandcamp,
  instagram: faInstagram,
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface-900/80 backdrop-blur-xl">
      {/* Holographic top trim */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff00ff, #ff0000)',
          backgroundSize: '200% 100%',
          animation: 'holo-shift 3s linear infinite',
          opacity: 0.4,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">Anthony Douglas</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Creative Technologist & AV Production specialist passionate about designing immersive experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/resume', label: 'Resume' },
                { to: '/epk', label: 'EPK' },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm text-text-muted hover:text-white transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-700 text-text-muted hover:text-white hover:bg-surface-600 transition-all"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={brandIcons[social.icon]} size="sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Anthony Douglas. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
