
import React from 'react'
import FAQSectionContainer from '../../../components/FAQSectionContainer'


const bookingData = [
  { id: 1, question: "How to Book a Tour", answer: "You can book your tour online through our website or by calling our reservations team. Availability is updated in real-time." },
  { id: 2, question: "Deposits & Final Payment", answer: "A non-refundable deposit is required at the time of booking, with the final payment typically due 60 days before the tour start date." },
  { id: 3, question: "Travel Protection Plan", answer: "We offer several tiers of travel protection plans that cover cancellation, trip interruption, and medical emergencies. Details are available during checkout." },
  { id: 4, question: "If You Have To Cancel", answer: "Cancellation fees apply based on how close to the departure date the cancellation is made. Refer to our official Terms and Conditions for the full refund schedule." },
  { id: 5, question: "Travel Terms and Conditions", answer: "These terms govern the relationship between you and the tour operator regarding booking, payments, and itinerary changes. Your booking constitutes acceptance of these terms." },
];

const requirementsData = [
  { id: 1, question: "Passport & Visa Information", answer: "A passport valid for at least six months beyond your return date is required. Visa requirements vary by nationality and destination." },
  { id: 2, question: "Air Information and Luggage Restrictions", answer: "Specific airline details and baggage allowances will be provided closer to the departure date. Typically, one checked bag and one carry-on are permitted." },
  { id: 3, question: "Health, Safety and Mobility", answer: "We prioritize passenger health and safety. The tour involves moderate walking and may not be suitable for guests with severe mobility issues." },
  { id: 4, question: "Vaccination Information", answer: "Vaccination requirements depend on the destination country. We advise consulting your doctor and checking official travel health websites." },
  { id: 5, question: "Reading List", answer: "A curated list of books and articles related to the tour's destinations will be provided to enhance your journey." },
  { id: 6, question: "Weather", answer: "Anticipated weather patterns for the duration of the tour will be included in your final pre-departure documents." },
  { id: 7, question: "What To Pack", answer: "A detailed packing list, including suggested attire for various activities and climates, will be provided." },
];

const AccordionSection = () => {
  return (
   <>
   <div className=' max-w-[1320px] mx-auto flex justify-center py-10'>
    <FAQSectionContainer
    title={"About Booking This Tour"}
    items={bookingData}
    />
    
   </div>
   <div className=' max-w-[1320px] mx-auto flex justify-center py-10'>
    <FAQSectionContainer
    title={"Travel Requirement for this tour"}
    items={requirementsData}
    />
   </div>
   </>
  )
}

export default AccordionSection