import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using the Alliance International School website.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Terms &amp; Conditions</h1>

      <section className="prose prose-lg mb-6">
        <p>
          By accessing this website, you agree to be bound by these Terms and Conditions, applicable laws,
          and regulations. If you disagree with any part of these Terms, you must not use this Site.
        </p>

        <h2>Use Licence</h2>
        <ol>
          <li>Permission is granted to temporarily download one copy of the materials on the Site for personal, non-commercial use only.</li>
          <li>You may not modify or copy the materials, use them for commercial purposes, attempt to decompile any materials, remove copyright notices, or transfer the materials to another person or "mirror" them on any other server.</li>
          <li>This licence may be terminated if you break any of these restrictions and may be terminated by the School at any time.</li>
        </ol>

        <h2>Disclaimer</h2>
        <p>
          The materials on this Site are provided "as is". The School makes no warranties, expressed or implied,
          and disclaims all other warranties including, without limitation, implied warranties of merchantability,
          fitness for a particular purpose, or non-infringement.
        </p>

        <h2>Limitations</h2>
        <p>
          In no event shall the School or its suppliers be liable for any damages arising out of the use or inability to use the materials on this Site.
        </p>

        <h2>Amendments and Errata</h2>
        <p>
          Materials on this Site may contain typographical or photographic errors. The School does not warrant that any materials are accurate, complete, or current.
        </p>

        <h2>Links</h2>
        <p>
          The Site may contain links to third-party websites. These links are provided for convenience and do not imply endorsement. The School is not responsible for the content of external sites.
        </p>

        <h2>Site Terms Modifications</h2>
        <p>
          The School may revise these Terms at any time. Continued use of the Site after revisions constitutes acceptance of the updated Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          Any claim relating to the Site shall be governed by the laws of the Republic of India and subject to the exclusive jurisdiction of the courts in Punjab, India.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these Terms, contact us at <a href="mailto:info@ais.ac.in">info@ais.ac.in</a> or call +91‑9464311111.
        </p>
      </section>
    </div>
  )
}
