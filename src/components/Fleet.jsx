import { fleet } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Fleet() {
  return (
    <section id="fleet" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Fleet"
          title="32/34 ft Single-Axle Containers"
          subtitle="A well-maintained, GPS-enabled fleet built for the long haul on Indian highways."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {fleet.map((vehicle, i) => (
            <Reveal key={vehicle.name} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40 hover:bg-white/10">
                <div className="relative flex h-60 items-center justify-center overflow-hidden bg-white p-3">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} cargo vehicle`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-saffron px-4 py-1 text-sm font-semibold text-navy shadow">
                    {vehicle.capacity}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                    <span className="whitespace-nowrap text-sm font-medium text-slate-400">
                      {vehicle.volume}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {vehicle.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-slate-300">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
