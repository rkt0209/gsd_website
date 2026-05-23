import { company, founders } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'

const highlights = [
  'Pan-India full-truckload movement',
  'Modern 32 ft & 34 ft single-axle fleet',
  'GPS-tracked, fully insured transit',
  'Round-the-clock shipment support',
]

// Build initials for the founder avatar (e.g. "Vipin Pal" → "VP").
const initials = (name) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand logo showcase */}
        <Reveal className="mb-14 flex justify-center">
          <img
            src="/logo.png"
            alt={`${company.name} logo`}
            width="291"
            height="123"
            className="h-24 w-auto sm:h-28"
          />
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: story */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-saffron">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Your Trusted 3PL & Container Transport Partner
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              {company.name} is a pan-India third-party logistics (3PL) and road transport company
              specialising in 32 ft and 34 ft single-axle containers. Founded in {company.founded},
              we help manufacturers, traders and businesses move their cargo safely and on time — to
              every corner of the country.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-saffron/20 text-saffron-dark">
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
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-saffron to-saffron-dark" />
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-navy text-xl font-extrabold text-saffron ring-4 ring-saffron/15">
                    {initials(f.name)}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{f.name}</h3>
                  <p className="text-sm font-semibold text-saffron-dark">{f.role}</p>
                  <p className="mt-3 text-sm text-slate-600">{f.bio}</p>
                  {f.phone && (
                    <a
                      href={f.phoneHref}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-saffron-dark"
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
