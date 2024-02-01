import { FunctionComponent } from "react";

type FlightCard2Type = {
  s730?: string;
};

const FlightCard2: FunctionComponent<FlightCard2Type> = ({ s730 }) => {
  return (
    <div className="rounded-md bg-primary-contrast box-border flex flex-row items-center justify-start py-0 pr-[7px] pl-6 gap-[45px] max-w-full text-left text-base text-dimgray-200 font-components-button-large border-[0.7px] border-solid border-lightgray mq750:flex-wrap mq750:gap-[22px]">
      <div className="flex flex-row items-center justify-start py-5 pr-px pl-0 gap-[6px]">
        <img
          className="h-[46px] w-[34.8px] relative"
          loading="eager"
          alt=""
          src="/turkish.svg"
        />
        <div className="relative tracking-[0.26px]">Turkish Airlines</div>
      </div>
      <div className="flex flex-col items-start justify-start py-5 pr-1.5 pl-0 box-border max-w-full text-2xl text-cornflowerblue-200">
        <div className="flex flex-row items-end justify-start py-0 pr-0.5 pl-0 gap-[12px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
              11:35 PM
            </div>
            <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
              SIN
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[21px] text-center text-base text-gray-100">
            <img
              className="w-[107.1px] h-[15.1px] relative"
              loading="eager"
              alt=""
              src="/flighticon.svg"
            />
            <div className="relative tracking-[0.21px] whitespace-nowrap">
              33H 10M, 1-stop
            </div>
          </div>
          <div className="w-[91px] flex flex-col items-end justify-start gap-[8px] text-right">
            <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
              4:45 PM
            </div>
            <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
              LAX
            </div>
          </div>
        </div>
      </div>
      <div className="w-32 flex flex-row items-center justify-start text-center text-5xl text-orange-100">
        <img
          className="h-[100px] w-px relative"
          loading="eager"
          alt=""
          src="/vector-11.svg"
        />
        <b className="flex-1 relative tracking-[0.34px] shrink-0 whitespace-nowrap mq450:text-lgi">
          {s730}
        </b>
      </div>
    </div>
  );
};

export default FlightCard2;
