import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "./TopHeader";

const ParentNametechnical: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0 text-center text-42xl text-primary-contrast font-baloo-bhai">
      <TopHeader
        hamburgerMenu="pending_1:1304"
        searchColor="#1262af"
        hotelsColor="#424242"
        onSearchTextClick={onSearchTextClick}
        onHotelsTextClick={onHotelsTextClick}
      />
      <div className="self-stretch [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-center justify-center relative max-w-full">
        <div className="h-[639.9px] w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
        <img
          className="h-full w-full absolute my-0 mx-[!important] top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start pt-[167px] px-5 pb-[168px] box-border gap-[43px] max-w-full z-[2] mq725:gap-[21px] mq725:pt-[109px] mq725:pb-[109px] mq725:box-border">
          <div className="w-[1160px] flex flex-col items-start justify-start gap-[5px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-inherit mq1000:text-30xl mq1000:leading-[54px] mq450:text-18xl mq450:leading-[40px]">{`Let’s explore & travel the world`}</h1>
            <h3 className="m-0 self-stretch relative text-5xl leading-[32px] font-normal font-components-button-large mq450:text-lgi mq450:leading-[26px]">
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <form className="m-0 w-[1160px] rounded-3xs bg-primary-contrast flex flex-col items-center justify-start pt-[25px] px-5 pb-5 box-border gap-[9px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[5px] pl-1 box-border gap-[5px] max-w-full">
              <b className="flex-1 relative text-xl tracking-[0.04em] uppercase inline-block font-components-button-large text-darkslategray-300 text-left min-w-[137px] max-w-full mq450:text-base">
                Search flights
              </b>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                    <input
                      className="cursor-pointer m-0 h-5 w-5 relative overflow-hidden shrink-0"
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className="relative text-base tracking-[0.15px] leading-[150%] font-components-button-large text-darkslategray-400 text-left">
                    Return
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                    <input
                      className="border-cornflowerblue-300 accent-cornflowerblue-300 cursor-pointer m-0 h-5 w-5 relative overflow-hidden shrink-0"
                      checked={true}
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className="relative text-base tracking-[0.15px] leading-[150%] font-components-button-large text-darkslategray-400 text-left">
                    One-way
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full mq1000:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start p-[5px] box-border gap-[10px] max-w-full mq1000:flex-wrap mq1000:min-w-full mq1000:flex-[unset] mq1000:self-stretch">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 pr-[13px] pl-[11px] border-[1px] border-solid border-other-outlined-border">
                    <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-1 box-border">
                      <div className="relative text-xs tracking-[0.15px] leading-[12px] font-components-button-large text-text-secondary text-left">
                        Departure
                      </div>
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border font-components-button-large text-base text-text-primary min-w-[169px] mq1000:min-w-full"
                      placeholder="Singapore (SIN)"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 pr-[13px] pl-[11px] border-[1px] border-solid border-other-outlined-border">
                    <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-1 box-border">
                      <div className="relative text-xs tracking-[0.15px] leading-[12px] font-components-button-large text-text-secondary text-left">
                        Arrival
                      </div>
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border font-components-button-large text-base text-text-primary min-w-[169px] mq1000:min-w-full"
                      placeholder="Los Angeles (LA)"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 pr-[13px] pl-[11px] border-[1px] border-solid border-other-outlined-border">
                    <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-1 box-border">
                      <div className="relative text-xs tracking-[0.15px] leading-[12px] font-components-button-large text-text-secondary text-left">
                        Date
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
                      <div className="h-8 hidden flex-row items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                            <div className="self-stretch w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="self-stretch flex-1 relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                            <div className="self-stretch w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="self-stretch flex-1 relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-components-button-large text-base bg-[transparent] h-6 flex-1 relative tracking-[0.15px] leading-[24px] text-text-primary text-left flex items-center min-w-[calc(100%_-_32px)]"
                        placeholder="01/05/2022"
                        type="text"
                      />
                      <input
                        className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border mq1000:self-stretch mq1000:w-auto">
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 self-stretch h-14 rounded overflow-hidden shrink-0 flex flex-col items-center justify-center whitespace-nowrap hover:bg-chocolate mq1000:text-center mq1000:self-stretch mq1000:w-auto mq1000:min-w-[164]">
                  <div className="w-[147px] relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ParentNametechnical;
