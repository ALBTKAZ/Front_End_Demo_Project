import { FunctionComponent } from "react";

const List: FunctionComponent = () => {
  return (
    <div className="w-[347px] flex flex-col items-start justify-start py-2 px-0 box-border text-left text-base text-text-primary font-components-button-large">
      <header className="self-stretch bg-primary-contrast flex flex-row items-center justify-start py-1.5 px-4 text-left text-base text-text-primary font-components-button-large">
        <div className="w-[202px] relative tracking-[0.15px] leading-[150%] inline-block pr-5">
          Singapore - Changi (LAX)
        </div>
      </header>
      <footer className="bg-action-hover flex flex-row items-center justify-start py-1.5 pr-7 pl-4 text-left text-base text-text-primary font-components-button-large">
        <div className="relative tracking-[0.15px] leading-[150%]">
          Ninoy Aquiono International Airport (NAIA
        </div>
      </footer>
      <div className="self-stretch bg-primary-contrast flex flex-row items-center justify-start py-1.5 px-4">
        <div className="w-[270px] relative tracking-[0.15px] leading-[150%] inline-block pr-5">
          Mactan International Airport (MIA)
        </div>
      </div>
      <input
        className="w-full [border:none] [outline:none] bg-primary-contrast self-stretch h-9 flex flex-row items-center justify-start py-1.5 px-4 box-border font-components-button-large text-base text-text-primary min-w-[208px]"
        placeholder="Clark International Airport (CIA)"
        type="text"
      />
      <input
        className="w-full [border:none] [outline:none] bg-primary-contrast self-stretch h-9 flex flex-row items-center justify-start py-1.5 px-4 box-border font-components-button-large text-base text-text-primary min-w-[208px]"
        placeholder="Charles de Gaulle Airport (CGA)"
        type="text"
      />
    </div>
  );
};

export default List;
