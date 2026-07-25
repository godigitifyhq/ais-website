import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Alliance International School. How we collect, use and protect personal data.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>

      <section className="prose prose-lg mb-6">
        <p>We are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.</p>

        <h2>Collection and Purpose</h2>
        <ul>
          <li>We identify the purposes for which personal information is collected before or at the time of collection.</li>
          <li>We collect and use personal information only for the purposes specified and for other lawful purposes where you have given consent.</li>
          <li>We retain personal information only as long as necessary to fulfil those purposes.</li>
        </ul>

        <h2>Lawful and Fair Collection</h2>
        <p>We collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</p>

        <h2>Data Quality</h2>
        <p>Personal information shall be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, accurate, complete and up-to-date.</p>

        <h2>Security</h2>
        <p>We protect personal information by reasonable security safeguards against loss or theft, and unauthorised access, disclosure, copying, use or modification.</p>

        <h2>Access to Policy and Procedures</h2>
        <p>We will make our policies and procedures for managing personal information available to individuals on request.</p>

        <h2>Contact</h2>
        <p>To request access to, correction of, or deletion of your personal data, or for any privacy concerns, contact us at <a href="mailto:info@ais.ac.in">info@ais.ac.in</a>.</p>
      </section>
    </div>
  )
}
