import { company, navLinks } from '../data/site'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="inline-flex rounded-xl bg-white px-4 py-3 shadow-md">
            <img
              src="/logo.png"
              alt={`${company.name} logo`}
              width="291"
              height="123"
              loading="lazy"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-md text-sm">
            A pan-India 3PL and road transport company operating 32/34 ft single-axle
            containers. Safe, reliable and on-time cargo movement since {company.founded}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-saffron">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <a href={company.phoneHref} className="hover:text-saffron">{company.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <a href={`mailto:${company.email}`} className="hover:text-saffron">{company.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p className="text-slate-400">Designed for reliable logistics across India.</p>
        </div>
      </div>
    </footer>
  )
}
