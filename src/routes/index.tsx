import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

import storefront from "@/assets/falak-storefront.png.asset.json";
import bridal from "@/assets/bridal-crimson.jpg";
import saree from "@/assets/saree-champagne.jpg";
import reception from "@/assets/reception-wine.jpg";
import anarkali from "@/assets/anarkali-sage.jpg";
import occasion from "@/assets/occasion-colonnade.jpg";
import craft from "@/assets/craft-detail.jpg";

const phone = "+918688552411";
const whatsappMessage = encodeURIComponent(
  "Hello Falak The Bridal Boutique, I would like to enquire about your collections and visit the boutique.",
);
const whatsappUrl = `https://wa.me/${phone.replace("+", "")}?text=${whatsappMessage}`;
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Falak+The+Bridal+Boutique+Patthargatti+Charminar+Hyderabad";
const logoUrl = "/logo.webp";

const collections = [
  {
    number: "01",
    title: "BRIDAL LEHENGAS",
    description: "Silhouettes designed for the moments that belong entirely to you.",
    image: bridal,
    shape: "portrait",
  },
  {
    number: "02",
    title: "WEDDING SAREES",
    description: "Tradition, draped with a quietly modern point of view.",
    image: saree,
    shape: "portrait",
  },
  {
    number: "03",
    title: "RECEPTION EDIT",
    description: "After-dark elegance for an entrance remembered.",
    image: reception,
    shape: "landscape",
  },
  {
    number: "04",
    title: "ENGAGEMENT EDIT",
    description: "A refined beginning, expressed in colour and craft.",
    image: anarkali,
    shape: "portrait",
  },
  {
    number: "05",
    title: "ANARKALI",
    description: "Grace in motion, shaped for celebration.",
    image: anarkali,
    shape: "portrait",
  },
  {
    number: "06",
    title: "SHARARA & GHARARA",
    description: "Celebratory form with effortless movement.",
    image: occasion,
    shape: "landscape",
  },
  {
    number: "07",
    title: "OCCASION WEAR",
    description: "Considered looks for every unforgettable gathering.",
    image: reception,
    shape: "landscape",
  },
] as const;

