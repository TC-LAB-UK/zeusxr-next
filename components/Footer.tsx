import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/brand/logo.png" alt="Todd Engineering" className="f-logo" width={120} height={28} />
          <p className="f-tagline">Advanced spraybooth technology. Designed, manufactured and installed in Britain since 1993.</p>
          <div className="f-socials">
            <a href="https://www.instagram.com/toddengineeringltd/" className="f-social" aria-label="Instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/todd-engineering-uk-limited/" className="f-social" aria-label="LinkedIn" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UC5V2wN5pQzDpxbLvFVhgq0w" className="f-social" aria-label="YouTube" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.facebook.com/ToddEngineeringLtd/" className="f-social" aria-label="Facebook" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link href="/zeus-xr">Zeus XR <span className="f-new">New</span></Link></li>
            <li><Link href="/products/zeus-8000">Zeus 8000</Link></li>
            <li><Link href="/products/olympian-1000">Olympian 1000</Link></li>
            <li><Link href="/products/poseidon">Poseidon</Link></li>
            <li><Link href="/products">View All</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><Link href="/solutions/installation">Installation</Link></li>
            <li><Link href="/solutions/design-build">Design & Build</Link></li>
            <li><Link href="/solutions/project-management">Project Management</Link></li>
            <li><Link href="/solutions/maintenance">Maintenance</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Projects</h4>
          <ul>
            <li><Link href="/projects">View All Projects</Link></li>
            <li><Link href="/news">Latest News</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about/company">About Us</Link></li>
            <li><Link href="/about/resources">Resources</Link></li>
            <li><Link href="/about/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="f-legal">© 2026 Todd Engineering Ltd. All rights reserved. Spray Booth Manufacturer of the Year 2024.</p>
        <p className="f-address">Gregory Works, Armitage Road, Staffordshire, WS15 1PW<br />0845 017 6465 · sales@toddengineering.co.uk</p>
      </div>
    </footer>
  )
}
