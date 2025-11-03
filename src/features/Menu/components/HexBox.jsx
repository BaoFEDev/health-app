import classNames from "classnames";

export const HexBox = ({ className, icon, label }) => {
  return (
    <div
      className={classNames({
        [className]: !!className,
        "flex flex-col justify-center cursor-pointer items-center bg-gradient-brand w-[134px] min-h-[116px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]": true,
      })}
    >
      <img src={icon} className="w-14 h-14" />
      <p className="text-white text-center">{label}</p>
    </div>
  );
};
