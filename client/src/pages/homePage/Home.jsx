import React from "react";
import NavHeader from "../../components/NavHeader";
import BannerSection from "../../components/BannerSection";
import CommonDes from "../../components/CommonDes";
import ScrollCards from "../../components/ScrollCards";
import TicketCard from "../../components/TickeCard";
import FindYourPlace from "../../components/FindYourPlace";
import BlowSection from "../../components/BlowSection";
import ExperienceCards from "../../components/ExperienceCards";

const Home = () => {
  

  const commonDesc1 = {
    descTistle: " Mall Of: Endless Possibilities",
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book."
  }
  const commonDesc2 = {
    descTistle: " Experience The Finest Cuisine",
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book."
  }
  
  const slide = {
    title: "Book General Access Tickets and Enjoy the Attractions For Free",
    description: "Book General Access Ticket",
  };
  const slide2 = {
    title: "Curate Your Experience As you Like",
    description: "Book Ticket",
  };

  return (
    <div >
      <NavHeader />
      {/* banner section work */}
      <section>
        <BannerSection />
      </section>
      {/* close */}

      {/* features Section work */}
      <section style={{ backgroundColor: "#151D01", color: "white" }} className="middle-section">

        {/* // subsection for des and vedio */}

        <CommonDes title={commonDesc1.descTistle} description={commonDesc1.description} vedio={true} />
        {/* close */}
        {/* // TicketCard section */}
        <div
        >
          <TicketCard />

        </div>

        {/* close */}
        {/* description Bannar wali use kr rah ayahan */}

        {/* closed */}

     

        {/* scrollCards section */}
        <ScrollCards slide={slide} inline={false} />
        {/* closed */}

        {/* second Description ha ya */}
        <CommonDes title={commonDesc2.descTistle} description={commonDesc2.description} vedio={false} />
        {/* close */}

        {/* experienced card section */}

    <ExperienceCards />
        {/* close */}

        {/* this section have both the cards and description */}
        
          
  <ScrollCards slide={slide2} inline={true}  />
        
 


{/*  find your place comp */}
<FindYourPlace/>

{/*  */}
{/*  blow last section */}
<BlowSection/>

{/*  */}
        {/* close */}
      </section>
      {/* close */}
    </div>
  );
};

export default Home;
