import classNames from "classnames";

const RecordCategoryCard = ({ title, subtitle, image, className }) => {
  return (
    <div
      className={classNames({
        [className]: !!className,
        "relative bg-yellow-400 w-full h-full flex items-center justify-center p-6! cursor-pointer": true,
      })}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-primary-300 text-[25px] font-normal leading-[30px] text-nowrap text-center">
          {title}
        </p>
        <div className="bg-primary-400 flex text-center text-white px-4! py-1!">
          <p className="text-white text-[20px] leading-3.5 font-light text-nowrap font-japanese">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordCategoryCard;
