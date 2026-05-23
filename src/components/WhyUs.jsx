import { whyUs } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-saffron/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why Choose GSD"
          title="A 3PL Partner You Can Trust"
          subtitle="Next-gen logistics powered by smart tech and a team that never stops — keeping your supply chain always on the move."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-saffron/40 hover:bg-white/10">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-saffron text-navy">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
