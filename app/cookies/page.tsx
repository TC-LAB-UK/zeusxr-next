import type { Metadata } from 'next'
import Link from 'next/link'
import CookieSettingsLink from '@/components/CookieSettingsLink'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Information about the cookies used on zeusxr.co and how to manage them.',
}

export default function CookiePolicy() {
  return (
    <main className="legal-page">
      <h1>Cookie Policy</h1>
      <span className="legal-updated">Last updated: 1 July 2026</span>

      <p>
        This policy explains what cookies are, which cookies we use on zeusxr.co, and how you can
        control them.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are widely
        used to make websites work, or work more efficiently, and to provide information to website
        owners.
      </p>

      <h2>Cookies we use</h2>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Type</th>
            <th>Purpose</th>
            <th>Expires</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>te-cookie-consent</code></td>
            <td>Essential</td>
            <td>Stores your cookie consent preference (accepted / rejected)</td>
            <td>Until cleared</td>
          </tr>
          <tr>
            <td><code>te-theme</code></td>
            <td>Essential</td>
            <td>Remembers your display theme preference (light / dark)</td>
            <td>Until cleared</td>
          </tr>
          <tr>
            <td><code>_ga</code></td>
            <td>Analytics</td>
            <td>Google Analytics — distinguishes unique users</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td><code>_ga_*</code></td>
            <td>Analytics</td>
            <td>Google Analytics 4 — maintains session state</td>
            <td>2 years</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Essential cookies</strong> are necessary for the website to function and cannot be
        disabled.
      </p>
      <p>
        <strong>Analytics cookies</strong> (Google Analytics 4) are only set after you give
        explicit consent. We use IP anonymisation, meaning your full IP address is never stored by
        Google. Analytics data helps us understand which content is most useful and how visitors
        navigate the site.
      </p>

      <h2>Managing your preferences</h2>
      <p>
        You can change your cookie preferences at any time using the button below. Selecting
        "Reject non-essential" will remove any previously set analytics cookies on your next visit.
      </p>

      <p style={{ marginTop: '16px' }}>
        <CookieSettingsLink />
      </p>

      <p>
        You can also control cookies through your browser settings. Note that disabling all cookies
        may affect the functionality of some parts of the site.
      </p>

      <h2>Third-party cookies</h2>
      <p>
        Our site may embed YouTube videos. If you play a video, YouTube may set its own cookies
        subject to{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google's Privacy Policy
        </a>
        . We use the standard YouTube embed (not youtube-nocookie) to enable analytics on video
        plays.
      </p>

      <h2>More information</h2>
      <p>
        For full details of how we handle personal data, see our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        Questions? Email{' '}
        <a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a>.
      </p>
    </main>
  )
}
