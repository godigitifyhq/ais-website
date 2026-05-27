import { buildMetadata } from '@/lib/seo'
import { PageHero }      from '@/components/ui/PageHero'
import { ContactForm }   from '@/components/forms/ContactForm'
import { PageTransition } from '@/components/ui/PageTransition'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = buildMetadata({
  title:       'Contact Us',
  description: "Get in touch with Alliance International School, Banur. Call us at +91-94643-11111 or email info@ais.ac.in. We'd love to hear from you.",
  path:        '/contact',
  keywords:    ['contact AIS', 'Alliance school phone', 'school admission enquiry Punjab'],
})

function InfoCard({ icon: Icon, label, value, href }: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-alt hover:bg-border transition-colors">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-primary" />
      </div>
      <div>
        <p className="font-body text-xs text-text-muted font-medium uppercase tracking-wide">{label}</p>
        <p className="font-body text-sm text-text font-medium mt-0.5">{value}</p>
      </div>
    </div>
  )
  return href ? <a href={href}>{content}</a> : <div>{content}</div>
}

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to learn about admissions, campus visits, or any other enquiries."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* Contact form — 3/5 */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-text mb-2">Send us a message</h2>
              <p className="font-body text-text-muted mb-8">Fill in the form and our team will respond within 24 hours.</p>
              <ContactForm />
            </div>

            {/* School info — 2/5 */}
            <div className="lg:col-span-2 space-y-10">

              {/* Main Campus */}
              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-4">Main Campus — Banur</h3>
                <div className="flex flex-col gap-y-5">
                  <InfoCard
                    icon={Phone}
                    label="Phone"
                    value="+91-94643-11111"
                    href="tel:+919464311111"
                  />
                  <InfoCard
                    icon={Mail}
                    label="Email"
                    value="info@ais.ac.in"
                    href="mailto:info@ais.ac.in"
                  />
                  <InfoCard
                    icon={MapPin}
                    label="Address"
                    value="Banur, Punjab – 140601, India"
                    href="https://maps.google.com/?q=Alliance+International+School+Banur+Punjab"
                  />
                  <InfoCard
                    icon={Clock}
                    label="Office Hours"
                    value="Mon–Sat, 8:00 AM – 4:00 PM"
                  />
                </div>
              </div>

              {/* Quick links box */}
              <div className="rounded-2xl bg-primary text-white p-6">
                <h3 className="font-display text-lg font-bold mb-3">Ready to Apply?</h3>
                <p className="font-body text-sm text-white/80 mb-5">
                  Admissions for Session 2026–27 are now open. Limited seats available.
                </p>
                <a
                  href="/admission"
                  className="inline-flex items-center px-6 py-2.5 bg-white text-primary font-semibold rounded-full text-sm hover:bg-primary-light hover:text-white transition-colors"
                >
                  Begin Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="pb-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden h-[400px] shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.9!2d76.7!3d30.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAlliance+International+School+Banur!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alliance International School location map"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
