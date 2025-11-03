import classNames from "classnames";

const MealRecordCard = (props) => {
  const { className, mealRecord } = props;
  return (
    <div
      className={classNames({
        [className]: !!className,
        "relative w-full h-full group cursor-pointer overflow-hidden": true,  
      })}
    >
      <img
        className=" w-full h-full object-cover group-hover:scale-125 transition duration-500 ease-in-out"
        src={mealRecord?.img}
      />
      <div className="absolute left-0 bottom-0 bg-primary-300 h-8 flex items-center py-[7px] pl-2 pr-[22px]">
        <p className="text-[15px] leading-[18px] text-white">
          {mealRecord?.date}.{mealRecord?.mealType}
        </p>
      </div>
    </div>
  );
};

export default MealRecordCard;
