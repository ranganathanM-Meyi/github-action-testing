import { useEffect, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, Camera, MapPin, Menu as MenuIcon, Phone, Star, X } from 'lucide-react'
import './styles.css'

const menuItems = [
  { name: 'Burrata & peaches', category: 'Antipasti', price: '18', description: 'Heirloom tomatoes, ripe summer peach, basil oil, grilled sourdough.', image: 'photo-1608039829572-78524f79c4c7', tag: 'A little sunshine' },
  { name: 'Hand-cut pappardelle', category: 'Pasta', price: '26', description: 'Slow-braised short rib, red wine sugo, pecorino, a little patience.', image: 'photo-1551183053-bf91a1d81141', tag: 'House favorite' },
  { name: 'Wild mushroom risotto', category: 'Pasta', price: '24', description: 'Porcini, carnaroli rice, aged parmesan, thyme, a splash of white wine.', image: 'photo-1476124369491-e7addf5db371', tag: 'Made to order' },
  { name: 'Wood-fired branzino', category: 'Secondi', price: '32', description: 'Whole market fish, lemon, caper brown butter, garden herbs.', image: 'photo-1519708227418-c8fd9a32b7a2', tag: 'From the coast' },
]

const categories = ['All', 'Antipasti', 'Pasta', 'Secondi']
const galleryImages = [
  { image: 'photo-1547592180-85f173990554', alt: 'Fresh seasonal salad on a ceramic plate' },
  { image: 'photo-1414235077428-338989a2e8c0', alt: 'Candlelit table set for dinner' },
  { image: 'photo-1476224203421-9ac39bcb3327', alt: 'Fresh pasta with herbs and parmesan' },
  { image: 'photo-1517248135467-4c7edcad34c4', alt: 'Warm and welcoming neighborhood restaurant' },
]
const testimonials = [
  { quote: 'The kind of place you want to keep to yourself, but love too much not to share.', name: 'Clara M.', source: 'Local guide' },
  { quote: 'Every plate felt like a little trip to somewhere sunny. We stayed for one more glass.', name: 'Daniel R.', source: 'Dinner guest' },
  { quote: 'A warm room, a beautiful wine list, and the best pappardelle I’ve had in years.', name: 'Sophie L.', source: 'Neighborhood regular' },
]

