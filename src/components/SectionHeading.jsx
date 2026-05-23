import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, light = true }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-saffron">{eyebrow}</p>
      )}
      <h2
        className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-saffron to-saffron-dark" />
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}
