import { FunctionComponent, useMemo, type CSSProperties } from "react";

type FlightCardType = {
  japan?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FlightCard: FunctionComponent<FlightCardType> = ({
  japan,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propWidth,
}) => {
  const airlineSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch rounded-md bg-primary-contrast box-border flex flex-row flex-wrap items-center justify-start py-0 pr-2 pl-[25px] gap-[49px] max-w-full text-left text-base text-dimgray-200 font-components-button-large border-[0.7px] border-solid border-lightgray mq750:gap-[24px]">
      <div
        className="flex flex-row items-center justify-start py-5 pr-[5px] pl-0 gap-[6px]"
        style={airlineSectionStyle}
      >
        <img
          className="h-[46px] w-[34.8px] relative"
          loading="eager"
          alt=""
          src={japan}
        />
        <div className="relative tracking-[0.26px]">{singaporeAirlines}</div>
      </div>
      <div className="w-[331.2px] flex flex-row items-end justify-start py-5 pr-0.5 pl-0 box-border gap-[12px] min-w-[215px] max-w-full text-2xl text-cornflowerblue-200 mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
            {aM}
          </div>
          <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
            SIN
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[21px] min-w-[79px] text-center text-base text-gray-100">
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

export default FlightCard;
