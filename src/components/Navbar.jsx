import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { company, navLinks } from '../data/site'
import Icon from './Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a href="#home" aria-label={`${company.name} — home`} className="flex items-center">
          <span className="rounded-xl bg-white px-3 py-2 shadow-md">
            <img
              src="/logo.png"
              alt={`${company.name} logo`}
              width="291"
              height="123"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-100 transition-colors hover:text-saffron"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-navy shadow-md transition-transform hover:scale-105"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-navy lg:hidden"
          >
            <ul className="space-y-1 px-4 pb-6 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-slate-100 hover:bg-navy-light hover:text-saffron"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-saffron px-4 py-3 text-center text-base font-semibold text-navy"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
