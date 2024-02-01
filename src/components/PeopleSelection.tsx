import { FunctionComponent } from "react";

const PeopleSelection: FunctionComponent = () => {
  return (
    <div className="w-[311px] flex flex-col items-start justify-start gap-[39px] text-left text-3xl text-dimgray-200 font-components-button-large mq1225:hidden mq450:gap-[19px]">
      <div className="w-[228px] h-[47px] flex flex-col items-start justify-start gap-[24px] text-xl">
        <div className="w-[219.4px] relative tracking-[0.26px] inline-block mq450:text-base">
          10 out of 177 Results
        </div>
        <img
          className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/vector-21.svg"
        />
      </div>
      <div className="w-[297px] flex flex-col items-start justify-start gap-[24px]">
        <h3 className="m-0 relative text-inherit tracking-[0.26px] font-bold font-inherit mq450:text-lg">
          Stops
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mid">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="relative tracking-[0.26px]">1 Stop</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="flex-1 relative tracking-[0.26px]">2 Stops</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <h3 className="m-0 w-[189px] relative text-inherit tracking-[0.26px] font-bold font-inherit inline-block mq450:text-lg">
          Booking Options
        </h3>
        <div className="flex flex-col items-start justify-start gap-[16px] text-mid">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="relative tracking-[0.26px]">
              Book on Fickleflight
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="relative tracking-[0.26px]">
              Official Airline Websites
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <h3 className="m-0 w-[198px] relative text-inherit tracking-[0.26px] font-bold font-inherit inline-block mq450:text-lg">
          Flight Experience
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mid">
          <div className="w-[303px] flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="flex-1 relative tracking-[0.26px]">
              No overnight flights
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="flex-1 relative tracking-[0.26px]">
              No long stop-overs
            </div>
          </div>
        </div>
      </div>
      <img className="w-[228px] h-px relative" alt="" src="/vector-21.svg" />
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <h3 className="m-0 relative text-inherit tracking-[0.26px] font-bold font-inherit mq450:text-lg">
          Airlines
        </h3>
        <div className="flex flex-col items-start justify-start gap-[16px] text-mid">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="relative tracking-[0.26px]">Singapore Airlines</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="relative tracking-[0.26px]">Qatar Airways</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSelection;
