import { div } from 'framer-motion/client'
import React from 'react'
import Overview from '../../../components/Overview'
import AccomodationCards from './AccomodationCards'
import ThingsToDO from './ThingsToDO'
import OvernightAccommodations from '../../experiencePage/OvernightAccommodations'
import BestTimeToVisit from './BestTimeToVisit'
import JourneysCarousel from '../../Accomodation/AccomodationDetails/JourneysCarousel'
import JourneyOverview from '../../../components/JourneyOverview'
import { useParams } from 'react-router-dom'
import ParticularDestinationPackage from '../../../components/ParticularDestinationPackage'
import SafariCard from '../../../components/SafariCard'
import ThingsToDoSection from '../../../components/ThingsToDo/ThingsToDoSection'
import AccommodationGrid from '../../../components/AccommodationGrid'
import BestTimeToVisitSection from '../../../components/BestTimeToVisit/BestTimeToVisitSection'

const safarisData = [
  {
    id: 1,
    country: "Tanzania",
    title: "Northern Quest",
    nights: 5,
    price: 10700,
    image:
      "https://media.krem.com/assets/KREM/images/a53bb1a7-f7ee-44f3-bf4f-0be105b605ed/a53bb1a7-f7ee-44f3-bf4f-0be105b605ed_1140x641.jpg",
  },
  {
    id: 2,
    country: "Tanzania",
    title: "Mara Savannah To Seashore",
    nights: 11,
    price: 9300,
    image:
      "https://www.ugandasafaristours.com/wp-content/uploads/2019/09/Day-4_Serengeti-National-Park.jpg",
  },
  {
    id: 3,
    country: "Tanzania",
    title: "Kill Conquest",
    nights: 9,
    price: 13500,
    image:
      "https://www.bwindiforestnationalpark.com/wp-content/uploads/botswana-buffalo.jpg",
  },
  {
    id: 4,
    country: "Tanzania",
    title: "Serengeti savannah to seashore",
    nights: 11,
    price: 10900,
    image:
      "https://media1.thrillophilia.com/filestore/8ud8uc29s3xpakhnv1okau8usdgn_53318451400_55f7967356_5k.jpg",
  },
  {
    id: 5,
    country: "Tanzania",
    title: "Tanzania under canvas",
    nights: 7,
    price: 10900,
    image:
      "https://media1.thrillophilia.com/filestore/ugzgu6758b9z89oh46cq2b0q9txg_1608633488_shutterstock_538363867.jpg?w=400&dpr=2",
  },
  {
    id: 6,
    country: "Tanzania",
    title: "Zanzibar Zenith",
    nights: 8,
    price: 18900,
    image:
      "https://wetu.com/imageHandler/c1920x1080/13944/zanzibar-istock-1301087425.jpg?fmt=jpg",
  },
];

const accommodations = [
  {
    id: 1,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/76/08/50/caption.jpg?w=900&h=500&s=1",
    nights: "Nights 1–3",
    title: "Cape Grace, A Fairmont Managed Hotel",
    location: "Cape Town, South Africa",
    tag: "Room Upgrade Available",
  },
  {
    id: 2,
    image: "https://api.avathi.com/images/kabini-river-lodge_1747031197.webp",
    nights: "Nights 4–5",
    title: "Lion Sands Game Reserve",
    location: "Kruger National Park Concession, South Africa",
  },
  {
    id: 3,
    image: "https://salaarc.com/wp-content/uploads/2018/09/Katie-Leaf-what-lodge-1.jpg",
    nights: "Nights 6–7",
    title: "Sabi Sabi Bush Lodge",
    location: "Sabi Sands Private Reserve, South Africa",
     tag: "Room Upgrade Available",
  },
  {
    id: 4,
    image: "https://static.wixstatic.com/media/12a327_43a1c2429e45453dba913eef8fd04fc5~mv2.jpg/v1/fit/w_2500,h_1330,al_c/12a327_43a1c2429e45453dba913eef8fd04fc5~mv2.jpg",
    nights: "Nights 8–9",
    title: "Fairlawns Boutique Hotel & Spa",
    location: "Johannesburg, South Africa",
  },
   {
    id: 5,
    image: "https://assets.milestoneinternet.com/cote-family-companies-parent/grand-view/siteimages/main-property-of-grand-view-lodge-spa-and-golf-resort-minnesota.jpg",
    nights: "Nights 1–3",
    title: "Cape Grace, A Fairmont Managed Hotel",
    location: "Cape Town, South Africa",
    tag: "Room Upgrade Available",
  },
  {
    id: 6,
    image: "https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-10066185/img-1714023621-2200-3264544-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg",
    nights: "Nights 4–5",
    title: "Lion Sands Game Reserve",
    location: "Kruger National Park Concession, South Africa",
  },
  {
    id: 7,
    image: "https://www.kellingheath.co.uk/app/uploads/fly-images/6008/3-1821x920.jpg",
    nights: "Nights 6–7",
    title: "Sabi Sabi Bush Lodge",
    location: "Sabi Sands Private Reserve, South Africa",
  },
  {
    id: 8,
    image: "https://www.thinkaec.com/wp-content/uploads/2020/06/Gardiner-Entry-Ext..jpg",
    nights: "Nights 8–9",
    title: "Fairlawns Boutique Hotel & Spa",
    location: "Johannesburg, South Africa",
  },
];

