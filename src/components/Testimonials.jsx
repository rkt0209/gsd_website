import { testimonials } from '../data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by Businesses Nationwide"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <div className="text-4xl leading-none text-saffron" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="mt-2 flex-1 text-slate-700">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-steel">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
