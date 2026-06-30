'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSub, setOpenSub] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('te-theme') as 'dark' | 'light' | null
    const t = stored || 'light'
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('te-theme', next)
  }

  function toggleMenu() {
    setMenuOpen(o => !o)
    setOpenSub(null)
  }

  function closeMenu() {
    setMenuOpen(false)
    setOpenSub(null)
  }

  const navItems = [
    {
      label: 'Products',
      links: [
        { href: '/zeus-xr', label: 'Zeus XR', badge: 'New' },
        { href: '/products/zeus-8000', label: 'Zeus 8000' },
        { href: '/products/olympian-1000', label: 'Olympian 1000' },
        { href: '/products/poseidon', label: 'Poseidon' },
        { divider: true },
        { href: '/products', label: 'View all products →' },
      ],
    },
    {
      label: 'Projects',
      links: [
        { href: '/projects/british-wind-farm', label: 'British Wind Farm' },
        { href: '/projects/dubai-aerospace', label: 'Dubai Aerospace' },
        { href: '/projects/amalgam', label: 'Amalgam' },
        { divider: true },
        { href: '/projects', label: 'View all projects →' },
      ],
    },
    {
      label: 'Solutions',
      links: [
        { href: '/solutions/installation', label: 'Installation' },
        { href: '/solutions/design-build', label: 'Design & Build' },
        { href: '/solutions/project-management', label: 'Project Management' },
        { href: '/solutions/maintenance', label: 'Maintenance & Servicing' },
      ],
    },
    {
      label: 'About Us',
      links: [
        { href: '/about/company', label: 'Company' },
        { href: '/about/resources', label: 'Resources' },
        { href: '/about/careers', label: 'Careers' },
        { divider: true },
        { href: '/news', label: 'News' },
      ],
    },
  ]

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/brand/logo.png"
            alt="Todd Engineering"
            className="nav-logo"
            width={160}
            height={58}
            priority
          />
        </Link>

        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.label}>
              <span>
                {item.label}
                <svg className="nav-chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
              </span>
              <div className="nav-drop">
                {item.links.map((l, i) =>
                  'divider' in l
                    ? <div key={i} className="nav-drop-divider"></div>
                    : (
                      <Link key={l.href} href={l.href!}>
                        {l.label}
                        {'badge' in l && l.badge && <span className="drop-badge">{l.badge}</span>}
                      </Link>
                    )
                )}
              </div>
            </li>
          ))}
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        <div className="nav-r">
          <button className="mode-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <svg className="i-sun" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
            <svg className="i-moon" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          <button className="btn btn-cta" data-quote="Get a Quote">Get a Quote</button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mob-nav">
          {navItems.map(item => (
            <div key={item.label} className="mob-item">
              <button
                className={`mob-trigger${openSub === item.label ? ' open' : ''}`}
                onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
              >
                {item.label}
                <svg viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
              </button>
              <ul className={`mob-sub${openSub === item.label ? ' open' : ''}`}>
                {item.links.map((l, i) =>
                  'divider' in l ? null : (
                    <li key={i}>
                      <Link href={l.href!} onClick={closeMenu}>
                        {l.label}
                        {'badge' in l && l.badge && <span style={{ fontSize: 9, fontWeight: 700, background: 'rgba(80,167,36,.12)', border: '1px solid rgba(80,167,36,.25)', color: '#50a724', padding: '2px 7px', borderRadius: 100, marginLeft: 8 }}>{l.badge}</span>}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
          <div className="mob-item">
            <Link href="/contact" className="mob-link" onClick={closeMenu}>Contact Us</Link>
          </div>
        </nav>
        <div className="mob-actions">
          <button className="mob-cta" data-quote="Get a Quote" onClick={closeMenu}>Get a Quote</button>
          <button className="mob-theme" onClick={toggleTheme}>
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            Toggle light / dark
          </button>
        </div>
      </div>
    </>
  )
}
