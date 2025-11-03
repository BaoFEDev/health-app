import classNames from "classnames";

const RecommendedMealCard = (props) => {
  const { className, item } = props;
  return (
    <div
      className={classNames({
        [className]: !!className,
        "w-full h-full cursor-pointer hover:shadow-md default-transition": true,  
      })}
    >
      <div className="relative w-full h-auto md:h-36 group cursor-pointer overflow-hidden mb-2!">
        <img
          className=" w-full h-full object-cover group-hover:scale-125 transition duration-500 ease-in-out"
          src={item?.img}
        />
        <div className="absolute left-0 bottom-0 bg-primary-300 h-8 flex items-center py-[7px] pl-2! pr-[22px]!">
          <p className="text-[15px] leading-[18px] text-white">
            {item?.date}
          </p>
        </div>
      </div>
      <p className="text-dark-500 font-light">
        {item?.desc}
      </p>
      <p className="text-primary-400 font-light">
        {item?.subTitle}
      </p>
    </div>
  );
};

export default RecommendedMealCard;
