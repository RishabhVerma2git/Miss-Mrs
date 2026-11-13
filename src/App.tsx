import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const images = {
  profile: '/assets/images/image.png',
  bridal: '/assets/images/kTHcugoeibapB_cMiijNumFqusAI735MBdjbcJ5nrIQbbRK3TOdpFtHd4WPODsVTMeDkoaCfpcH4CQu.jfif',
  editorial: '/assets/images/e5DcRlg94p1_VlJ0ApH-2luYJTwu1oxIOlb9r-hyv21D3wu-ipmGEphqjcxZ2v9eb86SIPw3q29bbkM.jfif',
  salon: '/assets/images/AM-Z6dM1DRygn9Sw0uhK3IvP532lvicOmmCt30a5vWWNw4AcTnX-oq1h1RUTLx-p8vMg5wUUTgpQkut.jfif',
  work: '/assets/images/3uFFd1ctStqPwUPTULcwtkcKHD_S8lF9QypB8_iST-kODUiuoioT8NT2mKJeluY7dEvvuzgQZGO6uly.jfif',
};

const services = [
  { number: '01', name: 'Hair', description: 'Cuts, colour, care and styling shaped around your everyday signature.', image: images.editorial },
  { number: '02', name: 'Makeup', description: 'Polished, personal makeup for celebrations, portraits and every kind of glow.', image: images.bridal },
  { number: '03', name: 'Bridal & Groom', description: 'Thoughtful styling for the days you will remember forever.', image: images.salon },
  { number: '04', name: 'Beauty & Grooming', description: 'The considered finishing touches that make you feel your best.', image: images.work },
];

const galleryItems = [
  { label: 'Bridal Looks', image: images.bridal, className: 'gallery-tall' },
  { label: 'Hair Transformations', image: images.editorial, className: 'gallery-wide' },
  { label: 'Makeup', image: images.work, className: 'gallery-square' },
  { label: 'Salon Interiors', image: images.salon, className: 'gallery-wide' },
  { label: 'Bridal Looks', image: images.bridal, className: 'gallery-square' },
  { label: 'Makeup', image: images.editorial, className: 'gallery-tall' },
];

