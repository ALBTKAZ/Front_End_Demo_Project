import { FunctionComponent } from "react";
import Footer from "./Footer";

const NewsletterContainer: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0 text-center text-lg text-cornflowerblue-300 font-components-button-large">
      <div className="self-stretch bg-aliceblue overflow-hidden flex flex-row items-end justify-center p-[42px] box-border relative max-w-full mq750:py-[27px] mq750:px-[21px] mq750:box-border">
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
            <h2 className="m-0 self-stretch relative text-11xl font-bold font-inherit text-darkslategray-100 mq750:text-5xl mq450:text-lg">
              Get weekly updates
            </h2>
          </div>
          <form className="m-0 self-stretch rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border flex flex-col items-start justify-start py-7 pr-[31px] pl-[29px] gap-[17px] max-w-full border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative text-lg leading-[34px] font-components-button-large text-slategray text-left">
                Fill in your details to join the party!
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded box-border flex flex-col items-start justify-start py-0 pr-[13px] pl-[11px] max-w-full border-[1px] border-solid border-other-outlined-border">
                  <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start py-4 px-0 box-border gap-[8px] max-w-full">
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
                          <input
                            className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            type="checkbox"
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
                            <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch flex-1 relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left">
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
                            <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch flex-1 relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left">
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
            <button className="cursor-pointer [border:none] p-0 bg-orange-200 w-[164px] h-14 rounded overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-darkorange">
              <div className="overflow-hidden flex flex-col items-start justify-start py-2 px-[42px]">
                <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-left">
                  submit
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
      <Footer
        logo="/logo1.svg"
        facebookIcon="/facebook-icon1.svg"
        instagramIcon="/instagram-icon1.svg"
        twitterIcon="/twitter-icon1.svg"
      />
    </section>
  );
};

export default NewsletterContainer;
