import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import HotelCard from "./HotelCard";

const PopularStays: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 box-border gap-[20px] max-w-full shrink-0 text-left text-11xl text-darkslategray-300 font-components-button-large">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-center justify-start [row-gap:20px] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit inline-block min-w-[159px] max-w-full mq1000:text-5xl mq450:text-lg">
              Popular Stays
            </h2>
            <div
              className="w-[179px] rounded-12xl bg-primary-contrast flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border gap-[6px] whitespace-nowrap cursor-pointer text-right text-lg text-cornflowerblue-300"
              onClick={onViewAllStaysButtonClick}
            >
              <div className="flex-1 relative tracking-[0.04em] font-medium">
                View all stays
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/arrowright-4.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-base text-gray-100 mq1000:[grid-row-gap:20px] mq1000:justify-center mq1000:grid-cols-[repeat(2,_minmax(240px,_416px))] mq450:grid-cols-[minmax(240px,_1fr)]">
          <HotelCard
            matterhornSuitesImage="/matterhorn-suites-image@2x.png"
            entireBungalow="Entire bungalow"
            video="/video1.svg"
            matterhornSuites="Matterhorn Suites"
            night="$575/night"
            basicCommandButtonGroup="/basic-command-button-group.svg"
            inputFieldsContainerFrame="4.9"
            reviews="(60 reviews)"
            propGap="11px"
            propWidth="234px"
            propBorder="1px solid #ccdcec"
          />
          <div className="h-[442px] flex flex-row items-center justify-center text-darkslategray-300">
            <div className="self-stretch w-[296px] rounded-3xs bg-primary-contrast box-border flex flex-col items-center justify-start py-[15px] px-3 gap-[23px] border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 hover:cursor-pointer">
              <img
                className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/discovery-shores-image@2x.png"
              />
              <div className="self-stretch h-[189px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-gray-100">
                  <div className="flex-1 relative tracking-[0.02em]">
                    2-Story beachfront suite
                  </div>
                  <img
                    className="h-[25px] w-[25px] relative overflow-hidden shrink-0 cursor-pointer"
                    alt=""
                    src="/video1.svg"
                    onClick={openMatterhornPopup}
                  />
                </div>
                <div className="w-[234px] flex-1 flex flex-col items-start justify-start gap-[6px] text-3xl">
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">
                    Discovery Shores
                  </h3>
                  <div className="self-stretch relative text-lg tracking-[0.04em]">
                    $360/night
                  </div>
                </div>
                <div className="self-stretch h-[42px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[9px]">
                  <div className="flex flex-row items-start justify-start gap-[3px]">
                    <img
                      className="h-[17.2px] w-[16.6px] relative"
                      alt=""
                      src="/vector-12.svg"
                    />
                    <div className="relative tracking-[0.04em] font-medium">
                      4.8
                    </div>
                  </div>
                  <div className="flex-1 relative tracking-[0.04em] text-cornflowerblue-200">
                    (116 reviews)
                  </div>
                </div>
                <button className="cursor-pointer p-2.5 bg-[transparent] self-stretch rounded overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-lavender-200 hover:bg-lightsteelblue-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightsteelblue-200">
                  <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                    More details
                  </div>
                </button>
              </div>
            </div>
          </div>
          <HotelCard
            matterhornSuitesImage="/arctic-hut-image@2x.png"
            entireBungalow="Single deluxe hut"
            video="/video1.svg"
            matterhornSuites="Arctic Hut "
            night="$420/night"
            basicCommandButtonGroup="/vector-22.svg"
            inputFieldsContainerFrame="4.7"
            reviews="(78 reviews)"
            propGap="5px"
            propWidth="240px"
            propBorder="1px solid #ccdcec"
          />
          <HotelCard
            matterhornSuitesImage="/lake-louise-image@2x.png"
            entireBungalow="Deluxe King Room"
            video="/video-3.svg"
            matterhornSuites="Lake Louise Inn"
            night="$244/night"
            basicCommandButtonGroup="/vector-31.svg"
            inputFieldsContainerFrame="4.6"
            reviews="(63 reviews)"
            propGap="11px"
            propWidth="234px"
            propBorder="1px solid #cdddec"
          />
        </div>
        <div className="w-[175px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] whitespace-nowrap text-right text-lg text-cornflowerblue-300">
          <div className="flex-1 relative tracking-[0.04em] font-medium">
            View all stays
          </div>
          <img className="h-6 w-6 relative overflow-hidden shrink-0" alt="" />
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

export default PopularStays;
