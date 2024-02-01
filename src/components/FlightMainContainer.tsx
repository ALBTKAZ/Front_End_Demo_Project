import { FunctionComponent } from "react";

type FlightMainContainerType = {
  sIN?: string;
  duration?: string;
  lAX?: string;
  departOn?: string;
  sep2021?: string;
};

const FlightMainContainer: FunctionComponent<FlightMainContainerType> = ({
  sIN,
  duration,
  lAX,
  departOn,
  sep2021,
}) => {
  return (
    <div className="flex-1 rounded-lg box-border flex flex-col items-center justify-start py-5 px-[19px] gap-[21px] min-w-[411px] max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large border-[1px] border-solid border-whitesmoke-200 mq725:min-w-full">
      <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[20px] mq450:flex-wrap">
        <h3 className="m-0 h-7 w-[44.7px] relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit inline-block shrink-0 mq450:text-lgi">
          {sIN}
        </h3>
        <img
          className="h-6 w-[117.4px] relative"
          loading="eager"
          alt=""
          src={duration}
        />
        <h3 className="m-0 h-7 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit text-right inline-block mq450:text-lgi">
          {lAX}
        </h3>
      </div>
      <div className="relative text-xl tracking-[0.04em] capitalize text-black mq450:text-base">
        <b>{departOn}</b>
        <span>{sep2021}</span>
      </div>
    </div>
  );
};

export default FlightMainContainer;
