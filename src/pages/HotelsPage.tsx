import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const HotelsPage: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-px box-border tracking-[normal]">
        <header className="self-stretch bg-primary-contrast flex flex-row items-center justify-center pt-5 px-5 pb-[21px] box-border top-[0] z-[99] sticky max-w-full text-left text-sm text-darkslategray-200 font-components-button-large">
          <div className="w-[1280px] flex flex-row items-end justify-between gap-[20px] max-w-full">
            <div
              className="h-[33px] w-[174px] relative overflow-hidden shrink-0 cursor-pointer"
              onClick={onFickleflightLogoContainerClick}
            >
              <img
                className="absolute top-[0.5px] left-[0px] w-[173.7px] h-8 cursor-pointer"
                loading="eager"
                alt=""
                src="/webscreen.svg"
                onClick={onWebScreenClick}
              />
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover hidden"
              alt=""
            />
            <div className="w-[368px] flex flex-row items-center justify-start gap-[30px] max-w-full mq725:hidden">
              <div
                className="relative cursor-pointer"
                onClick={onExploreTextClick}
              >
                Explore
              </div>
              <div
                className="relative cursor-pointer"
                onClick={onSearchTextClick}
              >
                Search
              </div>
              <div className="relative text-cornflowerblue-200">Hotels</div>
              <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
                <div className="relative">Offers</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                  loading="eager"
                  alt=""
                  src="/notification-bell@2x.png"
                />
                <img
                  className="h-9 w-9 rounded-19xl object-cover"
                  loading="eager"
                  alt=""
                  src="/unsplashd1upkifd04a@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full shrink-0 text-left text-[42px] text-primary-contrast font-baloo-bhai">
          <div className="flex-1 [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] flex flex-row items-center justify-center pt-[50px] px-0 pb-[46px] box-border relative gap-[8px] max-w-full">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden object-cover"
              loading="eager"
              alt=""
              src="/banner-background@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-20 box-border gap-[8px] max-w-full z-[1] mq725:pl-10 mq725:pr-10 mq725:box-border">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[48px] font-normal font-inherit mq450:text-[25px] mq450:leading-[29px] mq1000:text-[34px] mq1000:leading-[38px]">
                Stays in Los Angeles
              </h1>
              <div className="flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
                <button className="cursor-pointer py-[11px] px-5 bg-primary-contrast rounded-8xl flex flex-row items-center justify-center border-[1px] border-solid border-primary-contrast hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <div className="relative text-base tracking-[0.04em] capitalize font-medium font-components-button-large text-cornflowerblue-200 text-center">
                    Recommended
                  </div>
                </button>
                <button className="cursor-pointer py-[11px] px-5 bg-[transparent] w-[82px] rounded-8xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-contrast hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <div className="relative text-base tracking-[0.04em] capitalize font-medium font-components-button-large text-primary-contrast text-center">
                    Price
                  </div>
                </button>
                <button className="cursor-pointer py-[11px] px-5 bg-[transparent] w-[92px] rounded-8xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-contrast hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <div className="relative text-base tracking-[0.04em] capitalize font-medium font-components-button-large text-primary-contrast text-center">
                    Rating
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[561.9px] h-[600px] relative hidden max-w-full">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            alt=""
            src="/map@2x.png"
          />
          <img
            className="absolute top-[53.3px] left-[92.8px] w-[333.3px] h-[328.1px]"
            alt=""
          />
          <img
            className="absolute top-[539.9px] left-[517.6px] w-[30.2px] h-[48.1px] object-cover"
            alt=""
          />
        </div>
        <section className="w-[1320px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[20px] min-h-[1012px] max-w-full shrink-0 text-left text-lg text-darkslategray-300 font-components-button-large">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full">
            <div className="flex-1 relative tracking-[0.04em] uppercase font-medium inline-block min-w-[100px] max-w-full">
              200+ results
            </div>
            <div className="flex flex-row items-center justify-start gap-[14px] text-base">
              <div className="relative tracking-[0.04em]">Filters</div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/filters.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[22px] max-w-full text-base text-gray-100 mq1050:flex-wrap">
            <div className="w-[562px] flex flex-col items-start justify-start gap-[12px] min-w-[562px] max-w-full mq725:min-w-full mq1050:flex-1">
              <div className="self-stretch rounded-3xs bg-cornflowerblue-500 flex flex-row items-center justify-start py-0 pr-3 pl-0 gap-[16px] mq725:flex-wrap mq725:pl-3 mq725:pt-3 mq725:pb-3 mq725:box-border">
                <img
                  className="h-[220px] w-[260px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs object-cover mq725:flex-1"
                  loading="eager"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[178px] mq450:gap-[15px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                    <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]">
                      <div className="relative tracking-[0.02em]">
                        1 king bed standard
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="eager"
                        alt=""
                        src="/video.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[6px] text-3xl text-darkslategray-300">
                      <h3 className="m-0 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">
                        Holiday Inn Expre...
                      </h3>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-base">
                        <img
                          className="h-4 w-4 relative"
                          loading="eager"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative tracking-[0.04em] font-medium">
                          4.7
                        </div>
                        <div className="relative tracking-[0.04em] text-cornflowerblue-200">
                          (1,136 reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[11px] text-3xl text-darkslategray-300">
                    <div className="flex flex-row items-end justify-start gap-[1px]">
                      <b className="relative tracking-[0.02em] capitalize mq450:text-lg">
                        $S 286
                      </b>
                      <div className="relative text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] pt-[13px] pb-3 pr-[22px] pl-7 bg-[transparent] flex flex-row items-center justify-end relative whitespace-nowrap">
                      <div className="h-full w-full absolute my-0 mx-[!important] top-[-0.4px] right-[0.5px] bottom-[0.4px] left-[-0.5px] rounded-md bg-cornflowerblue-200" />
                      <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-primary-contrast text-center z-[1]">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-cornflowerblue-500 flex flex-row items-center justify-start py-0 pr-3 pl-0 gap-[16px] text-darkslategray-300 mq725:flex-wrap mq725:pl-3 mq725:pt-3 mq725:pb-3 mq725:box-border">
                <img
                  className="h-[220px] w-[260px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs object-cover mq725:flex-1"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[178px] mq450:gap-[15px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="w-[172.8px] relative tracking-[0.02em] text-gray-100 inline-block">
                      Bed in Quad
                    </div>
                    <h3 className="m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">
                      Freehand Los Angeles
                    </h3>
                    <div className="w-[203px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[8px]">
                      <img
                        className="h-4 w-[18.8px] relative"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <div className="relative tracking-[0.04em] font-medium">
                        4.2
                      </div>
                      <div className="flex-1 relative tracking-[0.04em] text-cornflowerblue-200">
                        (1,941 reviews)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[12px] text-3xl">
                    <div className="flex flex-row items-end justify-start gap-[1px]">
                      <b className="relative tracking-[0.02em] capitalize mq450:text-lg">
                        $S 198
                      </b>
                      <div className="relative text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] pt-3 pb-[13px] pr-[22px] pl-7 bg-[transparent] flex flex-row items-center justify-end relative whitespace-nowrap">
                      <div className="h-full w-full absolute my-0 mx-[!important] top-[0.2px] right-[0.5px] bottom-[-0.2px] left-[-0.5px] rounded-md bg-cornflowerblue-200" />
                      <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-primary-contrast text-center z-[1]">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-cornflowerblue-500 flex flex-row items-center justify-start py-0 pr-3 pl-0 gap-[16px] text-darkslategray-300 mq725:flex-wrap mq725:pl-3 mq725:pt-3 mq725:pb-3 mq725:box-border">
                <img
                  className="h-[220px] w-[260px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs object-cover mq725:flex-1"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[178px] mq450:gap-[15px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="w-[172.8px] relative tracking-[0.02em] text-gray-100 inline-block">
                      1 King, City view
                    </div>
                    <h3 className="m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">
                      The Westin Bonavent...
                    </h3>
                    <div className="w-[203px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[8px]">
                      <img
                        className="h-4 w-[18.8px] relative"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className="relative tracking-[0.04em] font-medium">
                        4.1
                      </div>
                      <div className="flex-1 relative tracking-[0.04em] text-cornflowerblue-200">
                        (1,002 reviews)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[11px] text-3xl">
                    <div className="flex flex-row items-end justify-start gap-[1px]">
                      <b className="relative tracking-[0.02em] capitalize mq450:text-lg">
                        $S 289
                      </b>
                      <div className="relative text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] pt-[13px] pb-3 pr-[22px] pl-7 bg-[transparent] flex flex-row items-center justify-end relative whitespace-nowrap">
                      <div className="h-full w-full absolute my-0 mx-[!important] top-[-0.3px] right-[0.5px] bottom-[0.3px] left-[-0.5px] rounded-md bg-cornflowerblue-200" />
                      <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-primary-contrast text-center z-[1]">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-cornflowerblue-500 flex flex-row items-center justify-start py-0 pr-3 pl-0 gap-[16px] mq725:flex-wrap mq725:pl-3 mq725:pt-3 mq725:pb-3 mq725:box-border">
                <img
                  className="h-[220px] w-[260px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs object-cover mq725:flex-1"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[178px] mq450:gap-[15px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                    <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]">
                      <div className="relative tracking-[0.02em]">
                        Deluxe King
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                        loading="eager"
                        alt=""
                        src="/feature-video.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[6px] text-3xl text-darkslategray-300">
                      <h3 className="m-0 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">
                        The Ritz-Carlton, L...
                      </h3>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-base">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/vector-3.svg"
                        />
                        <div className="relative tracking-[0.04em] font-medium">
                          4.7
                        </div>
                        <div className="relative tracking-[0.04em] text-cornflowerblue-200">
                          (1,136 reviews)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[12px] text-3xl text-darkslategray-300">
                    <div className="flex flex-row items-end justify-start gap-[1px]">
                      <b className="relative tracking-[0.02em] capitalize mq450:text-lg">
                        $S 286
                      </b>
                      <div className="relative text-sm tracking-[0.02em]">
                        /night
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] pt-3 pb-[13px] pr-[22px] pl-7 bg-[transparent] flex flex-row items-center justify-end relative whitespace-nowrap">
                      <div className="h-full w-full absolute my-0 mx-[!important] top-[0.3px] right-[0.5px] bottom-[-0.3px] left-[-0.5px] rounded-md bg-cornflowerblue-200" />
                      <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-primary-contrast text-center z-[1]">
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[918.3px] flex-1 relative overflow-hidden min-w-[452px] max-w-full mq725:min-w-full">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                alt=""
                src="/map-1@2x.png"
              />
              <div className="absolute top-[81.6px] left-[114.7px] w-[412.4px] h-[502.2px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.039)]"
                  alt=""
                  src="/dots-1.svg"
                />
              </div>
              <div className="absolute top-[826.4px] left-[640.3px] w-[37.3px] h-[73.6px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.536)]"
                  alt=""
                  src="/zoom-1@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-aliceblue overflow-hidden flex flex-row items-end justify-center p-[42px] box-border relative max-w-full shrink-0 text-center text-lg text-cornflowerblue-300 font-components-button-large mq725:py-[27px] mq725:px-[21px] mq725:box-border">
          <img
            className="h-full w-full absolute my-0 mx-[!important] right-[0px] bottom-[-1px] left-[0px] max-w-full overflow-hidden object-cover"
            alt=""
            src="/newsletter-section-background@2x.png"
          />
          <div className="w-[549px] flex flex-col items-center justify-start p-5 box-border gap-[30px] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
              <b className="self-stretch relative tracking-[0.04em] uppercase">
                subscribe to our newsletter
              </b>
              <h2 className="m-0 self-stretch relative text-11xl font-bold font-inherit text-darkslategray-100 mq450:text-lg mq1000:text-5xl">
                Get weekly updates
              </h2>
            </div>
            <div className="self-stretch rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border flex flex-col items-start justify-start py-7 pr-[31px] pl-[29px] gap-[17px] max-w-full text-left text-slategray border-[1px] border-solid border-whitesmoke-200">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[34px]">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-center text-xs text-grey-grey-700">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded box-border flex flex-col items-start justify-start py-0 pr-[13px] pl-[11px] max-w-full border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start py-4 px-0 box-border gap-[8px] max-w-full">
                      <div className="h-8 hidden flex-row items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                            <div className="self-stretch w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                              <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <input
                              className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                              type="checkbox"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                            <div className="self-stretch w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                              <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <input
                              className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-components-button-large text-base bg-[transparent] h-6 flex-1 relative tracking-[0.15px] leading-[24px] text-text-secondary text-left flex items-center min-w-[255px] max-w-full"
                        placeholder="Your name"
                        type="text"
                      />
                      <div className="h-7 w-7 relative hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start w-full h-full">
                          <div className="w-7 h-7 rounded-29xl flex flex-row items-center justify-start p-1 box-border">
                            <img
                              className="h-5 w-5 relative overflow-hidden shrink-0"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded box-border flex flex-col items-start justify-start py-0 pr-[13px] pl-[11px] max-w-full border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start py-4 px-0 box-border gap-[8px] max-w-full">
                      <div className="h-8 hidden flex-row items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                            <div className="self-stretch w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                              <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <input
                              className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                              type="checkbox"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                            <div className="self-stretch w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                              <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <input
                              className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-components-button-large text-base bg-[transparent] h-6 flex-1 relative tracking-[0.15px] leading-[24px] text-text-secondary text-left flex items-center min-w-[255px] max-w-full"
                        placeholder="Email address"
                        type="text"
                      />
                      <div className="h-7 w-7 relative hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start w-full h-full">
                          <div className="w-7 h-7 rounded-29xl flex flex-row items-center justify-start p-1 box-border">
                            <img
                              className="h-5 w-5 relative overflow-hidden shrink-0"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[164px] h-14 rounded bg-orange-200 overflow-hidden shrink-0 flex flex-col items-center justify-center text-mini text-primary-contrast hover:bg-darkorange">
                <div className="overflow-hidden flex flex-col items-start justify-start py-2 px-[42px]">
                  <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium">
                    submit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row flex-wrap items-start justify-center py-[33px] pr-[83px] pl-[84px] box-border gap-[44px] max-w-full shrink-0 z-[2] text-left text-lg text-primary-contrast font-components-button-large mq725:gap-[22px] mq725:pl-[42px] mq725:pr-[41px] mq725:box-border mq450:pl-5 mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[385px] max-w-full mq725:min-w-full">
            <img
              className="w-[174px] h-[33px] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/logo.svg"
            />
            <div className="self-stretch relative leading-[27px]">
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px]">
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="eager"
                alt=""
                src="/facebook-icon.svg"
              />
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="eager"
                alt=""
                src="/instagram-icon.svg"
              />
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                loading="eager"
                alt=""
                src="/twitter-icon.svg"
              />
            </div>
          </div>
          <div className="h-[157.9px] w-px relative box-border border-r-[1px] border-solid border-gray-300 mq1050:w-[100px] mq1050:h-px mq1050:box-border mq1050:border-t-[1px] mq1050:border-solid mq1050:border-gray-300" />
          <div className="flex-1 flex flex-row items-start justify-start min-w-[385px] [row-gap:20px] max-w-full text-xl mq725:flex-wrap mq725:min-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[21px] min-w-[148px]">
              <div className="w-[174.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
                Company
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
                <div className="w-[135.7px] relative inline-block">
                  About Us
                </div>
                <div className="w-[84.3px] relative inline-block">News</div>
                <div className="w-[115.1px] relative inline-block">Careers</div>
                <div className="self-stretch relative">How we work</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[21px] min-w-[148px]">
              <div className="w-[131.6px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
                Support
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
                <div className="w-[109.6px] relative inline-block">Account</div>
                <div className="self-stretch relative">Support Center</div>
                <div className="w-[53px] relative inline-block">FAQ</div>
                <div className="w-[164.4px] relative inline-block">
                  Accessibility
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[21px] min-w-[148px]">
              <div className="w-[76.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
                More
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
                <div className="w-[172.9px] relative inline-block">
                  Covid Advisory
                </div>
                <div className="w-[135.4px] relative inline-block">
                  Airline Fees
                </div>
                <div className="w-[50.6px] relative inline-block">Tips</div>
                <div className="self-stretch relative">Quarantine Rules</div>
              </div>
            </div>
          </div>
        </footer>
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

export default HotelsPage;
