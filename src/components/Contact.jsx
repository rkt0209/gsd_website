import { useState } from 'react'
import { company, weightOptions, vehicleSizeOptions } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'

const details = [
  { icon: 'phone', label: 'Call us', value: company.phone, href: company.phoneHref },
  { icon: 'mail', label: 'Email us', value: company.email, href: `mailto:${company.email}` },
  { icon: 'pin', label: 'Visit us', value: company.address },
  { icon: 'clock', label: 'Hours', value: company.hours },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Free, no-backend delivery: assemble the enquiry into a WhatsApp message
  // and open a chat to the company number with everything pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    const message =
      `*New Shipment Enquiry — ${company.name}*%0A%0A` +
      `*Name:* ${data.name || '-'}%0A` +
      `*Phone:* ${data.phone || '-'}%0A` +
      `*Email:* ${data.email || '-'}%0A` +
      `*Pickup:* ${data.from || '-'}%0A` +
      `*Drop:* ${data.to || '-'}%0A` +
      `*Weight:* ${data.weight || '-'}%0A` +
      `*Vehicle size:* ${data.vehicleSize || '-'}%0A` +
      `*Cargo details:* ${data.message || '-'}`
    window.open(`https://wa.me/${company.whatsapp}?text=${message}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-28">
      {/* Faint brand watermark in the background */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 w-[34rem] max-w-none opacity-[0.05]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: details */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-saffron">
              Get In Touch
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Request a Free Quote
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your shipment and our team will get back to you with the best route and
              rate — usually within a couple of hours.
            </p>

            <dl className="mt-10 space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-saffron">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-steel">{d.label}</dt>
                    <dd className="text-base font-semibold text-navy">
                      {d.href ? (
                        <a href={d.href} className="transition-colors hover:text-saffron-dark">
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
              <Icon name="whatsapp" className="h-5 w-5" stroke={false} /> Chat on WhatsApp
            </a>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-lg sm:p-9">
              {sent ? (
                <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                    <Icon name="check" className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-navy">Almost there!</h3>
                  <p className="mt-2 text-slate-600">
                    WhatsApp should have opened with your enquiry pre-filled — just hit send and our
                    team will reply shortly. If it didn’t open,{' '}
                    <a
                      href={`https://wa.me/${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-saffron-dark underline"
                    >
                      message us here
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" placeholder="Your name" />
                    <Field id="phone" label="Phone" type="tel" placeholder="+91" />
                  </div>
                  <Field id="email" label="Email" type="email" placeholder="you@company.com" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="from" label="Pickup city" placeholder="From" />
                    <Field id="to" label="Drop city" placeholder="To" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Select id="weight" name="weight" label="Weight" options={weightOptions} />
                    <Select
                      id="vehicleSize"
                      name="vehicleSize"
                      label="Vehicle size"
                      options={vehicleSizeOptions}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                      Cargo details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Type of goods, preferred date…"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-base font-semibold text-navy shadow-md transition-transform hover:scale-[1.02]"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" stroke={false} /> Send Enquiry
                  </button>
                  <p className="text-center text-xs text-steel">
                    Sends your details to us instantly via WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/30"
      />
    </div>
  )
}

function Select({ id, name, label, options }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        required
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat px-4 py-3 text-slate-800 outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