function imageUrl(id, width = 1000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [review, setReview] = useState(0)
  const [today] = useState(() => new Date().toISOString().split('T')[0])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const visibleItems = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  function submitReservation(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell min-h-screen">
      <div className="announcement"><span>GOOD FOOD, GOOD COMPANY</span><span className="announcement-dot" /><span>OPEN FOR LUNCH & DINNER</span><a href="#reservations">Find your table <ArrowUpRight size={13} /></a></div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Lūna home">lūna<span>.<i>®</i></span></a>
        <nav className={mobileMenuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#home" onClick={closeMobileMenu}>Home</a><a href="#story" onClick={closeMobileMenu}>Our story</a><a href="#menu" onClick={closeMobileMenu}>The menu</a><a href="#gallery" onClick={closeMobileMenu}>The space</a><a href="#contact" onClick={closeMobileMenu}>Find us</a>
          <a className="nav-mobile-cta" href="#reservations" onClick={closeMobileMenu}>Book a table <ArrowUpRight size={15} /></a>
        </nav>
        <a className="button button-dark header-cta" href="#reservations">Book a table <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X /> : <MenuIcon />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A NEIGHBORHOOD TRATTORIA · EST. 2018</p>
            <h1>A little taste<br />of <em>elsewhere.</em></h1>
            <p className="hero-description">The long lunches, the extra glass, the last piece of bread. At Lūna, there’s always room for one more.</p>
            <div className="hero-actions"><a className="button button-rust" href="#menu">Explore the menu <ArrowUpRight size={16} /></a><a className="text-link" href="#story">Get to know us <ArrowDown size={15} /></a></div>
            <div className="hero-note"><span className="hero-note-stars">★★★★★</span><span>4.9 from 800+ happy guests</span></div>
            <div className="hero-index"><span>01</span><span className="index-rule" /><span>04</span></div>
          </div>
          <div className="hero-visual">
            <img src={imageUrl('photo-1515003197210-e0cd7184f8b5', 1500)} alt="A beautifully plated seasonal meal at Lūna" />
            <div className="hero-image-wash" />
            <div className="hero-stamp"><span>MADE WITH</span><strong>♥</strong><span>IN THE CITY</span></div>
            <div className="hero-caption"><span>01 / THE TABLE IS YOURS</span><span>40°43′ N · 73°59′ W</span></div>
          </div>
          <div className="hero-bottom"><span>SEASONAL, ALWAYS. LOCAL, WHENEVER WE CAN.</span><span>SCROLL TO FIND YOUR FAVORITE <ArrowDown size={13} /></span></div>
        </section>

        <section className="intro-strip" aria-label="Our philosophy"><span>GOOD THINGS TAKE TIME</span><span className="strip-star">✳</span><span>POUR ANOTHER GLASS</span><span className="strip-star">✳</span><span>STAY A LITTLE LONGER</span><span className="strip-star">✳</span><span>GOOD THINGS TAKE TIME</span></section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line" /> SOMETHING FOR THE TABLE</p><h2>Made to be <em>shared.</em></h2></div><p className="heading-aside">A little Italian, a little local, and always made with what’s good right now.</p></div>
          <div className="menu-controls reveal" role="tablist" aria-label="Filter menu items">{categories.map((category) => <button key={category} className={activeCategory === category ? 'filter-button active' : 'filter-button'} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}<a href="#reservations" className="menu-full-link">View the full menu <ArrowUpRight size={15} /></a></div>
          <div className="menu-grid">{visibleItems.map((item, index) => <article className="dish-card reveal" key={item.name} style={{ '--delay': `${index * 80}ms` }}><div className="dish-image"><img src={imageUrl(item.image, 900)} alt={item.name} loading="lazy" /><span className="dish-tag">{item.tag}</span><span className="dish-number">0{index + 1}</span></div><div className="dish-info"><div className="dish-title"><h3>{item.name}</h3><span>${item.price}</span></div><p>{item.description}</p></div></article>)}</div>
          <div className="menu-bottom reveal"><span>OUR MENU CHANGES WITH THE SEASONS. YOUR FAVORITES STAY A LITTLE LONGER.</span><a href="#reservations">Come hungry <ArrowRight size={15} /></a></div>
        </section>

        <section className="story-section" id="story">
          <div className="story-photo reveal"><img src={imageUrl('photo-1559339352-11d035aa65de', 1200)} alt="A welcoming, candlelit corner of the Lūna dining room" loading="lazy" /><div className="photo-caption">A TABLE, ALWAYS SET FOR ONE MORE.</div></div>
          <div className="story-copy reveal"><p className="eyebrow"><span className="eyebrow-line" /> A NOTE FROM OUR KITCHEN</p><h2>Rooted in Italy.<br /><em>At home here.</em></h2><p>We opened Lūna with a simple idea: make the kind of food that brings people a little closer. Recipes passed around, ingredients from down the road, and a table that’s never in a hurry.</p><p>Our kitchen follows the seasons and the people who grow them. No fuss. Just honest cooking, good wine, and the feeling you’ve landed exactly where you’re meant to be.</p><a className="text-link story-link" href="#contact">A little more about us <ArrowUpRight size={15} /></a><div className="story-signature">With love, <em>The Lūna family</em></div></div>
        </section>

        <section className="quote-banner"><div className="quote-ornament">“</div><p>Come as you are.<br />Leave <em>a little happier.</em></p><span>THAT’S THE WHOLE RECIPE.</span></section>

        <section className="reviews-section section-pad"><div className="reviews-top reveal"><p className="eyebrow"><span className="eyebrow-line" /> KIND WORDS, FULL HEARTS</p><div className="review-controls"><button aria-label="Previous review" onClick={() => setReview((review + testimonials.length - 1) % testimonials.length)}><ArrowLeft size={17} /></button><span>0{review + 1} <i>/</i> 0{testimonials.length}</span><button aria-label="Next review" onClick={() => setReview((review + 1) % testimonials.length)}><ArrowRight size={17} /></button></div></div><div className="review-content reveal" key={review}><div className="review-stars"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“{testimonials[review].quote}”</blockquote><div className="review-author"><span className="author-mark">{testimonials[review].name.charAt(0)}</span><span><strong>{testimonials[review].name}</strong><small>{testimonials[review].source}</small></span></div></div><div className="review-foot"><span>THE BEST PART OF OUR DAY IS HAVING YOU HERE.</span><span>★ 4.9 / 5 · GOOGLE REVIEWS</span></div></section>

        <section className="gallery-section section-pad" id="gallery"><div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line" /> AROUND OUR TABLE</p><h2>A place to <em>belong.</em></h2></div><a className="text-link gallery-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Camera size={17} /> Follow along <ArrowUpRight size={14} /></a></div><div className="gallery-grid">{galleryImages.map((item, index) => <a key={item.image} href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={`gallery-item gallery-item-${index + 1} reveal`} aria-label={item.alt}><img src={imageUrl(item.image, 900)} alt={item.alt} loading="lazy" /><span className="gallery-hover"><Instagram size={18} /> @luna.trattoria</span></a>)}</div></section>

        <section className="reservation-section" id="reservations"><div className="reservation-copy"><p className="eyebrow"><span className="eyebrow-line" /> WE’LL SAVE YOU A SEAT</p><h2>Make a little<br /><em>room for Lūna.</em></h2><p>Good evenings start with a table. Tell us when you’re coming and we’ll take care of the rest.</p><div className="reservation-detail"><Clock3 size={17} /><span>Tue – Sun · 12 pm – 10 pm<br /><small>Closed Mondays (we’re making pasta)</small></span></div></div><form className="reservation-form" onSubmit={submitReservation}>
            {submitted ? <div className="success-state"><span className="success-icon"><Check size={23} /></span><p className="eyebrow">YOUR TABLE IS ALMOST READY</p><h3>We’ll be in touch.</h3><p>Thanks for thinking of us. We’ve received your request and will confirm your table shortly.</p><button className="text-link" type="button" onClick={() => setSubmitted(false)}>Make another reservation <ArrowRight size={15} /></button></div> : <><div className="form-heading"><span>LET’S MAKE IT A DATE</span><span>01 — 04</span></div><label>Your name<input required name="name" placeholder="How should we call you?" autoComplete="name" /></label><div className="form-row"><label>Your email<input required name="email" type="email" placeholder="you@example.com" autoComplete="email" /></label><label>Phone number<input required name="phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" /></label></div><div className="form-row"><label>Date<input required name="date" type="date" min={today} defaultValue={today} /></label><label>Party size<select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option><option value="6">6 guests</option><option value="7+">7+ guests</option></select></label></div><label>Time<select name="time" defaultValue="7:00 PM"><option>12:00 PM</option><option>1:00 PM</option><option>5:30 PM</option><option>6:00 PM</option><option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option></select></label><button type="submit" className="button button-rust reservation-submit">Request a table <ArrowUpRight size={16} /></button><p className="form-note">For parties of 7 or more, please call us at <a href="tel:+12125550148">(212) 555-0148</a>.</p></>}
          </form></section>

        <section className="contact-section section-pad" id="contact"><div className="contact-heading reveal"><p className="eyebrow"><span className="eyebrow-line" /> COME ON OVER</p><h2>Find your way<br /><em>to our table.</em></h2></div><div className="contact-details reveal"><div className="contact-detail"><MapPin size={18} /><div><span>FIND US</span><p>118 Orchard Street<br />New York, NY 10002</p><a href="https://maps.google.com/?q=118+Orchard+Street+New+York+NY" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13} /></a></div></div><div className="contact-detail"><Clock3 size={18} /><div><span>WHEN WE’RE HERE</span><p>Tue – Thu & Sun · 12–9 pm<br />Fri & Sat · 12–10 pm<br />Monday · Taking a little rest</p></div></div><div className="contact-detail"><Phone size={18} /><div><span>SAY HELLO</span><p><a href="tel:+12125550148">(212) 555-0148</a><br /><a href="mailto:ciao@lunatrattoria.com">ciao@lunatrattoria.com</a></p></div></div></div><div className="map-frame reveal"><iframe title="Map showing Lūna Trattoria in New York" src="https://maps.google.com/maps?q=118%20Orchard%20Street%2C%20New%20York%2C%20NY&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="wordmark footer-wordmark" href="#home">lūna<span>.<i>®</i></span></a><p>Good food, good company.<br />See you around the table.</p><a className="button button-light" href="#reservations">Save me a seat <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2025 LŪNA TRATTORIA. MADE WITH LOVE.</span><div><a href="#home">HOME</a><a href="#menu">MENU</a><a href="#reservations">RESERVATIONS</a></div><div className="footer-social"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={17} /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a></div></div></footer>
    </div>
  )
}

export default App
