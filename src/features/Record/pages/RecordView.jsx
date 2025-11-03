import {
  MY_RECOMMEND_1,
  MY_RECOMMEND_2,
  MY_RECOMMEND_3,
} from "../../../commons/images";
import RecordCategoryCard from "../components/RecordCategoryCard";
import Chart from "../components/Chart";
import MyExercise from "../components/MyExercise";
import DiaryCard from "../components/DiaryCard";
import { Button } from "../../../assets/components";

const RecordView = () => {
  const recordCategories = [
    {
      title: "BODY RECORD",
      subtitle: "自分のカラダの記録",
      image: MY_RECOMMEND_1,
    },
    {
      title: "MY EXERCISE",
      subtitle: "自分の運動の記録",
      image: MY_RECOMMEND_2,
    },
    {
      title: "MY DIARY",
      subtitle: "自分の日記",
      image: MY_RECOMMEND_3,
    },
  ];

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

  return (
    <div
      className="flex-1 pt-14 pb-16"
    >
      <div className="container mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {recordCategories.map((item, index) => (
            <RecordCategoryCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="container mb-14">
        <Chart
          data={defaultData}
          labelA="摂取カロリー"
          labelB="消費カロリー"
          className="w-full"
        />
      </div>
      <div className="container mb-14">
        <MyExercise />
      </div>
      <div className="container flex-col mb-6">
        <h2 className="uppercase text-[22px] leading-[27px] font-normal w-full text-left mb-2">
          MY DIARY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <DiaryCard key={i} />
            ))}
        </div>
      </div>
      <div className="container">
        <Button
          className="mx-auto w-full md:w-[296px]"
          label="自分の日記をもっと見る"
          labelClassName="font-japanese"
        />
      </div>
    </div>
  );
};

export default RecordView;
