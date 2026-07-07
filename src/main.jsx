import React from 'react';
import { createRoot } from 'react-dom/client';
import { Check, Mail, MapPin, Menu, PackageCheck, Sparkles, Store, X } from 'lucide-react';
import './styles.css';

const contactEmail = 'contact@laydluxury.com'; // Update contact email here if it changes.
const heroImageSrc = '/layd-edge-tamer-hero.png'; // Replace with your updated hero product photo path if needed.
const productImageSrc = '/layd-edge-tamer.png'; // Replace with your updated product photo path if needed.
const wholesaleImageSrc = '/layd-edge-tamer-wholesale.png'; // Replace with your updated wholesale shelf photo path if needed.

const features = [
  {
    title: 'Edges that stay together - without the white buildup',
    body: 'For the days when the hair needs to be sleek, clean, and not playing games.',
  },
  {
    title: 'Made for ponytails, braids, wigs, lace installs, and natural styles',
    body: "Whether it is a quick touch-up or a full slay, Lay'd Edge Tamer finishes the look.",
  },
  {
    title: 'Purse-friendly, stylist-approved',
    body: 'Small enough to keep on hand, strong enough to keep in rotation.',
  },
  {
    title: 'Luxury look. Shelf-ready energy.',
    body: 'Because the product should work good and look good sitting there too.',
  },
  {
    title: 'Easy checkout-counter buy',
    body: 'It is one of those "let me grab this real quick" products customers add before they leave.',
  },
];

const chips = [
  'Beauty Supply Stores',
  'Salons',
  'Braiders',
  'Wig Stylists',
  'Natural Hair Styles',
  'Lace Installs',
  'Ponytails',
  'Everyday Beauty Lovers',
];

const wholesalePacks = [
  {
    name: 'Starter Pack',
    jars: '6 jars',
    price: '$45',
    retail: '$77.94',
    profit: '$32.94',
    cta: 'Start With 6 Jars',
  },
  {
    name: 'Retail Pack',
    jars: '12 jars',
    price: '$90',
    retail: '$155.88',
    profit: '$65.88',
    cta: 'Start With 12 Jars',
    badge: 'Most Popular',
  },
  {
    name: 'Growth Pack',
    jars: '24 jars',
    price: '$180',
    retail: '$311.76',
    profit: '$131.76',
    cta: 'Stock 24 Jars',
  },
];

const wholesaleTrust = [
  'Local Houston brand',
  'Small starter packs available',
  'Local reorders available',
  'Great checkout-counter product',
  'Perfect for salons, beauty supply stores, braiders, and wig stylists',
];

const placements = [
  'Near edge control products',
  'Near braiding hair',
  'Near wig and lace products',
  'Near hair gel and styling products',
  'Near checkout for impulse purchases',
];

