import { FunctionComponent } from "react";
import BookingCard from "./BookingCard";

const BookingCards: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-xs text-lightslategray font-inter">
      <BookingCard
        airlineLogo="/airlinelogo@2x.png"
        singaporeAirlines="Singapore Airlines"
        price="$1128"
        depCode="SIN"
        depName="Singapore"
        flightIcon="/flight-icon.svg"
        arrCode="LAX"
        arrName="Los Angeles"
        classIcon="/class-icon.svg"
        flightClass="Economy"
        calender="/calender.svg"
        numPeople="2 Adults"
        expedia="Expedia"
        timeAgo="1s ago!"
        propTextAlign="right"
      />
      <BookingCard
        airlineLogo="/icon@2x.png"
        singaporeAirlines="American Airlines"
        price="$1024"
        depCode="SFO"
        depName="San Francisco"
        flightIcon="/flight-icon.svg"
        arrCode="SIN"
        arrName="Singapore"
        classIcon="/class-icon.svg"
        flightClass="First Class"
        calender="/calender.svg"
        numPeople="1 Adults"
        expedia="Kayak"
        timeAgo="2s ago!"
        propTextAlign="right"
      />
      <BookingCard
        airlineLogo="/icon-1@2x.png"
        singaporeAirlines="Japan Airlines"
        price="$2996"
        depCode="PHX"
        depName="Phoenix"
        flightIcon="/flight-icon-2.svg"
        arrCode="DXB"
        arrName="Dubai"
        classIcon="/class-icon-2.svg"
        flightClass="Economy"
        calender="/calender-2.svg"
        numPeople="3 Adults"
        expedia="Skyscanner"
        timeAgo="3s ago!"
        propTextAlign="left"
      />
      <div className="self-stretch rounded-10xs bg-cornflowerblue-400 flex flex-row items-center justify-center py-[7px] px-2.5 gap-[4px] whitespace-nowrap text-cornflowerblue-200">
        <div className="relative leading-[16px]">Show more</div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 object-contain min-h-[16px]"
          alt=""
          src="/icon--back@2x.png"
        />
      </div>
    </div>
  );
};

export default BookingCards;
