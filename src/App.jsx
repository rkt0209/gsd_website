import { company } from './data/site'
import Icon from './components/Icon'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Fleet from './components/Fleet'
import WhyUs from './components/WhyUs'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Accessibility: lets keyboard/screen-reader users jump past the nav */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-saffron focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Fleet />
        <WhyUs />
        <Coverage />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp action */}
      <a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-600 text-white shadow-xl transition-transform hover:scale-110"
      >
        <Icon name="whatsapp" className="h-7 w-7" stroke={false} />
      </a>
    </>
  )
}
