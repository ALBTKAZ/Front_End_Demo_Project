import { FunctionComponent } from "react";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className="w-[900px] rounded-lg bg-primary-contrast flex flex-row items-center justify-center p-5 box-border max-w-full max-h-full overflow-auto">
      <section className="h-[560px] flex-1 relative bg-[url('/public/video-thumbnail@2x.png')] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute top-[0px] left-[0px] w-[860px] h-[560px] object-cover hidden"
          alt=""
          src="/video-thumbnail@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[860px] h-[560px] z-[1]" />
        <img
          className="absolute h-[14.29%] w-[9.3%] top-[42.86%] right-[45.35%] bottom-[42.86%] left-[45.35%] max-w-full overflow-hidden max-h-full z-[2]"
          loading="eager"
          alt=""
          src="/play-icon.svg"
        />
      </section>
    </div>
  );
};

export default MatterhornPopup;
