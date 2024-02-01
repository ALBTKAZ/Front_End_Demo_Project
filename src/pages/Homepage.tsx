import { FunctionComponent } from "react";
import ParentNametechnical from "../components/ParentNametechnical";
import ContainerParisGreece from "../components/ContainerParisGreece";
import TripMenus from "../components/TripMenus";
import FormText from "../components/FormText";
import CardsContainer from "../components/CardsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStays from "../components/PopularStays";
import SubscribeSection from "../components/SubscribeSection";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[69px] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a] mq450:gap-[17px] mq725:gap-[34px]">
      <ParentNametechnical />
      <section className="self-stretch flex flex-col items-center justify-start gap-[80px] max-w-full shrink-0 text-left text-lg text-darkslategray-300 font-components-button-large mq450:gap-[20px] mq725:gap-[40px]">
        <div className="w-[1322px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[20px] max-w-full shrink-0">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Recent Searches
          </b>
          <ContainerParisGreece />
          <TripMenus />
        </div>
        <div className="w-[1320px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full shrink-0">
          <FormText />
          <CardsContainer />
        </div>
        <div className="w-[231.4px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] whitespace-nowrap text-right text-cornflowerblue-300">
          <div className="flex-1 relative tracking-[0.04em] font-medium">
            View all destinations
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
          />
        </div>
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <SubscribeSection />
    </div>
  );
};

export default Homepage;