const experienceData = [
    {
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg",
    title: "South Africa: An Elegant Adventure",
  },
  {
    image:
      "https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg",
    title: "Botswana, South Africa & Zambia",
  },
  {
    image:
      "https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg",
    title: "Serengeti & Zanzibar Explorer",
  },
  {
    image:
      "https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ",
    title: "Morocco: Imperial Cities & Sahara",
  },
  {
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg",
    title: "South Africa: An Elegant Adventure",
  },
  {
    image:
      "https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg",
    title: "Botswana, South Africa & Zambia",
  },
  {
    image:
      "https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg",
    title: "Serengeti & Zanzibar Explorer",
  },
  {
    image:
      "https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ",
    title: "Morocco: Imperial Cities & Sahara",
  },
  ]

  const monthData = [
  {
    name: "Jan",
    season: "Summer Season",
    rating: "Excellent",
    color: "bg-[#A5D6A7]",
    description: [
      "January is one of the best months to visit South Africa, with warm temperatures and sunny days perfect for outdoor adventures.",
      "Enjoy beautiful beaches, safari drives, and vibrant city life in Cape Town and Johannesburg.",
      "Expect some crowds, as it’s peak travel season for locals and tourists alike.",
    ],
  },
  {
    name: "Feb",
    season: "Summer Season",
    rating: "Excellent",
    color: "bg-[#A5D6A7]",
    description: [
      "February continues the warm, sunny conditions ideal for beach days and game drives.",
      "Cape Town’s wine festivals and outdoor dining experiences are in full swing.",
      "It’s a great time to enjoy both the coast and wildlife reserves.",
    ],
  },
  {
    name: "Mar",
    season: "Autumn Begins",
    rating: "Excellent",
    color: "bg-[#A5D6A7]",
    description: [
      "March offers slightly cooler weather, fewer crowds, and amazing scenery.",
      "Perfect for hiking, safari, and photography with clear skies and lush landscapes.",
      "Still warm enough for coastal activities and cultural experiences.",
    ],
  },
  {
    name: "Apr",
    season: "Autumn",
    rating: "Good",
    color: "bg-[#F1F8C0]",
    description: [
      "April brings mild temperatures and fewer tourists, great for relaxed travel.",
      "Wildlife spotting improves as vegetation thins.",
      "Ideal for exploring cities, vineyards, and nature reserves alike.",
    ],
  },
  {
    name: "May",
    season: "Wet Season",
    rating: "Mixed",
    color: "bg-[#E1D7F8]",
    description: [
      "Expect some rain in Cape Town over the course of a lengthy stay, with day length shortening and temperatures remaining mild.",
      "The shift in the weather means beach relaxation is not always an option, leaving the many boutique shops and beachfront eateries a must, especially in the nearby coastal towns of St James and Kalk Bay.",
      "This is the perfect time of year to indulge the taste buds with culinary delights and wine tastings, both readily available with relatively few tourists around.",
      "The indoor markets bursting with fresh produce and homemade delights combine well with cultural explorations or a trip to the trendy V&A Waterfront.",
      "If you are wanting a little adventure, the winter months are considered the best for Great White shark cage diving, with the sharks at their most active.",
    ],
  },
  {
    name: "Jun",
    season: "Winter",
    rating: "Mixed",
    color: "bg-[#E1D7F8]",
    description: [
      "Cooler weather makes it perfect for safaris and wildlife spotting.",
      "Cape Town experiences rain, but landscapes are lush and green.",
    ],
  },
  {
    name: "Jul",
    season: "Winter",
    rating: "Mixed",
    color: "bg-[#E1D7F8]",
    description: [
      "July is ideal for safari lovers as animals gather around water sources.",
      "Expect chilly evenings and occasional rain in the Cape.",
    ],
  },
  {
    name: "Aug",
    season: "Winter",
    rating: "Good",
    color: "bg-[#F1F8C0]",
    description: [
      "August marks the start of wildflower season in the Western Cape.",
      "Great time for scenic drives and wildlife safaris.",
    ],
  },
  {
    name: "Sep",
    season: "Spring",
    rating: "Good",
    color: "bg-[#F1F8C0]",
    description: [
      "Spring begins with mild temperatures and blooming landscapes.",
      "A beautiful time to explore both coastal and inland areas.",
    ],
  },
  {
    name: "Oct",
    season: "Spring",
    rating: "Excellent",
    color: "bg-[#A5D6A7]",
    description: [
      "October offers warm weather and fewer crowds — perfect for adventure and relaxation.",
      "Ideal for whale watching and outdoor exploration.",
    ],
  },
  {
    name: "Nov",
    season: "Early Summer",
    rating: "Excellent",
    color: "bg-[#A5D6A7]",
    description: [
      "November welcomes summer with long, sunny days and vibrant energy.",
      "Perfect time for safaris, beaches, and festive events.",
    ],
  },
  {
    name: "Dec",
    season: "Summer",
    rating: "Excellent",
    color: "bg-[#A5D6A7]",
    description: [
      "December is lively and festive, with perfect beach weather.",
      "Expect crowds and higher prices, but amazing summer vibes.",
    ],
  },
];


