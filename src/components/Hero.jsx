import { motion } from 'framer-motion'
import { company } from '../data/site'
import Icon from './Icon'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Navy base (always behind everything) */}
      <div className="absolute inset-0 -z-30 bg-navy" />

      {/* Branded composite hero background — air, rail, road & sea.
          The <picture> picks the closest aspect-ratio source from 7 buckets
          (9:21 → 9:16 → 3:4 → 1:1 → 4:3 → 3:2 → 16:9), then object-cover
          resizes that source to fill the hero edge-to-edge with no bars and
          no blur. Because the picked source's ratio is within ~5% of the
          viewport's at most realistic resolutions, the leftover cover-crop
          lands in the negative space around the vehicles (sky around the
          plane, water around the ship), not on the vehicles themselves. */}
      <picture>
        <source media="(max-aspect-ratio: 1/2)" srcSet="/hero-9x21.jpg" />
        <source media="(max-aspect-ratio: 2/3)" srcSet="/hero-9x16.jpg" />
        <source media="(max-aspect-ratio: 7/8)" srcSet="/hero-3x4.jpg" />
        <source media="(max-aspect-ratio: 7/6)" srcSet="/hero-1x1.jpg" />
        <source media="(max-aspect-ratio: 17/12)" srcSet="/hero-4x3.jpg" />
        <source media="(max-aspect-ratio: 5/3)" srcSet="/hero-3x2.jpg" />
        <img
          src="/hero-16x9.jpg"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-85"
        />
      </picture>

      {/* Readability overlay — stronger on the left where the text lives,
          lighter on the right so the truck/ship illustration stays visible.
          A second top-to-bottom wash deepens the navy floor. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/45 sm:to-navy/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/40 via-transparent to-navy/70"
      />

      {/* Soft animated accents */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-saffron/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-10 left-1/4 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-sm font-medium text-saffron"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-saffron" />
            Pan-India 3PL Solutions
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {company.tagline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-slate-200">
            A full-service <strong className="text-white">3PL partner</strong> managing your
            end-to-end logistics across India — from full &amp; part loads to nationwide
            distribution, backed by our own fleet of 32/34 ft containers.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 text-base font-semibold text-navy shadow-xl shadow-saffron/20 transition-transform hover:scale-105"
            >
              Book a Shipment <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Icon name="phone" className="h-5 w-5" /> {company.phone}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.ul variants={item} className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {['Pan-India Network', 'GPS-Tracked Fleet', '24/7 Support'].map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <Icon name="check" className="h-5 w-5 text-saffron" />
                {badge}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <Icon name="arrow" className="h-6 w-6 rotate-90" />
      </motion.div>
    </section>
  )
}
