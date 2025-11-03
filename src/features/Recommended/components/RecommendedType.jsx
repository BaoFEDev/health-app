import classNames from "classnames";

const RecommendedType = (props) => {
  const { className, item } = props;
  return (
    <div
      className={classNames({
        [className]: !!className,
        "relative bg-dark-600 w-full h-full group cursor-pointer overflow-hidden flex flex-col justify-center items-center": true,
      })}
    >
      <h3 className="text-primary-300 font-normal leading-[27px] mb-2.5!">
        {item?.title}
      </h3>
      <p className="text-white text-sub font-light leading-[26px] border-t! border-white! pt-2!">
        {item?.subTitle}
      </p>
    </div>
  );
};

export default RecommendedType;
