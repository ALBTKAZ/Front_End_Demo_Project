import { FunctionComponent, useMemo, type CSSProperties } from "react";

type FlightCard1Type = {
  sIA?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FlightCard1: FunctionComponent<FlightCard1Type> = ({
  sIA,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propRight,
  propGap,
  propMinWidth,
}) => {
  const singaporeAirlinesStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const flightDetailsSectionStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const hMNonstopStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch rounded-md bg-primary-contrast box-border flex flex-row flex-wrap items-center justify-start py-0 pr-2 pl-[25px] gap-[49px] max-w-full text-left text-base text-dimgray-200 font-components-button-large border-[0.7px] border-solid border-lightgray mq750:gap-[24px]">
      <div className="w-[156px] flex flex-row items-center justify-start py-5 px-0 box-border relative gap-[7px]">
        <img
          className="h-[46px] w-[34.8px] relative"
          loading="eager"
          alt=""
          src={sIA}
        />
        <div
          className="absolute my-0 mx-[!important] top-[33.5px] right-[-20px] tracking-[0.26px]"
          style={singaporeAirlinesStyle}
        >
          {singaporeAirlines}
        </div>
      </div>
      <div
        className="w-[331.2px] flex flex-row items-end justify-start py-5 pr-0.5 pl-0 box-border gap-[8px] min-w-[215px] max-w-full text-2xl text-cornflowerblue-200 mq450:flex-wrap"
        style={flightDetailsSectionStyle}
      >
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
            {aM}
          </div>
          <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
            SIN
          </div>
        </div>
        <div
          className="flex-1 flex flex-col items-center justify-start gap-[21px] min-w-[84px] text-center text-base text-gray-100"
          style={hMNonstopStyle}
        >
          <img
            className="w-[107.1px] h-[15.1px] relative"
            alt=""
            src="/flighticon.svg"
          />
          <div className="relative tracking-[0.21px] whitespace-nowrap">
            {h55MNonStop}
          </div>
        </div>
        <div className="w-[91px] flex flex-col items-end justify-start gap-[8px] text-right">
          <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
            {aM1}
          </div>
          <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
            LAX
          </div>
        </div>
      </div>
      <div className="w-32 flex flex-row items-center justify-start text-center text-5xl text-orange-100">
        <img className="h-[100px] w-px relative" alt="" src="/vector-11.svg" />
        <b className="flex-1 relative tracking-[0.34px] shrink-0 whitespace-nowrap mq450:text-lgi">
          {s730}
        </b>
      </div>
    </div>
  );
};

export default FlightCard1;
