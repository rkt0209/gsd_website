import { regions } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Coverage() {
  // Duplicate the list so the marquee can loop seamlessly.
  const ticker = [...regions, ...regions]

  return (
    <section id="coverage" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Go"
          title="Delivering Across All of India"
          subtitle="With hubs in every major region, we reach metros, industrial towns and rural destinations alike."
        />

        <Reveal className="mt-14 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {regions.map((region) => (
            <div
              key={region}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur transition-colors hover:border-saffron/50 hover:bg-white/10"
            >
              <Icon name="pin" className="h-4 w-4 shrink-0 text-saffron" />
              {region}
            </div>
          ))}
        </Reveal>
      </div>

      {/* Looping city marquee */}
      <div className="mt-16 overflow-hidden border-y border-white/10 bg-white/5 py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-5">
          {ticker.map((region, i) => (
            <span
              key={`${region}-${i}`}
              className="flex items-center gap-2 text-lg font-semibold text-slate-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
