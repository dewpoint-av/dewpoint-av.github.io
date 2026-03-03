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

export function FloatingSocial() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-text-muted text-center mb-1 [writing-mode:vertical-lr] rotate-180">
        Follow
      </div>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-800/80 backdrop-blur-sm border border-white/5 text-text-muted hover:text-accent-500 hover:border-accent-500/30 transition-all holo-glow"
          aria-label={social.label}
        >
          <FontAwesomeIcon icon={brandIcons[social.icon]} size="sm" />
        </a>
      ))}
    </div>
  )
}
