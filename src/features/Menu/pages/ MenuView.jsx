import { Button } from "../../../assets/components";
import {
  DATE_ACHIEVEMENT_RATE,
  KNIFE_SPORK,
  SNACK,
} from "../../../commons/images";
import Chart from "../components/Chart";
import { HexBox } from "../components/HexBox";
import MealRecordCard from "../components/MealRecordCard";
import ProgressCircle from "../components/ProgressCircle";
import map from "lodash/map";

const MenuView = () => {
  const defaultData = [
    { m: "6月", a: 86, b: 84 },
    { m: "7月", a: 83, b: 82 },
    { m: "8月", a: 62, b: 70 },
    { m: "9月", a: 68, b: 66 },
    { m: "10月", a: 62, b: 48 },
    { m: "11月", a: 54, b: 46 },
    { m: "12月", a: 66, b: 38 },
    { m: "1月", a: 52, b: 36 },
    { m: "2月", a: 46, b: 30 },
    { m: "3月", a: 42, b: 20 },
    { m: "4月", a: 40, b: 18 },
    { m: "5月", a: 44, b: 16 },
  ];

  const mealTypes = [
    { label: "Morning", icon: KNIFE_SPORK },
    { label: "Lunch", icon: KNIFE_SPORK },
    { label: "Dinner", icon: KNIFE_SPORK },
    { label: "Snack", icon: SNACK },
  ];

  const mealRecordList = [
    {
      date: "2021.05.21",
      mealType: "Morning",
      meal: "ハンバーガー",
      calorie: "300kcal",
      img: DATE_ACHIEVEMENT_RATE,
    },
    {
      date: "2021.05.21",
      mealType: "Lunch",
      meal: "ハンバーガー",
      calorie: "300kcal",
      img: DATE_ACHIEVEMENT_RATE,
    },
    {
      date: "2021.05.21",
      mealType: "Dinner",
      meal: "ハンバーガー",
      calorie: "300kcal",
      img: DATE_ACHIEVEMENT_RATE,
    },
    {
      date: "2021.05.21",
      mealType: "Snack",
      meal: "ハンバーガー",
      calorie: "300kcal",
      img: DATE_ACHIEVEMENT_RATE,
    },
  ]
  return (
    <div className="pb-16">
      <div className="w-full mb-6">
        <div className="flex flex-col lg:flex-row">
          <div className="relative overflow-hidden group w-full h-[500px] lg:h-auto">
            <img
              src={DATE_ACHIEVEMENT_RATE}
              alt="今日の食事"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 grid place-items-center">
              <ProgressCircle
                date="05/21"
                rate={75}
                size={240}
                strokeWidth={8}
              />
            </div>
          </div>
          <Chart
            data={defaultData}
            labelA="摂取カロリー"
            labelB="消費カロリー"
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="container justify-around">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:gap-16">
            {map(mealTypes, (mealType, index) => (
              <HexBox
                key={index}
                className="mt-4"
                label={mealType?.label}
                icon={mealType?.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-7">
            {mealRecordList?.map((mealRecord, index) => (
              <MealRecordCard className="h-[234px]" key={index} mealRecord={mealRecord} />
            ))}
          </div>
        </div>
        <div className="container">
          <Button
            className="md:mx-auto w-full md:w-[296px]"
            label="自分の日記をもっと見る"
            labelClassName="font-japanese"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuView;
