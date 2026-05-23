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
      {/* Navy gradient base */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-navy via-navy to-navy-light" />

      {/* Our own truck as a faint background watermark */}
      <img
        src="/truck-angle.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[60rem] max-w-[85%] opacity-[0.13]"
        style={{
          maskImage:
            'linear-gradient(to left, black 25%, transparent 92%), linear-gradient(to top, transparent 2%, black 35%)',
          maskComposite: 'intersect',
          WebkitMaskImage:
            'linear-gradient(to left, black 25%, transparent 92%), linear-gradient(to top, transparent 2%, black 35%)',
          WebkitMaskComposite: 'source-in',
        }}
      />

      {/* Faint grid pattern for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
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
