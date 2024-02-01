import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ColType = {
  parisImage?: string;
  paris?: string;
  logo?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const Col: FunctionComponent<ColType> = ({
  parisImage,
  paris,
  logo,
  propBackgroundImage,
}) => {
  const parisCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="flex flex-row items-center justify-center text-left text-xl text-primary-contrast font-components-button-large">
      <div
        className="w-72 rounded-3xs overflow-hidden shrink-0 flex flex-col items-end justify-start pt-2 pb-[115px] pr-5 pl-3 box-border bg-[url('/public/parisimage@2x.png')] bg-cover bg-no-repeat bg-[top]"
        style={parisCardStyle}
      >
        <img
          className="w-72 relative h-[182px] object-cover hidden z-[1]"
          alt=""
          src={parisImage}
        />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <b className="relative tracking-[0.02em] z-[1] mq450:text-base">
            {paris}
          </b>
          <div className="relative text-base tracking-[0.04em] uppercase text-right z-[1]">
            from
          </div>
        </div>
        <div className="relative text-19xl leading-[38px] font-baloo-bhai text-right whitespace-nowrap z-[1] mt-[-2px] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]">
          {logo}
        </div>
      </div>
    </div>
  );
};

export default Col;
