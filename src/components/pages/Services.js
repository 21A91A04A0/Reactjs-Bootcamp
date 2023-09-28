import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-4.jpg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-3.jpg"
              text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2>Explore these destinations</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="destination-1.jpg"
              text="Budapest, Hungary"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-2.jpg"
              text="Lisbon, Portugal"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-3.jpg"
              text="Berlin, Germany"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-4.jpg"
              text="London, England"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-5.jpg"
              text="Delft, Holland"
              label="Europe"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      
        <h1 className="color">Accommodation and Booking</h1>
        <center><p className="marg">As a leading DMC in Thailand, Travel Deck is connected to several budget-friendly and 
        luxurious hotel and resort properties that top the list of tourists waiting to explore the country. 
        We have strong relationships with many eminent 3-star, 4-star, and 5-star hotels and resorts 
        in all the best Thailand vacation destinations, helping us offer the best B2B contracted deals 
        and promotions.</p></center>
        <br/>
        <h1 className="color">Transport and Airport Assistance</h1>
        <center><p className="marg">We are a highly sought-after DMC company in Thailand with transport 
        affiliations across Thailand. We are known for providing exclusive, reliable, and comfortable transfers, 
        tours, and excursions. We offer a wide range of sparkling clean 3-seater to 45-seater vehicles that 
        include Sedans, SUVs, Mini Vans, Mini Coaches, and Luxury Coaches that move in, around, and across 
        the cities. Adding to our merit as a leading destination management company in Thailand are our 
        professional and experienced drivers who take complete care of travellers' experience while 
        supporting them responsibly on their journeys.</p></center>
        <br/>
        <h1 className="color">Hotel Bookings</h1>
        <center><p className="marg">As a leading DMC in Thailand, Travel Deck is connected to several 
        budget-friendly and luxurious hotel and resort properties that top the list of tourists waiting to 
        explore the country. Each of these hotels stands true to the promise of exuberance with its exotic 
        location and world-class amenities. We have strong relationships with many eminent 3-star, 4-star, 
        and 5-star hotels and resorts in all the best Thailand vacation destinations, helping us offer unique 
        and competitively priced B2B contracted deals and promotions. </p></center>
        <br/>
        <h1 className="color">Professional Guides</h1>
        <center><p className="marg">Why are we the best DMC for Thailand? Because we never forget to integrate 
        the lively soul of Thailand into the tour packages we help design. And, a big part of that soul is the 
        hospitality that our guides extend to all the tourists. We have licensed and professional guides that 
        familiarise travellers with the local history, culture, and functions. Though Thailand is a place where 
        one cannot get bored easily, our guides ensure that the tourists are kept entertained throughout and 
        feel safe while satiating their spirit of adventure.</p></center>
        <br/>
        <br/>
      <Footer />
    </>
  
  
  );
}