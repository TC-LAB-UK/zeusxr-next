'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('te-theme') as 'dark' | 'light' | null
    const t = stored || 'dark'
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('te-theme', next)
  }

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link href="/">
        <Image
          src="/brand/logo.png"
          alt="Todd Engineering"
          className="nav-logo"
          width={160}
          height={38}
          priority
        />
      </Link>

      <ul className="nav-links">
        <li>
          <span>
            Products
            <svg className="nav-chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
          </span>
          <div className="nav-drop">
            <Link href="/zeus-xr">Zeus XR <span className="drop-badge">New</span></Link>
            <Link href="/products/zeus-8000">Zeus 8000</Link>
            <Link href="/products/olympian-1000">Olympian 1000</Link>
            <Link href="/products/poseidon">Poseidon</Link>
            <div className="nav-drop-divider"></div>
            <Link href="/products">View all products →</Link>
          </div>
        </li>

        <li>
          <span>
            Projects
            <svg className="nav-chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
          </span>
          <div className="nav-drop">
            <Link href="/projects/british-wind-farm">British Wind Farm</Link>
            <Link href="/projects/bahrain-aerospace">Bahrain Aerospace</Link>
            <Link href="/projects/amalgam">Amalgam</Link>
            <div className="nav-drop-divider"></div>
            <Link href="/projects">View all projects →</Link>
          </div>
        </li>

        <li>
          <span>
            Solutions
            <svg className="nav-chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
          </span>
          <div className="nav-drop">
            <Link href="/solutions/installation">Installation</Link>
            <Link href="/solutions/design-build">Design & Build</Link>
            <Link href="/solutions/project-management">Project Management</Link>
            <Link href="/solutions/maintenance">Maintenance & Servicing</Link>
          </div>
        </li>

        <li>
          <span>
            About Us
            <svg className="nav-chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
          </span>
          <div className="nav-drop">
            <Link href="/about/company">Company</Link>
            <Link href="/about/resources">Resources</Link>
            <Link href="/about/careers">Careers</Link>
          </div>
        </li>

        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/news">News</Link></li>
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
      </div>
    </nav>
  )
}
