import { FunctionComponent } from "react";

const FormText: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-lg text-cornflowerblue-300 font-components-button-large">
      <b className="w-[1048.6px] relative tracking-[0.04em] uppercase inline-block max-w-full">
        Plan your next trip
      </b>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border [row-gap:20px] max-w-full mt-[-2px] text-11xl text-darkslategray-300">
        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[681px] max-w-full mq1000:min-w-full">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq1000:text-5xl mq450:text-lg">
            Most Popular Destinations
          </h2>
        </div>
        <div className="w-[231px] rounded-12xl bg-primary-contrast flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[9px] whitespace-nowrap text-right text-lg text-cornflowerblue-300">
          <div className="flex-1 relative tracking-[0.04em] font-medium">
            View all destinations
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FormText;
