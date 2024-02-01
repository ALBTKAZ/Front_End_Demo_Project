import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";

type HotelCardType = {
  matterhornSuitesImage?: string;
  entireBungalow?: string;
  video?: string;
  matterhornSuites?: string;
  night?: string;
  basicCommandButtonGroup?: string;
  inputFieldsContainerFrame?: string;
  reviews?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propBorder?: CSSProperties["border"];
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  matterhornSuitesImage,
  entireBungalow,
  video,
  matterhornSuites,
  night,
  basicCommandButtonGroup,
  inputFieldsContainerFrame,
  reviews,
  propGap,
  propWidth,
  propBorder,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const inputNameDreamLocationStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const lodgingsFrameSetStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const moreDetailsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="h-[442px] flex flex-row items-center justify-center text-left text-base text-gray-100 font-components-button-large">
        <div className="self-stretch w-[296px] rounded-3xs bg-primary-contrast box-border flex flex-col items-center justify-start py-[15px] px-3 gap-[23px] border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 hover:cursor-pointer">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src={matterhornSuitesImage}
          />
          <div className="self-stretch h-[189px] flex flex-col items-start justify-start">
            <div
              className="self-stretch flex flex-row items-start justify-start gap-[11px]"
              style={inputNameDreamLocationStyle}
            >
              <div className="flex-1 relative tracking-[0.02em]">
                {entireBungalow}
              </div>
              <img
                className="h-[25px] w-[25px] relative overflow-hidden shrink-0 cursor-pointer"
                loading="eager"
                alt=""
                src={video}
                onClick={openMatterhornPopup}
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[23px] text-3xl text-darkslategray-300">
              <div
                className="w-[234px] flex flex-col items-start justify-start gap-[6px]"
                style={lodgingsFrameSetStyle}
              >
                <h3 className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">
                  {matterhornSuites}
                </h3>
                <div className="self-stretch relative text-lg tracking-[0.04em]">
                  {night}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[9px] text-base">
                <div className="flex flex-row items-start justify-start gap-[3px]">
                  <img
                    className="h-[17.2px] w-[16.6px] relative"
                    alt=""
                    src={basicCommandButtonGroup}
                  />
                  <div className="relative tracking-[0.04em] font-medium">
                    {inputFieldsContainerFrame}
                  </div>
                </div>
                <div className="flex-1 relative tracking-[0.04em] text-cornflowerblue-200">
                  {reviews}
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer p-2.5 bg-[transparent] self-stretch rounded overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-lavender-200 hover:bg-lightsteelblue-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightsteelblue-200"
              style={moreDetailsButtonStyle}
            >
              <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                More details
              </div>
            </button>
          </div>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCard;
