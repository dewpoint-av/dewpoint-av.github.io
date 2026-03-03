import { motion } from 'framer-motion'
import { ExternalLink, Mail, Calendar, Music, Ticket } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTiktok,
  faYoutube,
  faSoundcloud,
  faPatreon,
  faBandcamp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { useLinks } from '@/hooks/useLinks'
import { socialLinks } from '@/data/socialLinks'
import { PageTransition } from '@/components/shared/PageTransition'

const brandIcons: Record<string, typeof faTiktok> = {
  tiktok: faTiktok,
  youtube: faYoutube,
  soundcloud: faSoundcloud,
  patreon: faPatreon,
  bandcamp: faBandcamp,
  instagram: faInstagram,
}

function getLinkIcon(href: string) {
  if (href.startsWith('mailto:')) return <Mail size={18} />
  if (href.includes('calendly.com')) return <Calendar size={18} />
  if (href.includes('soundcloud.com') || href.includes('bandcamp.com') || href.includes('submithub.com')) return <Music size={18} />
  if (href.includes('ticketing') || href.includes('tickets')) return <Ticket size={18} />
  return <ExternalLink size={18} />
}

export function LinkHub() {
  const { links } = useLinks()

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center px-4 py-12">
        {/* Avatar + Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          {/* Smoke video behind logo area */}
          <div className="relative mb-6">
            <div className="absolute inset-0 -m-4 rounded-full overflow-hidden opacity-30">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-150"
                src="/assets/video/smokeinstances_mp4_website.mp4"
              />
            </div>
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-accent-500/50 holo-border mx-auto">
                <img
                  src="/assets/images/profile-image.jpg"
                  alt="Dewpoint"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <img
            src="/assets/images/DEWPOINT_LOGO_white.png"
            alt="Dewpoint"
            className="h-12 mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          />
          <p className="text-sm text-text-muted">
            Audiovisual Artist &middot; Video Technician &middot; Audio Engineer
          </p>
        </motion.div>

        {/* Social icons row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex gap-3 mb-10"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-700/80 text-text-muted hover:text-white hover:bg-surface-600 transition-all holo-glow"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={brandIcons[social.icon]} />
            </a>
          ))}
        </motion.div>

        {/* Link cards */}
        <div className="w-full max-w-md flex flex-col gap-3 mb-12">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="glass-card holo-border flex items-center gap-4 p-4 group cursor-pointer"
            >
              {link.image ? (
                <div className="h-12 w-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface-700">
                  <img
                    src={`/assets/images/${link.image}`}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-700 flex-shrink-0 text-text-muted group-hover:text-accent-500 transition-colors">
                  {getLinkIcon(link.href)}
                </div>
              )}
              <span className="flex-1 text-sm font-medium text-text-primary group-hover:text-white transition-colors">
                {link.label}
              </span>
              <ExternalLink size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Featured embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full max-w-md"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3 text-center">
            Featured
          </h3>
          <div className="glass-card holo-border overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/XGIC7pg7mMw?start=1971"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
