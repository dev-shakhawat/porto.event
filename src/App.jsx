import Navbar from "./components/header/Navbar"
import EventHero from "./components/banner/EventHero"
import SpeakersSection from "./components/speaker/SpeakersSection"
import Event from "./components/event/Index"
import EventSchedule from "./components/shedule/EventShedule"
import StatisticsSection from "./components/statics/StatisticsSection"
import SponsorsSection from "./components/sponsore/SponsorsSection"
import VenueInformation from "./components/vanue/VenueInformation"
import EventFooter from "./components/footer/EventFooter"


function App() {

  return (
    <>
    <Navbar/>
    <EventHero/>
    <SpeakersSection/>
    <Event/>
    <EventSchedule/>
    <StatisticsSection/>
    <SponsorsSection/>
    <VenueInformation/>
    <EventFooter/>
    </>
  )
}

export default App
