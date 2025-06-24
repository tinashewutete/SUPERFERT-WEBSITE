import React from 'react'
import logo from '../images/superfert logo.png'
import heroimg from '../images/heroimg.png'
import './Home.css'
import seedco from '../images/seedco_logo 2.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.jpg'
import WhoWeAre from '../images/who we are.jpg'
import saga from '../images/saga.png'
import ProductCard from './ProductCard'
import ContactForm from './ContactForm'

const Home = () => {
  return (
    <>
      <div className="hero">
        <img src={logo} alt="Superfert Logo" className="logo" />
        <img src={heroimg} alt="Hero" className="hero-img" />
        <div className="hero-text1">
          <h1>The Formula <br />for Success,<br /> naturally.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div className='hero-btns'>
            <button className='gray-btn'>Contact Us</button>
            <button className='white-btn'>Products ➡</button>
            
          </div>
          <p className='scroll'>SCROLL  ⬇</p>
        </div>
      </div>
      <div className='partners'>
        <h2>Fertilisers. Seed. Grain.</h2>
        <p>SuperFert Fertilizer is powered by the FSG Company and is a proud partner of</p>
        <div className='partner-logos'>
          <img src={seedco} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
          <img src={seedco} />
        </div>
      </div>
      <div className='made-in-zim'>
        <div className='overlay' />
        <div className='made-in-zim-text'>
          <div className='green-line1' />
          <h2>Made on Zimbabwean soil,<br />for Africa’s soil.</h2>
          <p>SuperFert Fertilizer is manufactured in Zimbabwe,<br />and proudly serves to enrich the soils of Africa.</p>
        </div>
      </div>
      <div className='who-we-are'>
        <div className='green-line' />
        <div className='who-we-are-text'>
          <h2>Who We Are</h2>
          <p>We operate nationwide in association with experienced third party distributors of agricultural inputs. Our internal transport and logistics division provides consistently reliable stock levels to large commercial and corporate farming enterprises nationwide, as well as retail outlets ensuring our retail partners are able to provide easily accessible and competitively priced fertilizers to all rural and small scale farmers</p>
          <button className='gray-btn'>Read More</button>
        </div>
        <div className='who-we-are-img'>
          <img src={WhoWeAre} />
        </div>
      </div>
      <div className='products'>
        <div className='logo-container'>
          <img src={logo} alt="Made in Zim" />
          <h2>SuperFert Products.</h2>
        </div>
        <div className='products-txt-img-container'>
          <div className='products-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.
              Fuga veritatis vel qui cupiditate praesentium rerum.
              Nam ea consectetur ullam, reprehenderit voluptatem laboriosam!
              Fugit voluptate modi fuga dolorum enim vitae!
              Iure deserunt consequuntur, quia omnis officiis maxime.
              Dolorum, sed beatae modi tempore sint perspiciatis?
              Sed quam reprehenderit voluptatum commodi laboriosam! Harum.</p>
            <button className='yellow-btn'>More Info</button>
          </div>
          <div className='image-container'>
            <img src={saga} alt="Saga" className='saga-logo' />
          </div>
        </div>
        <div className='grid-wrapper'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className='contact'>
        <div className='contact-text'>
          <h2>For<br />Queries,or<br />Inquiries.</h2>
          <p>Get in touch with us.</p>
        </div>
        <div className='contact-form'>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Home
