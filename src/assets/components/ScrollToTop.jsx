import { Icon } from "./Icon";
import classNames from "classnames";

export const ScrollToTop = ({ scrollToTop, className, isShow }) => {
  return (
    <div
      className={classNames({
        [className]: !!className,
        "fixed right-5 bottom-5 z-10 cursor-pointer xl:right-10 xl:bottom-10": true,
        'block': isShow,
        'hidden': !isShow,
      })}
    >
      <div
        onClick={() => {
          if (typeof scrollToTop === "function") {
            scrollToTop();            
          }
        }}
        className="flex w-12 h-12 border border-dark-400 cursor-pointer items-center justify-center rounded-full bg-white lg:opacity-70"
      >
        <Icon name="icon-component_scroll" size="text-[48px]" />
      </div>
    </div>
  );
};
