import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../data/site'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const duration = 1600
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic for a natural slow-down
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative z-10 -mt-px bg-navy-light">
      <div className="h-1 w-full bg-gradient-to-r from-saffron via-saffron-dark to-saffron" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center ${
              i > 0 ? 'lg:border-l lg:border-white/10' : ''
            } ${i % 2 === 1 ? 'border-l border-white/10 lg:border-l' : ''}`}
          >
            <p className="text-3xl font-extrabold text-saffron sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm font-medium text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
