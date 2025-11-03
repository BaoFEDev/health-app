import classNames from "classnames";

export const Button = (props) => {
  const { className, label, labelClassName } = props;
  return (
    <button
      className={classNames({
        [className]: !!className,
        "bg-gradient-brand h-14 cursor-pointer py-2 px-4 rounded-md! flex justify-center items-center": true,
      })}
    >
      {label && (
        <p className={classNames({
          [labelClassName]: !!labelClassName,
          "text-white text-sub leading-[26px] font-light": true
        })}>{label}</p>
      )}
    </button>
  );
};
