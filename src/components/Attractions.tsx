import { FunctionComponent, useMemo, type CSSProperties } from "react";

type AttractionsType = {
  ticket?: string;
  attractions?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propWidth1?: CSSProperties["width"];
};

const Attractions: FunctionComponent<AttractionsType> = ({
  ticket,
  attractions,
  propBackgroundColor,
  propWidth,
  propBackgroundColor1,
  propWidth1,
}) => {
  const attractionsIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      width: propWidth,
    };
  }, [propBackgroundColor, propWidth]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const ticketIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="flex flex-col items-center justify-start gap-[8px] text-center text-mini text-gray-100 font-components-button-large">
      <div
        className="rounded-2xl bg-sandybrown flex flex-row items-center justify-center p-[17px]"
        style={attractionsIconStyle}
      >
        <div
          className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-sandybrown hidden"
          style={backgroundStyle}
        />
        <img
          className="h-[31.3px] w-[31.6px] relative z-[1]"
          loading="eager"
          alt=""
          src={ticket}
          style={ticketIconStyle}
        />
      </div>
      <div className="relative tracking-[0.04em]">{attractions}</div>
    </div>
  );
};

export default Attractions;
