import { FunctionComponent } from "react";
import FlightCard2 from "./FlightCard2";
import FlightCard1 from "./FlightCard1";
import FlightCard from "./FlightCard";

const FlightCards: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full z-[1] text-left text-base text-dimgray-200 font-components-button-large">
      <div className="relative text-lg tracking-[0.26px] text-lightslategray">
        10 out of 177 Results
      </div>
      <FlightCard2 s730="S$ 723" />
      <FlightCard1
        sIA="/sia.svg"
        singaporeAirlines="Singapore Airlines"
        aM="8:45 PM"
        h55MNonStop="15H 10M, 2-stops"
        aM1="7:55 PM"
        s730="S$ 900"
        propRight="-20px"
        propGap="8px"
        propMinWidth="84px"
      />
      <FlightCard
        japan="/japan.svg"
        singaporeAirlines="Japan Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 859"
      />
      <FlightCard
        japan="/ana.svg"
        singaporeAirlines="ANA"
        aM="6:35 PM"
        h55MNonStop="19H 15M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propWidth="156px"
      />
      <FlightCard1
        sIA="/americanairlines.svg"
        singaporeAirlines="American Airlines"
        aM="8:20 PM"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propRight="-16px"
        propGap="12px"
        propMinWidth="79px"
      />
      <FlightCard2 s730="S$ 673" />
      <FlightCard
        japan="/japan-1.svg"
        singaporeAirlines="Japan Airlines"
        aM="10:25 PM"
        h55MNonStop="26H 45M, 1-stop"
        aM1="9:10 AM"
        s730="S$ 859"
        propWidth="unset"
      />
      <button className="cursor-pointer [border:none] pt-[25px] pb-[26px] pr-[29px] pl-7 bg-[transparent] flex flex-row items-center justify-center relative whitespace-nowrap">
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-cornflowerblue-200" />
        <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-primary-contrast text-center z-[1]">
          Show more results
        </div>
      </button>
    </div>
  );
};

export default FlightCards;
