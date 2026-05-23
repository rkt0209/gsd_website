import { company, founders } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'

const highlights = [
  'End-to-end 3PL management',
  'Full & part-load road transport',
  'Own fleet of 32/34 ft containers',
  'GPS-tracked, 24/7-supported shipments',
]

// Build initials for the founder avatar (e.g. "Vipin Pal" → "VP").
const initials = (name) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand logo showcase (white pill so the navy logo reads on the dark bg) */}
        <Reveal className="mb-14 flex justify-center">
          <span className="rounded-2xl bg-white px-6 py-4 shadow-lg">
            <img
              src="/logo.png"
              alt={`${company.name} logo`}
              width="291"
              height="123"
              className="h-20 w-auto sm:h-24"
            />
          </span>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: story */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-saffron">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Your Trusted 3PL Partner
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              {company.name} is a full-service pan-India third-party logistics (3PL) company.
              Founded in {company.founded}, we manage end-to-end logistics for manufacturers, traders
              and businesses — from full &amp; part loads to nationwide distribution — backed by our
              own fleet of 32/34 ft containers.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-slate-200">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-saffron/20 text-saffron">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: founders */}
          <div className="grid gap-5 sm:grid-cols-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40 hover:bg-white/10">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron to-saffron-dark" />
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-saffron text-xl font-extrabold text-navy ring-4 ring-saffron/20">
                    {initials(f.name)}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{f.name}</h3>
                  <p className="text-sm font-semibold text-saffron">{f.role}</p>
                  <ul className="mt-4 space-y-2">
                    {f.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {f.phone && (
                    <a
                      href={f.phoneHref}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-saffron"
                    >
                      <Icon name="phone" className="h-4 w-4 text-saffron" /> {f.phone}
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
