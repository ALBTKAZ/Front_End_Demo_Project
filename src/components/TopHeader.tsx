import { FunctionComponent, useMemo, type CSSProperties } from "react";

type TopHeaderType = {
  hamburgerMenu?: string;

  /** Style props */
  searchColor?: CSSProperties["color"];
  hotelsColor?: CSSProperties["color"];

  /** Action props */
  onFickleflightLogoContainerClick?: () => void;
  onExploreTextClick?: () => void;
  onSearchTextClick?: () => void;
  onHotelsTextClick?: () => void;
};

const TopHeader: FunctionComponent<TopHeaderType> = ({
  hamburgerMenu,
  searchColor,
  hotelsColor,
  onFickleflightLogoContainerClick,
  onExploreTextClick,
  onSearchTextClick,
  onHotelsTextClick,
}) => {
  const exploreStyle: CSSProperties = useMemo(() => {
    return {
      color: searchColor,
    };
  }, [searchColor]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      color: hotelsColor,
    };
  }, [hotelsColor]);

  return (
    <header className="self-stretch bg-primary-contrast flex flex-row items-center justify-center pt-5 px-5 pb-[21px] box-border top-[0] z-[99] sticky max-w-full shrink-0 text-left text-sm text-darkslategray-200 font-components-button-large">
      <div className="w-[1280px] flex flex-row items-end justify-between gap-[20px] max-w-full">
        <div
          className="h-[33px] w-[174px] relative overflow-hidden shrink-0 cursor-pointer"
          onClick={onFickleflightLogoContainerClick}
        >
          <img
            className="absolute h-[96.97%] w-[99.83%] top-[1.52%] right-[0.17%] bottom-[1.52%] left-[0%] max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/webscreen.svg"
          />
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src={hamburgerMenu}
        />
        <div className="w-[368px] flex flex-row items-center justify-start gap-[30px] max-w-full mq750:hidden">
          <div
            className="relative cursor-pointer"
            onClick={onExploreTextClick}
            style={exploreStyle}
          >
            Explore
          </div>
          <div
            className="relative text-cornflowerblue-200"
            style={searchStyle}
            onClick={onSearchTextClick}
          >
            Search
          </div>
          <div className="relative cursor-pointer" onClick={onHotelsTextClick}>
            Hotels
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <div className="relative">Offers</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
              loading="eager"
              alt=""
              src="/notification-bell1@2x.png"
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
  );
};

export default TopHeader;
