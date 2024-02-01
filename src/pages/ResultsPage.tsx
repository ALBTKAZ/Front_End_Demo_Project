import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import S from "../components/S";
import PeopleSelection from "../components/PeopleSelection";
import FlightCards from "../components/FlightCards";
import BookingCards from "../components/BookingCards";
import NewsletterContainer from "../components/NewsletterContainer";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <TopHeader
        hamburgerMenu="pending_1:1696"
        searchColor="#424242"
        hotelsColor="#1262af"
        onFickleflightLogoContainerClick={onFickleflightLogoContainerClick}
        onExploreTextClick={onExploreTextClick}
        onHotelsTextClick={onHotelsTextClick}
      />
      <S />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border min-h-[939px] max-w-full shrink-0 text-left text-base text-cornflowerblue-300 font-components-button-large">
        <PeopleSelection />
        <div className="w-[770px] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border max-w-[calc(100%_-_568px)] mq1225:max-w-full">
          <FlightCards />
        </div>
        <div className="w-[257px] rounded-md bg-primary-contrast flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[18px] mq1225:hidden">
          <div className="self-stretch h-[33px] flex flex-col items-start justify-start gap-[14px]">
            <b className="self-stretch relative tracking-[0.04em] uppercase">
              Recently booked
            </b>
            <img
              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/vector-2-1.svg"
            />
          </div>
          <BookingCards />
        </div>
      </section>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
