import { FunctionComponent } from "react";
import FlightMainContainer from "./FlightMainContainer";

const ContainerParisGreece: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large mq725:gap-[18px]">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[15px] max-w-full">
        <FlightMainContainer
          sIN="SIN"
          duration="/duration.svg"
          lAX="LAX"
          departOn="Depart on: "
          sep2021="7 Sep 2021"
        />
        <FlightMainContainer
          sIN="MY"
          duration="/duration-1.svg"
          lAX="DUB"
          departOn="Depart on:"
          sep2021=" 9 Sep 2021"
        />
      </div>
      <div className="self-stretch relative text-lg tracking-[0.04em] uppercase text-lightgray">
        Prepare for your trip
      </div>
    </div>
  );
};

export default ContainerParisGreece;
