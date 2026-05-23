import { services } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="End-to-End Transport Services"
          subtitle="From a single part-load to fully managed 3PL supply chains, we move your cargo across India with care."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40 hover:shadow-xl">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-saffron transition-colors group-hover:bg-saffron group-hover:text-navy">
                  <Icon name={service.icon} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
