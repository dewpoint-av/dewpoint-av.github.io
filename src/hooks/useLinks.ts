import { useState, useEffect } from 'react'
import type { LinkItem } from '@/types'

const defaultLinks: LinkItem[] = [
  { label: 'Portfolio', href: '#/resume' },
  { label: 'Instagram', href: 'https://www.instagram.com/dewpoint.live', external: true },
  { label: 'YouTube', href: 'https://www.youtube.com/@dewpointlive', external: true },
  { label: 'Email', href: 'mailto:anthony@dewpoint.live', external: true },
]

export function useLinks() {
  const [links, setLinks] = useState<LinkItem[]>(defaultLinks)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetch('/links.json', { signal: controller.signal })
      .then((res) => res.json())
      .then((data: LinkItem[]) => {
        setLinks(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { links, loading }
}
