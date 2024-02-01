import { FunctionComponent } from "react";

type RecCardType = {
  unsplash5MV818tzxeo?: string;
  bali?: string;
  d3N?: string;
  headerForm?: string;
};

const RecCard: FunctionComponent<RecCardType> = ({
  unsplash5MV818tzxeo,
  bali,
  d3N,
  headerForm,
}) => {
  return (
    <div className="h-[327px] flex flex-col items-center justify-start py-0 px-4 box-border text-left text-xl text-darkslategray-200 font-components-button-large">
      <img
        className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col items-center justify-center py-5 px-[15px] border-[1px] border-solid border-whitesmoke-200">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch relative tracking-[0.02em] font-medium mq450:text-base">
              {bali}
            </div>
            <div className="self-stretch relative text-base tracking-[0.02em] text-darkgray">
              {d3N}
            </div>
          </div>
          <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right whitespace-nowrap mq1000:text-7xl mq1000:leading-[27px] mq450:text-lgi mq450:leading-[20px]">
            {headerForm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
