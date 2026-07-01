import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Todd Engineering collects, uses and protects your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <span className="legal-updated">Last updated: 1 July 2026</span>

      <p>
        Todd Engineering Ltd ("we", "us", "our") is committed to protecting your personal data and
        respecting your privacy. This policy explains what data we collect, why we collect it, and
        your rights under the UK General Data Protection Regulation (UK GDPR) and the Data
        Protection Act 2018.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Todd Engineering Ltd is the data controller for the personal data collected through this
        website (zeusxr.co).
      </p>
      <ul>
        <li><strong>Registered address:</strong> Gregory Works, Armitage Road, Rugeley, Staffordshire, WS15 1PW</li>
        <li><strong>Contact email:</strong> <a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a></li>
        <li><strong>Telephone:</strong> 0845 017 6465</li>
      </ul>

      <h2>2. What data we collect</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Why we collect it</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name, email address, phone number, message</td>
            <td>To respond to enquiries submitted via our contact form</td>
            <td>Legitimate interests (responding to your request)</td>
          </tr>
          <tr>
            <td>Website usage data (pages visited, session duration, browser type)</td>
            <td>Analytics — to understand how the site is used and improve it</td>
            <td>Consent (you can accept or reject analytics cookies)</td>
          </tr>
          <tr>
            <td>IP address (anonymised)</td>
            <td>Analytics — approximate geographic location only</td>
            <td>Consent</td>
          </tr>
        </tbody>
      </table>

      <p>We do not collect sensitive personal data (e.g. health, financial, or biometric data).</p>

      <h2>3. Cookies and analytics</h2>
      <p>
        We use Google Analytics 4 (GA4) with IP anonymisation enabled. GA4 only loads after you
        give explicit consent via our cookie banner. You can withdraw consent at any time via the
        "Cookie settings" link in the footer.
      </p>
      <p>
        For full details of the cookies we use, see our <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>4. How we use your data</h2>
      <ul>
        <li>To respond to your enquiries and quote requests</li>
        <li>To improve our website and understand user behaviour (analytics, with consent)</li>
        <li>We do not use your data for automated decision-making or profiling</li>
        <li>We do not sell your data to third parties</li>
        <li>We do not use your data for direct marketing without your explicit consent</li>
      </ul>

      <h2>5. Who we share data with</h2>
      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Purpose</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supabase Inc.</td>
            <td>Database hosting for contact form submissions</td>
            <td>EU (Frankfurt)</td>
          </tr>
          <tr>
            <td>Google LLC (GA4)</td>
            <td>Website analytics (consent-gated)</td>
            <td>USA (Standard Contractual Clauses apply)</td>
          </tr>
          <tr>
            <td>Vercel Inc.</td>
            <td>Website hosting and delivery</td>
            <td>USA/Global edge (Standard Contractual Clauses apply)</td>
          </tr>
        </tbody>
      </table>

      <h2>6. How long we keep your data</h2>
      <ul>
        <li><strong>Contact form submissions:</strong> retained for up to 3 years, then deleted or anonymised</li>
        <li><strong>Analytics data:</strong> retained by Google for 14 months (our GA4 data retention setting)</li>
      </ul>

      <h2>7. Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li><strong>Access</strong> the personal data we hold about you</li>
        <li><strong>Rectify</strong> inaccurate data</li>
        <li><strong>Erase</strong> your data ("right to be forgotten")</li>
        <li><strong>Restrict</strong> processing in certain circumstances</li>
        <li><strong>Data portability</strong> — receive your data in a machine-readable format</li>
        <li><strong>Object</strong> to processing based on legitimate interests</li>
        <li><strong>Withdraw consent</strong> at any time (for analytics cookies)</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{' '}
        <a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a>. We will
        respond within 30 days.
      </p>

      <h2>8. Complaints</h2>
      <p>
        If you are unhappy with how we handle your data, you have the right to lodge a complaint
        with the UK's supervisory authority:
      </p>
      <ul>
        <li>
          <strong>Information Commissioner's Office (ICO)</strong><br />
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> ·
          0303 123 1113
        </li>
      </ul>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Any changes will be posted on this page with
        an updated date. We encourage you to review it periodically.
      </p>

      <h2>10. Contact us</h2>
      <p>
        For any privacy-related queries, contact us at{' '}
        <a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a> or write to us
        at Gregory Works, Armitage Road, Rugeley, Staffordshire, WS15 1PW.
      </p>
    </main>
  )
}
