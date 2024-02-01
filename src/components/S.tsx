import { FunctionComponent } from "react";
import InputGroup from "./InputGroup";

const S: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full shrink-0 text-left text-42xl text-primary-contrast font-baloo-bhai mq450:pb-8 mq450:box-border">
      <div className="flex-1 [background:linear-gradient(100.3deg,_#114f8b,_#2a9bd7)] flex flex-row items-center justify-center max-w-full">
        <div className="flex-1 [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-center justify-center pt-[84px] px-0 pb-[85px] box-border relative max-w-full mq450:pt-[55px] mq450:pb-[55px] mq450:box-border">
          <div className="h-[362px] w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/banner-background@2x.png"
          />
          <div className="flex-1 flex flex-col items-center justify-center py-0 px-20 box-border gap-[20px] max-w-full z-[2] mq750:pl-10 mq750:pr-10 mq750:box-border">
            <div className="self-stretch flex flex-col items-center justify-start">
              <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-inherit mq750:text-30xl mq750:leading-[54px] mq450:text-18xl mq450:leading-[40px]">
                Where are you off too?
              </h1>
            </div>
            <form className="m-0 self-stretch rounded-3xs bg-primary-contrast flex flex-row flex-wrap items-start justify-start p-5 box-border [row-gap:20px] max-w-full mq750:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq750:flex-[unset] mq750:self-stretch mq1050:flex-wrap mq1050:min-w-full">
                <InputGroup
                  departure="Departure"
                  activePlaceholder="Singapore (SIN)"
                />
                <InputGroup
                  departure="Arrival"
                  activePlaceholder="Los Angeles (LA)"
                />
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
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
              </div>
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border mq750:self-stretch mq750:w-auto">
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 self-stretch h-14 rounded overflow-hidden shrink-0 flex flex-col items-center justify-center whitespace-nowrap hover:bg-chocolate mq750:text-center mq750:self-stretch mq750:w-auto mq750:min-w-[164]">
                  <div className="w-[147px] relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block">
                    Search flights
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S;
