import { FunctionComponent } from "react";
import Col from "./Col";

const CardsContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-right text-19xl text-primary-contrast font-baloo-bhai mq1000:[grid-row-gap:20px] mq1000:justify-center mq1000:grid-cols-[repeat(2,_minmax(240px,_416px))] mq450:grid-cols-[minmax(240px,_1fr)]">
      <Col
        parisImage="/parisimage@2x.png"
        paris="Paris"
        logo="$699"
        propBackgroundImage="url('/parisimage@2x.png')"
      />
      <div className="h-[182px] flex flex-row items-center justify-center">
        <div className="self-stretch w-72 rounded-3xs overflow-hidden shrink-0 flex flex-col items-start justify-start py-2 pr-5 pl-3 box-border bg-[url('/public/greeceimage@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="w-72 relative h-[182px] object-cover hidden"
            alt=""
            src="/greeceimage@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <div className="absolute my-0 mx-[!important] right-[-3px] bottom-[-35.6px] leading-[38px] whitespace-nowrap z-[1] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]">
              $1079
            </div>
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] text-left text-xl font-components-button-large">
              <b className="w-[162.5px] relative tracking-[0.02em] inline-block shrink-0 z-[1] mq450:text-base">
                Greece
              </b>
              <div className="relative text-base tracking-[0.04em] uppercase text-right z-[1]">
                from
              </div>
            </div>
          </div>
        </div>
      </div>
      <Col
        parisImage="/norwayimage@2x.png"
        paris="Norway"
        logo="$895"
        propBackgroundImage="url('/norwayimage@2x.png')"
      />
      <div className="flex flex-row items-center justify-center">
        <div className="h-[182px] w-72 relative rounded-3xs overflow-hidden shrink-0 bg-[url('/public/tuscanyimage@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover hidden"
            alt=""
            src="/tuscanyimage@2x.png"
          />
          <div className="absolute top-[28.6px] left-[175px] leading-[38px] inline-block w-[97px] whitespace-nowrap z-[1] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]">
            $1245
          </div>
          <div className="absolute top-[8px] left-[12px] w-[255px] flex flex-row items-start justify-between gap-[20px] text-left text-xl font-components-button-large">
            <b className="relative tracking-[0.02em] z-[1] mq450:text-base">
              Tuscany
            </b>
            <div className="relative text-base tracking-[0.04em] uppercase text-right z-[1]">
              from
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
