import { FunctionComponent } from "react";

type InputGroupType = {
  departure?: string;
  activePlaceholder?: string;
};

const InputGroup: FunctionComponent<InputGroupType> = ({
  departure,
  activePlaceholder,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full text-left text-xs text-text-secondary font-components-button-large">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch rounded flex flex-col items-start justify-start py-0 pr-[13px] pl-[11px] border-[1px] border-solid border-other-outlined-border">
          <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-1 box-border">
            <div className="relative tracking-[0.15px] leading-[12px]">
              {departure}
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border font-components-button-large text-base text-text-primary min-w-[193px] mq750:min-w-full"
            placeholder={activePlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