const DestinationDetails = () => {

  const { areaName } = useParams();


  return (
    <>
     

<JourneyOverview
      subtitle="Land Journey"
      title="Cape Town"
      description="Experience the thrill of the world with a chobe game drive"
      image="https://www.discoverafrica.com/wp-content/uploads/2022/10/Boulders-Beach-in-Caoe-Town-scaled.jpg"
      days="8"
      price="$5,890 USD"
      journeyType="River Cruising"
      timeOfYear="Oct"
      cities="Amsterdam, Basel, Baden-Baden, Lucerne, Köln"
    />

      <div className="bg-[#f6f1e9]">
        <Overview
          title="Welcome To Africa"
          subtitle="African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."
          description="Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below"
        />
        {/* <AccomodationCards/> */}
        <ParticularDestinationPackage
       
      data={safarisData}
      CardComponent={SafariCard}
      emptyMessage="No safaris found."
        />

       
      </div>
       {/* <ThingsToDO/> */}

       <ThingsToDoSection
      // apiUrl="http://localhost:8000/api/things-to-do/capetown"
      title="What to do in Cape Town"
      subtitle="Things to do"
      description1="Ever heard the phrase, “a world in one country”? Well, Cape Town is a world in one city! Surrounded by craggy mountains, ocean, plenty of lush greenery and rolling countryside, but also a bustling city scene, vivacious cultures and history, you won’t be short of things to do. We recommend starting in the city with a guided tour. Choose your focus from history, food or art (or all three), and discover the spots away from the guidebooks. If a guide isn’t your thing, wander the streets and seek out your own gems. Follow it all up with a connoisseur gin tasting and dinner in an award-winning restaurant and you have Cape Town in a nutshell."
      description2="Then there’s the great outdoors. Table Mountain dominates the landscape and with several hiking routes to choose from (guided or un-guided), and the cable car, there’s no excuse for not reaching the top. Other highlights around the city include the Southern Peninsula, home to African penguins, cliff-carved roads, lighthouses and incredible views, and the sun-kissed beaches of the Atlantic Seaboard. And we haven’t even started on the markets, paragliding activities, surfing or shopping yet…"
    staticData={experienceData}
    />
        {/* <OvernightAccommodations/> */}

   <AccommodationGrid
      title="Overnight Accommodations"
      data={accommodations}
      onCardClick={''}
    />

    <BestTimeToVisitSection
      title="When to go on a Cape Town Trip"
      subtitle="Best time to visit"
      staticMonths={monthData}
    />

        {/* <BestTimeToVisit/> */}
        <JourneysCarousel/>
    </>
  )
}

export default DestinationDetails