const navigation = [
  ["Collections", "#collections"],
  ["Bridal", "#bridal"],
  ["The Boutique", "#boutique"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

const seoDescription =
  "Discover Falak The Bridal Boutique in Charminar, Hyderabad—a cinematic digital showcase of bridal lehengas, wedding sarees and occasion wear.";

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Falak The Bridal Boutique"
      className={className}
      width={2172}
      height={724}
    />
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falak The Bridal Boutique | Charminar, Hyderabad" },
      { name: "description", content: seoDescription },
      { property: "og:title", content: "Falak The Bridal Boutique | Charminar, Hyderabad" },
      { property: "og:description", content: seoDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ClothingStore", "LocalBusiness"],
          name: "Falak The Bridal Boutique",
          telephone: "+91 86885 52411",
          address: {
            "@type": "PostalAddress",
            streetAddress: "21-1-1045/1046 Madina Building, Patthargatti Main Road, Charminar",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500002",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "436" },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:30",
              closes: "23:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "11:00",
              closes: "22:30",
            },
          ],
        }),
      },
    ],
  }),
  component: Showroom,
});

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      {...(reduceMotion ? {} : { whileInView: { opacity: 1, y: 0 } })}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <a href="#top" className="brand-link" aria-label="Falak The Bridal Boutique home">
          <BrandLogo className="header-logo" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} className="nav-link" href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#boutique" className="nav-visit hidden lg:inline-flex">
          Visit the boutique <ArrowUpRight size={14} />
        </a>
        <button
          className="icon-control lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between">
              <a
                href="#top"
                aria-label="Falak The Bridal Boutique home"
                onClick={() => setOpen(false)}
              >
                <BrandLogo className="mobile-logo" />
              </a>
              <button
                className="icon-control"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <nav className="mt-auto flex flex-col" aria-label="Mobile navigation">
              {navigation.map(([label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.16 + index * 0.06 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <p className="eyebrow border-t border-current/20 pt-5">Charminar · Hyderabad</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  return (
    <section id="top" ref={ref} className="hero-section">
      <motion.img
        src={storefront.url}
        alt="Falak The Bridal Boutique storefront in Charminar, Hyderabad"
        className="hero-image"
        style={{ y: imageY }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 5, ease: "easeOut" }}
        width={1024}
        height={768}
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
        >
          <p className="eyebrow text-hero-foreground">Falak The Bridal Boutique</p>
          <p className="eyebrow mt-2 text-hero-muted">Charminar · Hyderabad</p>
        </motion.div>
        <div className="mt-8 overflow-hidden md:mt-10">
          <motion.h1
            className="hero-title"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.25, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            The Art
            <br />
            <em>of the Bride</em>
          </motion.h1>
        </div>
        <motion.div
          className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a href="#collections" className="cta-primary">
            Enter the collection <ArrowDown size={15} />
          </a>
          <a href="#boutique" className="cta-ghost">
            Visit the boutique <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
      <div className="scroll-mark">
        <span>Scroll to discover</span>
        <i />
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section id="about" className="intro-section">
      <Reveal>
        <p className="section-kicker">An invitation to celebrate</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="intro-title">
          Some celebrations
          <br />
          are remembered.
          <br />
          <em>Some are worn.</em>
        </h2>
      </Reveal>
      <Reveal className="intro-copy" delay={0.14}>
        <span className="rule" />
        <p>
          Falak The Bridal Boutique brings together bridal and occasion wear in the heart of
          Hyderabad, creating a destination for women searching for pieces worthy of their most
          memorable celebrations.
        </p>
      </Reveal>
    </section>
  );
}

function CollectionRoom({ item, index }: { item: (typeof collections)[number]; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <article
      id={index === 0 ? "bridal" : undefined}
      className={`collection-room ${reversed ? "collection-reverse" : ""}`}
    >
      <Reveal className="collection-visual">
        <div
          className={`image-reveal ${item.shape === "portrait" ? "aspect-[4/5]" : "aspect-[16/11]"}`}
        >
          <img
            src={item.image}
            alt={`${item.title.toLowerCase()} editorial collection`}
            loading="lazy"
            width={item.shape === "portrait" ? 1200 : 1600}
            height={item.shape === "portrait" ? 1600 : 1104}
          />
        </div>
      </Reveal>
      <Reveal className="collection-copy" delay={0.1}>
        <span className="collection-number">{item.number}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href="#contact" className="text-link">
          Explore edit <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </article>
  );
}

function Collections() {
  return (
    <section id="collections" className="collections-section">
      <div className="section-heading">
        <Reveal>
          <p className="section-kicker">The collections · 01—07</p>
          <h2>
            A showroom
            <br />
            <em>without walls.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>Seven expressions, composed for the many moods of a celebration.</p>
        </Reveal>
      </div>
      {collections.map((item, index) => (
        <CollectionRoom key={item.title} item={item} index={index} />
      ))}
    </section>
  );
}

function Lookbook() {
  return (
    <section className="lookbook-section">
      <div className="lookbook-heading">
        <Reveal>
          <p className="section-kicker">Editorial No. 01</p>
          <h2>
            The Falak <em>Edit</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>An expression of colour, craftsmanship and celebration.</p>
        </Reveal>
      </div>
      <div className="lookbook-grid">
        <Reveal className="lookbook-a">
          <img
            src={bridal}
            alt="Crimson bridal lehenga editorial"
            loading="lazy"
            width={1200}
            height={1600}
          />
        </Reveal>
        <Reveal className="lookbook-b" delay={0.1}>
          <img
            src={craft}
            alt="Detailed bridal embroidery and handwork"
            loading="lazy"
            width={1408}
            height={1008}
          />
        </Reveal>
        <Reveal className="lookbook-quote" delay={0.15}>
          <span>01 / DETAILS</span>
          <blockquote>
            “A celebration,
            <br />
            considered in
            <br />
            every detail.”
          </blockquote>
        </Reveal>
        <Reveal className="lookbook-c">
          <img
            src={saree}
            alt="Champagne wedding saree editorial"
            loading="lazy"
            width={1200}
            height={1600}
          />
        </Reveal>
        <Reveal className="lookbook-d" delay={0.1}>
          <img
            src={occasion}
            alt="Sharara and gharara occasion wear editorial"
            loading="lazy"
            width={1600}
            height={1104}
          />
        </Reveal>
      </div>
    </section>
  );
}

function FashionMoments() {
  const moments = [
    { title: "For the bride", image: bridal, align: "left" },
    { title: "For the celebration", image: occasion, align: "right" },
    { title: "For every entrance", image: reception, align: "left" },
  ];
  return (
    <section aria-label="The Falak fashion moments">
      {moments.map((moment, index) => (
        <div className={`fashion-moment fashion-${moment.align}`} key={moment.title}>
          <motion.img
            src={moment.image}
            alt={`${moment.title} fashion editorial`}
            loading="lazy"
            width={index === 0 ? 1200 : 1600}
            height={index === 0 ? 1600 : 1104}
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="fashion-shade" />
          <Reveal className="fashion-copy">
            <span className="eyebrow">Chapter 0{index + 1}</span>
            <h2>{moment.title}</h2>
          </Reveal>
        </div>
      ))}
    </section>
  );
}

function Boutique() {
  return (
    <section id="boutique" className="boutique-section">
      <div className="boutique-image-wrap">
        <motion.img
          src={storefront.url}
          alt="The illuminated Falak boutique storefront on Patthargatti Main Road"
          loading="lazy"
          width={1024}
          height={768}
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <div className="boutique-content">
        <Reveal>
          <p className="section-kicker">The physical showroom</p>
          <h2>
            Step into
            <br />
            <em>Falak.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="boutique-intro">
            At the heart of Patthargatti, Charminar, Falak brings its collections to life inside a
            boutique created for discovering your next unforgettable look.
          </p>
        </Reveal>
        <div className="boutique-details">
          <Reveal>
            <div>
              <span>Find us</span>
              <address>
                21-1-1045/1046 Madina Building
                <br />
                Patthargatti Main Road
                <br />
                Charminar
                <br />
                Hyderabad, Telangana 500002
              </address>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <span>Opening hours</span>
              <p>
                Mon–Sat
                <br />
                <strong>10:30 AM — 11:00 PM</strong>
              </p>
              <p className="mt-5">
                Sun
                <br />
                <strong>11:00 AM — 10:30 PM</strong>
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-9 flex flex-wrap gap-3">
          <a className="cta-primary" href={mapsUrl} target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={15} />
          </a>
          <a className="cta-outline-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp Falak
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section">
      <Reveal className="experience-title">
        <span className="section-kicker">The bridal experience</span>
        <h2>
          The search for
          <br />
          <em>the one.</em>
        </h2>
      </Reveal>
      <Reveal className="experience-image" delay={0.08}>
        <img
          src={craft}
          alt="Close view of bridal embroidery craftsmanship"
          loading="lazy"
          width={1408}
          height={1008}
        />
      </Reveal>
      <Reveal className="experience-copy" delay={0.12}>
        <p>
          A bridal look is more than a choice. It is a feeling—discovered in colour, silhouette,
          detail and the anticipation of the moment ahead.
        </p>
        <p>Visit Falak to explore bridal and occasion wear in person, in the heart of Charminar.</p>
      </Reveal>
    </section>
  );
}

function Rating() {
  return (
    <section className="rating-section">
      <Reveal>
        <p className="section-kicker">Loved by brides & families</p>
        <div className="rating-line">
          <strong>4.5</strong>
          <span aria-label="4.5 stars">★</span>
        </div>
        <p className="rating-reviews">436 Google Reviews</p>
        <a className="text-link mx-auto mt-7" href={mapsUrl} target="_blank" rel="noreferrer">
          View on Google <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="final-cta">
      <div className="final-watermark">FALAK</div>
      <Reveal className="relative z-10">
        <p className="section-kicker text-champagne">Charminar · Hyderabad</p>
        <h2>
          Your next
          <br />
          <em>look awaits.</em>
        </h2>
        <p>Discover the collection in person at Falak The Bridal Boutique, Charminar.</p>
        <div className="final-actions">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="cta-primary">
            Visit the boutique <ArrowUpRight size={15} />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="cta-ghost">
            WhatsApp us
          </a>
          <a href={`tel:${phone}`} className="cta-ghost">
            <Phone size={14} /> Call Falak
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a href="#top" className="footer-brand" aria-label="Falak The Bridal Boutique home">
        <BrandLogo className="footer-logo" />
      </a>
      <div className="footer-grid">
        <nav aria-label="Footer navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div>
          <span>Contact</span>
          <a href={`tel:${phone}`}>+91 86885 52411</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp Falak
          </a>
        </div>
        <address>
          <span>Visit</span>21-1-1045/1046 Madina Building
          <br />
          Patthargatti Main Road
          <br />
          Charminar, Hyderabad
          <br />
          Telangana 500002
        </address>
        <div>
          <span>Hours</span>
          <p>
            Mon–Sat · 10:30 AM — 11:00 PM
            <br />
            Sun · 11:00 AM — 10:30 PM
          </p>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026 Falak The Bridal Boutique</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function Showroom() {
  const [cursor, setCursor] = useState({ x: -40, y: -40 });
  const moveCursor = (event: MouseEvent<HTMLDivElement>) =>
    setCursor({ x: event.clientX, y: event.clientY });
  return (
    <div className="showroom" onMouseMove={moveCursor}>
      <motion.div
        className="cursor-dot"
        animate={{ x: cursor.x - 6, y: cursor.y - 6 }}
        transition={{ type: "spring", stiffness: 650, damping: 45 }}
        aria-hidden="true"
      />
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Collections />
        <Lookbook />
        <FashionMoments />
        <Boutique />
        <Experience />
        <Rating />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
