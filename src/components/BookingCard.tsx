import { FunctionComponent, useMemo, type CSSProperties } from "react";

type BookingCardType = {
  airlineLogo?: string;
  singaporeAirlines?: string;
  price?: string;
  depCode?: string;
  depName?: string;
  flightIcon?: string;
  arrCode?: string;
  arrName?: string;
  classIcon?: string;
  flightClass?: string;
  calender?: string;
  numPeople?: string;
  expedia?: string;
  timeAgo?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
};

const BookingCard: FunctionComponent<BookingCardType> = ({
  airlineLogo,
  singaporeAirlines,
  price,
  depCode,
  depName,
  flightIcon,
  arrCode,
  arrName,
  classIcon,
  flightClass,
  calender,
  numPeople,
  expedia,
  timeAgo,
  propTextAlign,
}) => {
  const arrNameStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="self-stretch rounded-md flex flex-col items-start justify-start py-2.5 pr-[11px] pl-[9px] gap-[10px] text-left text-xs text-lightslategray font-inter border-[1px] border-solid border-whitesmoke-200">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-6 w-6 relative object-cover"
            loading="eager"
            alt=""
            src={airlineLogo}
          />
          <div className="relative leading-[16px]">{singaporeAirlines}</div>
        </div>
        <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right whitespace-nowrap">
          {price}
        </div>
      </div>
      <div className="self-stretch rounded bg-whitesmoke-100 flex flex-row items-center justify-start p-2 gap-[7px] text-base text-cornflowerblue-200">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="relative font-semibold">{depCode}</div>
          <div className="relative text-xs text-lightslategray">{depName}</div>
        </div>
        <img className="h-3 w-[47.8px] relative" alt="" src={flightIcon} />
        <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
          <div className="relative font-semibold">{arrCode}</div>
          <div
            className="relative text-xs text-lightslategray text-right"
            style={arrNameStyle}
          >
            {arrName}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[31px] pl-0 gap-[8px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src={classIcon}
          />
          <div className="relative leading-[16px]">{flightClass}</div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[34px] pl-0 gap-[8px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src={calender}
          />
          <div className="relative leading-[16px]">{numPeople}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between pt-2 px-0 pb-0 gap-[20px] border-t-[1px] border-solid border-whitesmoke-200">
        <div className="relative leading-[16px]">
          <span>{`Booked on `}</span>
          <span className="text-royalblue">{expedia}</span>
        </div>
        <div className="relative leading-[16px] font-semibold text-orange-100">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