function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = [
    ['Home', '#home'],
    ['Product', '#product'],
    ['Wholesale', '#wholesale'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-copper/15 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="font-display text-2xl font-bold tracking-normal text-ink">
          Lay'd <span className="text-copper">Luxury Co.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-hotpink md:inline-flex">
          Inquire
        </a>
        <button
          className="rounded-full border border-copper/25 p-2 text-ink md:hidden"
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-copper/10 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-3 py-2 font-semibold text-ink" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Button({ href, children, variant = 'pink' }) {
  const styles =
    variant === 'pink'
      ? 'bg-hotpink text-white shadow-glow hover:bg-ink'
      : 'border border-copper/60 bg-white text-ink hover:border-hotpink hover:text-hotpink';

  return (
    <a href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition ${styles}`}>
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-band overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-copper/30 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-copper">
            Firm Hold Edge Control
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Edges Lay'd. Confidence Loaded.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl">
            Meet Lay'd Edge Tamer - firm-hold edge control made for sleek styles, clean finishes, and edges that don't start acting funny halfway through the day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Update this payment link when Shopify, Square, or checkout is ready. */}
            <Button href="#product">Shop Now</Button>
            <Button href="#wholesale" variant="copper">Wholesale Inquiry</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-ink">
            <span className="inline-flex items-center gap-2"><Sparkles size={17} className="text-hotpink" /> Luxury shelf appeal</span>
            <span className="inline-flex items-center gap-2"><Store size={17} className="text-copper" /> Wholesale ready</span>
          </div>
        </div>
        <div className="relative">
          <div className="product-stage">
            <img
              src={heroImageSrc}
              alt="Lay'd Edge Tamer by Lay'd Luxury Co."
              className="hero-photo mx-auto w-full rounded-lg object-cover object-center drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductOverview() {
  const rows = [
    ['Product', "Lay'd Edge Tamer"],
    ['Category', 'Hair Styling / Edge Control'],
    ['Size', '3.5 oz / 100 ml'],
    ['Suggested Retail', '$12.99'],
    ['Location', 'Houston, TX'],
    ['Contact', contactEmail],
  ];

  return (
    <section id="product" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="eyebrow">Product Overview</p>
          <h2 className="section-title">Retail-ready edge control with luxury energy.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {rows.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-copper/15 bg-blush p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-copper">{label}</p>
              <p className="mt-2 text-lg font-bold text-ink">{label === 'Contact' ? <a href={`mailto:${contactEmail}`}>{value}</a> : value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCustomersLoveIt() {
  return (
    <section className="section bg-nude/45">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">Why They'll Reach For It Again</p>
        <div className="grid gap-4 pt-7 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg bg-white p-5 shadow-soft">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-hotpink/10 text-hotpink">
                <Check size={21} />
              </div>
              <h3 className="text-base font-extrabold leading-6 text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-zinc-600">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestFor() {
  return (
    <section className="section bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl">
          <p className="eyebrow text-rose">Made For The Whole Hair Routine</p>
          <h2 className="section-title routine-section-title mt-2">For every style, touch-up, and finish.</h2>
          <div className="mt-5 space-y-4 text-lg leading-8 text-white/78">
            <p>Lay'd Edge Tamer was made for the girl who needs her look to stay together - whether she is heading to work, sitting in the salon chair, touching up her lace, refreshing her braids, or pulling her hair into that clean ponytail before she walks out the door.</p>
            <p>This is the jar customers grab when they want sleek edges without the flake, crunch, or white buildup. It belongs on beauty supply shelves, salon stations, bathroom counters, and right inside the purse for those "let me fix this real quick" moments.</p>
          </div>
        </div>
        <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-rose">Perfect for:</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-rose/40 bg-white/8 px-4 py-2 text-sm font-bold text-white">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wholesale() {
  return (
    <section id="wholesale" className="section wholesale-luxe overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_0.65fr]">
          <div className="max-w-4xl">
            <p className="eyebrow text-rose">Wholesale</p>
            <h2 className="section-title text-white">Put Lay'd Edge Tamer On Your Shelf Without Overstocking</h2>
            <p className="mt-5 text-lg leading-8 text-white/75 sm:text-xl">
              Start small, test demand, and restock locally. Lay'd Edge Tamer gives salons, beauty supply stores, braiders, and wig stylists a luxury-looking edge control product with strong impulse-buy potential.
            </p>
          </div>
          <div className="wholesale-glass-panel rounded-lg border border-copper/40 p-4 shadow-glow backdrop-blur-xl">
            {/* Replace this product image path with a new wholesale product photo whenever needed. */}
            <img
              src={wholesaleImageSrc}
              alt="Lay'd Edge Tamer displayed on a retail shelf"
              className="mx-auto aspect-[4/3] max-h-[360px] w-full rounded-lg bg-white/90 object-cover object-[center_38%]"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {wholesalePacks.map((pack) => (
            <article
              key={pack.name}
              className={`relative flex min-h-full flex-col rounded-lg border p-6 shadow-soft ${
                pack.badge ? 'border-hotpink bg-white text-ink shadow-glow' : 'wholesale-glass-card border-copper/40 text-white'
              }`}
            >
              {pack.badge && (
                <span className="absolute right-5 top-5 rounded-full bg-hotpink px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                  {pack.badge}
                </span>
              )}
              <div className={pack.badge ? 'pr-28' : ''}>
                <h3 className={`font-display text-3xl font-black tracking-normal ${pack.badge ? 'text-ink' : 'text-white'}`}>{pack.name}</h3>
                <p className={`mt-2 text-sm font-black uppercase tracking-[0.16em] ${pack.badge ? 'text-copper' : 'text-rose'}`}>{pack.jars}</p>
              </div>
              <div className="mt-7 grid gap-3">
                <div className={`rounded-lg border p-4 ${pack.badge ? 'border-copper/20 bg-blush' : 'wholesale-glass-soft border-copper/25'}`}>
                  <p className={`text-xs font-black uppercase tracking-[0.14em] ${pack.badge ? 'text-zinc-500' : 'text-white/65'}`}>Wholesale Price</p>
                  <p className={`mt-1 text-4xl font-black ${pack.badge ? 'text-hotpink' : 'text-white'}`}>{pack.price}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className={`rounded-lg border p-4 ${pack.badge ? 'border-copper/20 bg-white' : 'wholesale-glass-soft border-copper/25'}`}>
                    <p className={`text-xs font-black uppercase tracking-[0.14em] ${pack.badge ? 'text-zinc-500' : 'text-white/65'}`}>Retail Value</p>
                    <p className={`mt-1 text-xl font-black ${pack.badge ? 'text-ink' : 'text-rose'}`}>{pack.retail}</p>
                  </div>
                  <div className={`rounded-lg border p-4 ${pack.badge ? 'border-copper/20 bg-white' : 'wholesale-glass-soft border-copper/25'}`}>
                    <p className={`text-xs font-black uppercase tracking-[0.14em] ${pack.badge ? 'text-zinc-500' : 'text-white/65'}`}>Est. Profit</p>
                    <p className={`mt-1 text-xl font-black ${pack.badge ? 'text-hotpink' : 'text-hotpink'}`}>{pack.profit}</p>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-black transition ${
                  pack.badge ? 'bg-hotpink text-white shadow-glow hover:bg-ink' : 'bg-hotpink text-white shadow-glow hover:bg-white hover:text-ink'
                }`}
              >
                {pack.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="wholesale-glass-panel mt-8 rounded-lg border border-copper/45 px-5 py-5 text-center shadow-soft backdrop-blur-xl">
          <p className="text-lg font-black leading-7 text-white">
            Stores buy at <span className="text-rose">$7.50 per jar</span> and retail at <span className="text-rose">$12.99</span> - estimated profit is <span className="text-hotpink">$5.49 per jar.</span>
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {wholesaleTrust.map((item) => (
            <span key={item} className="wholesale-glass-chip inline-flex items-center gap-2 rounded-full border border-copper/35 px-4 py-2 text-sm font-bold text-white/90">
              <Check size={16} className="shrink-0 text-hotpink" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Placement() {
  return (
    <section className="section bg-blush">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Store Placement</p>
            <h2 className="section-title">Where It Sells Best</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {placements.map((placement) => (
              <li key={placement} className="flex items-center gap-3 rounded-lg bg-white p-4 font-bold text-ink shadow-sm">
                <PackageCheck size={20} className="shrink-0 text-copper" />
                {placement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="eyebrow">About The Brand</p>
          <h2 className="section-title">Beauty products with polish, confidence, and shelf appeal.</h2>
        </div>
        <div className="rounded-lg border border-copper/15 bg-ink p-7 text-white shadow-soft sm:p-9">
          <div className="space-y-5 text-lg leading-8 text-white/84">
            <p>Lay'd Luxury Co. is a Houston-based, Black woman-owned beauty brand created for women who do not play about their hair, their look, or their confidence.</p>
            <p>We bring bold, polished, shelf-ready products to women who want their style to stay together from the first mirror check to the last move of the day. Whether it is a sleek ponytail, fresh braids, a lace install, a wig slay, or just those edges that need to act right, Lay'd Edge Tamer was made to help you finish the look with confidence.</p>
            <p>This is not just another jar sitting on the shelf. Lay'd Edge Tamer was created to look good, feel premium, and give customers a product they are proud to pull out of their purse, keep on their vanity, or recommend to a client.</p>
            <p>At Lay'd Luxury Co., we believe beauty should be bold, polished, and a little extra - because when your edges are lay'd, your confidence hits different.</p>
            <p>From the beauty supply shelf to the salon chair, Lay'd Edge Tamer is here to help customers stay sleek, styled, and confidently lay'd.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const fields = [
    ['Name', 'text', 'name'],
    ['Business Name', 'text', 'businessName'],
    ['Email', 'email', 'email'],
    ['Phone', 'tel', 'phone'],
    ['City/State', 'text', 'cityState'],
    ['Are you a salon, beauty supply store, stylist, or customer?', 'text', 'customerType'],
    ['Interested order quantity', 'text', 'orderQuantity'],
  ];

  return (
    <section id="contact" className="section bg-nude/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Wholesale Inquiry</h2>
          <div className="mt-6 space-y-3 text-base font-semibold text-zinc-700">
            <p className="flex items-center gap-3"><MapPin size={20} className="text-copper" /> Houston, TX</p>
            <p className="flex items-center gap-3"><Mail size={20} className="text-hotpink" /> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          </div>
        </div>
        {/* Connect this form to Formspree, Google Forms, Shopify, or email handling later. */}
        <form
          name="wholesale-inquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you/"
          className="grid gap-4 rounded-lg bg-white p-5 shadow-soft sm:grid-cols-2 sm:p-7"
        >
          <input type="hidden" name="form-name" value="wholesale-inquiry" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          {fields.map(([label, type, name]) => (
            <label key={label} className={`block ${label.length > 35 ? 'sm:col-span-2' : ''}`}>
              <span className="form-label">{label}</span>
              <input className="form-field" name={name} type={type} placeholder={label} />
            </label>
          ))}
          <label className="block sm:col-span-2">
            <span className="form-label">Message</span>
            <textarea name="message" className="form-field min-h-32 resize-y" placeholder="Tell us what you need for your store or clients." />
          </label>
          <button className="rounded-full bg-hotpink px-6 py-3 text-sm font-black text-white shadow-glow transition hover:bg-ink sm:col-span-2" type="submit">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">Lay'd Luxury Co.</p>
          <p className="mt-2 text-sm text-white/70">Houston, TX</p>
        </div>
        <div className="text-sm font-semibold text-white/75 sm:text-right">
          <a href={`mailto:${contactEmail}`} className="text-rose">{contactEmail}</a>
          <p className="mt-2">Wholesale orders and local reorders available.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductOverview />
        <WhyCustomersLoveIt />
        <BestFor />
        <Wholesale />
        <Placement />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