const locations = [
  'Sector 15, Vasundhara, Ghaziabad, Uttar Pradesh',
  'Apex Florus Market, Sector 18, Vasundhara, Ghaziabad, Uttar Pradesh',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All work');
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const visibleGallery = activeFilter === 'All work'
    ? galleryItems
    : galleryItems.filter((item) => item.label === activeFilter);

  return (
    <main className="site-shell">
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo('home')} aria-label="Miss-Mrs. Salon home">
          <span>miss-mrs.</span>
          <small>unisex salon</small>
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['About Us', 'Services', 'Our Work', 'Testimonials', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item === 'About Us' ? 'about' : item === 'Our Work' ? 'gallery' : item.toLowerCase())}>
              {item}
            </button>
          ))}
          <button className="nav-book" onClick={() => scrollTo('contact')}>Book an appointment <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-line" /> Vasundhara, Ghaziabad</p>
          <h1>Where beauty<br /><em>meets</em> confidence.</h1>
          <p className="hero-intro">Professional beauty, hair and grooming services designed to bring out the best version of you.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollTo('services')}>Explore our services <ArrowRight size={16} /></button>
            <button className="text-link" onClick={() => scrollTo('contact')}>Book your appointment <MoveUpRight size={15} /></button>
          </div>
          <div className="hero-note"><Sparkles size={16} /> Your beauty. Your style. Your moment.</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={images.bridal} alt="Bridal makeup look at Miss-Mrs. Salon" /></div>
          <div className="hero-side-label">Hair · Makeup · Grooming</div>
          <div className="hero-stamp"><span>Since</span><strong>Miss<br />Mrs.</strong><span>Beauty, your way</span></div>
        </div>
        <div className="hero-scroll"><span>Scroll to discover</span><span className="scroll-line" /></div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="section-kicker">01 <span /> About the salon</div>
        <div className="intro-grid">
          <div className="intro-heading"><p className="eyebrow">A little more about us</p><h2>Beauty is personal.<br /><em>We make it yours.</em></h2></div>
          <div className="intro-copy"><p>Miss-Mrs. Unisex Salon, led by Joohi Saxena, is dedicated to making every client feel confident, beautiful and comfortable.</p><p>From everyday grooming to special occasions, we bring professional care, creativity and attention to detail to every experience.</p><button className="circle-link" onClick={() => scrollTo('contact')} aria-label="Meet your beauty team"><ArrowRight size={22} /></button></div>
        </div>
        <div className="values-row">
          <div className="values-image"><img src={images.salon} alt="A welcoming salon interior" /></div>
          <div className="value-list">
            {['Personalized consultations', 'Hair and makeup expertise', 'Bridal & special occasion styling', 'A welcoming unisex experience'].map((value, index) => <div className="value-item" key={value}><span>0{index + 1}</span><strong>{value}</strong><Check size={17} /></div>)}
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading-row"><div><div className="section-kicker">02 <span /> Our services</div><h2>Come for the service.<br /><em>Stay for the feeling.</em></h2></div><p>Thoughtfully chosen beauty rituals for your everyday, your celebrations and all the moments in between.</p></div>
        <div className="services-grid">{services.map((service) => <article className="service-card" key={service.name}><div className="service-image"><img src={service.image} alt={`${service.name} service`} /><span>{service.number}</span></div><div className="service-info"><h3>{service.name}</h3><p>{service.description}</p><button onClick={() => scrollTo('contact')}>Explore service <ArrowRight size={15} /></button></div></article>)}</div>
      </section>

      <section className="bridal-section section-pad">
        <div className="section-kicker">03 <span /> Bridal & makeup</div>
        <div className="bridal-grid"><div className="bridal-image-main"><img src={images.bridal} alt="Bridal makeup and traditional styling" /><span className="image-caption">The bridal edit · 2024</span></div><div className="bridal-copy"><p className="eyebrow">The moment is yours</p><h2>Every bride<br /><em>deserves her moment.</em></h2><p>From the first conversation to the final detail, we create looks that feel like you — elevated for the moments that matter most.</p><button className="button button-outline" onClick={() => scrollTo('contact')}>Let's create your perfect look <ArrowRight size={16} /></button><div className="bridal-detail"><span>01</span><span>Traditional & modern styling</span><span>02</span><span>Personalized beauty consultations</span></div></div><div className="bridal-image-small"><img src={images.editorial} alt="Editorial beauty close-up" /></div></div>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="section-heading-row gallery-heading"><div><div className="section-kicker">04 <span /> Our work</div><h2>Looks we love.<br /><em>Made for you.</em></h2></div><a className="instagram-link" href="https://www.instagram.com/missmrssalon/" target="_blank" rel="noreferrer"><Instagram size={18} /> Follow along on Instagram <MoveUpRight size={15} /></a></div>
        <div className="filter-row">{['All work', 'Bridal Looks', 'Hair Transformations', 'Makeup', 'Salon Interiors'].map((filter) => <button className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>)}</div>
        <div className="gallery-grid">{visibleGallery.map((item, index) => <div className={`gallery-item ${item.className}`} key={`${item.label}-${index}`}><img src={item.image} alt={item.label} /><div className="gallery-overlay"><span>{item.label}</span><MoveUpRight size={18} /></div></div>)}</div>
      </section>

      <section className="why-section section-pad">
        <div className="why-intro"><div className="section-kicker">05 <span /> The Miss-Mrs. difference</div><h2>A little more<br /><em>than a salon.</em></h2><p>A space where expertise feels effortless, conversations feel easy and you leave feeling a little more like yourself.</p></div>
        <div className="why-grid">{[{ icon: <Sparkles />, title: 'Personalized attention', text: 'Every appointment begins with you.' }, { icon: <Scissors />, title: 'Professional expertise', text: 'Skill, care and a beautiful eye for detail.' }, { icon: <Star />, title: 'A considered experience', text: 'A calm, comfortable place to press pause.' }, { icon: <CalendarDays />, title: 'For every occasion', text: 'Everyday grooming to your biggest moments.' }].map((item) => <div className="why-card" key={item.title}><div className="why-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
      </section>

      <section className="testimonial-section section-pad" id="testimonials"><div className="quote-mark">“</div><div className="testimonial-content"><div className="section-kicker">06 <span /> A note from our chair</div><blockquote>Every visit should leave you feeling confident, cared for and completely yourself.</blockquote><p>— Joohi Saxena, Founder</p><div className="testimonial-note">Our client stories are coming soon.<br />Follow us on Instagram to see the latest from the salon.</div><a className="text-link" href="https://www.instagram.com/missmrssalon/" target="_blank" rel="noreferrer">Visit our Instagram <MoveUpRight size={15} /></a></div></section>

      <section className="locations-section section-pad"><div className="section-heading-row"><div><div className="section-kicker">07 <span /> Visit us</div><h2>Your beauty<br /><em>has a place here.</em></h2></div><p>Two convenient spaces in Vasundhara, made for your next beauty experience.</p></div><div className="locations-grid">{locations.map((location, index) => <article className="location-card" key={location}><span className="location-number">0{index + 1}</span><MapPin size={20} /><h3>{index === 0 ? 'Sector 15' : 'Apex Florus Market'}</h3><p>{location}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`} target="_blank" rel="noreferrer">Get directions <MoveUpRight size={14} /></a></article>)}</div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-panel"><div className="contact-copy"><div className="section-kicker">08 <span /> Make an appointment</div><h2>Your next beauty<br /><em>experience starts here.</em></h2><p>Have a special occasion coming up or simply want to treat yourself? Get in touch and let's plan your next look.</p><div className="contact-placeholder"><MessageCircle size={18} /><span>WhatsApp & phone details can be added here.</span></div></div>{submitted ? <div className="success-state"><div className="success-icon"><Check size={28} /></div><h3>Thank you for reaching out.</h3><p>Your enquiry has been noted for this demonstration. We’ll be ready to connect your preferred contact channel next.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={15} /></button></div> : <form className="appointment-form" onSubmit={handleSubmit}><label>Full name<input required type="text" placeholder="Your name" /></label><label>Phone number<input required type="tel" placeholder="Your phone number" /></label><label>Service interested in<select required defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.name}>{service.name}</option>)}</select><ChevronDown size={16} /></label><label>Preferred location<select required defaultValue=""><option value="" disabled>Choose a location</option><option>Sector 15, Vasundhara</option><option>Apex Florus Market, Sector 18</option></select><ChevronDown size={16} /></label><label>Preferred appointment date<input required type="date" /></label><label>Additional message<textarea placeholder="Tell us a little about what you have in mind" rows={3} /></label><button className="button button-dark form-submit" type="submit">Send appointment enquiry <ArrowRight size={16} /></button><small>This is a frontend enquiry form. Contact details can be connected when ready.</small></form>}</div></section>

      <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><div className="wordmark"><span>miss-mrs.</span><small>unisex salon</small></div><p>Beauty, confidence and a little more of you — in every appointment.</p><a href="https://www.instagram.com/missmrssalon/" target="_blank" rel="noreferrer"><Instagram size={17} /> @missmrssalon</a></div><div className="footer-links"><div><strong>Explore</strong><button onClick={() => scrollTo('about')}>About us</button><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('gallery')}>Our work</button></div><div><strong>Visit</strong>{locations.map((location) => <span key={location}>{location}</span>)}</div><div><strong>Connect</strong><span>Phone details coming soon</span><span>WhatsApp details coming soon</span><button onClick={() => scrollTo('contact')}>Book an appointment <ArrowRight size={14} /></button></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Miss-Mrs. Unisex Salon</span><span>Made with intention in Vasundhara</span></div></footer>
      <a className="floating-book" href="#contact" onClick={(event) => { event.preventDefault(); scrollTo('contact'); }}><Phone size={17} /> Book now</a>
    </main>
  );
}

export default App;
