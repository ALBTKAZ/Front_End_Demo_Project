import { FunctionComponent } from "react";
import Attractions from "./Attractions";

const TripMenus: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between py-0 pr-1 pl-0 gap-[20px] text-center text-mini text-gray-100 font-components-button-large mq725:flex-wrap">
      <div className="flex flex-col items-center justify-start gap-[8px] text-left">
        <img
          className="w-[65.4px] h-[65.4px] relative"
          loading="eager"
          alt=""
          src="/hotel-icon.svg"
        />
        <div className="relative tracking-[0.04em]">Hotel</div>
      </div>
      <Attractions
        ticket="/ticket.svg"
        attractions="Attractions"
        propBackgroundColor="#ff9b53"
        propBackgroundColor1="#ff9b53"
        propWidth1="31.6px"
      />
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <img
          className="w-[65.4px] h-[65.4px] relative"
          loading="eager"
          alt=""
          src="/eats-icon.svg"
        />
        <div className="relative tracking-[0.04em]">Eats</div>
      </div>
      <Attractions
        ticket="/train.svg"
        attractions="Commute"
        propBackgroundColor="#fdbf00"
        propWidth="65px"
        propBackgroundColor1="#fdbf00"
        propWidth1="26.9px"
      />
      <div className="w-[70px] flex flex-col items-center justify-start gap-[8px]">
        <button className="cursor-pointer [border:none] pt-[19px] px-[19px] pb-5 bg-cornflowerblue-100 self-stretch rounded-2xl flex flex-row items-center justify-center">
          <div className="h-[65.4px] w-[70px] relative rounded-2xl bg-cornflowerblue-100 hidden" />
          <img
            className="h-[26.3px] w-[28.4px] relative z-[1]"
            alt=""
            src="/taxi.svg"
          />
        </button>
        <div className="relative tracking-[0.04em]">Taxi</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <button className="cursor-pointer [border:none] py-[21px] px-5 bg-yellowgreen rounded-2xl flex flex-row items-center justify-center">
          <div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-yellowgreen hidden" />
          <img
            className="h-[23.3px] w-[26.1px] relative z-[1]"
            alt=""
            src="/movie.svg"
          />
        </button>
        <div className="relative tracking-[0.04em]">Movies</div>
      </div>
    </div>
  );
};

export default TripMenus;
