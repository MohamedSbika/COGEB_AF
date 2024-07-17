import HomeHeader from "../components/AddedComponents/HomeHeader";
import Card1 from "../components/AddedComponents/Card1";
import Card2 from "../components/AddedComponents/Card2";
import Card3 from "../components/AddedComponents/Card3";
import Contact from "../components/AddedComponents/Contatc";
import Map from "../components/AddedComponents/Map";
import Footer from "../components/Footer";
import RentPost from "../components/RentPost";
import SalePost from "../components/SalePost";
import OfferPost from "../components/OfferPost";
import TermineeProjects from "../components/ProjectsTermines";
import EnCoursProjects from "../components/ProjectsEnCours";
import NotStartedProjects from "../components/ProjectsNotStarted";



function Homee() {
  
  return (
    <div className="App">
      <HomeHeader/>
      <div>
        <Card1/>
        <RentPost/>
        <SalePost/>
        <OfferPost/>
        <Card2/>
        <Card3/>
        <TermineeProjects/>
        <EnCoursProjects/> 
        <NotStartedProjects/>  
        <Contact/>
        <Map/>
        <Footer/>
       </div>
    </div>
  );
}

export default Homee;
