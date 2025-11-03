import RecommendedType from "../components/RecommendedType";
import RecommendedMealCard from "../components/RecommendedMealCard";
import { Button } from "../../../assets/components";
import { DATE_ACHIEVEMENT_RATE } from "../../../commons/images";

const RecommendedView = () => {
  const recommendedMealCards = [
    { img: DATE_ACHIEVEMENT_RATE, date: "2021.05.17 23:25", desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", subTitle: "#魚料理  #和食  #DHA" },
    { img: DATE_ACHIEVEMENT_RATE, date: "2021.05.17 23:25", desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", subTitle: "#魚料理  #和食  #DHA" },
    { img: DATE_ACHIEVEMENT_RATE, date: "2021.05.17 23:25", desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", subTitle: "#魚料理  #和食  #DHA" },
    { img: DATE_ACHIEVEMENT_RATE, date: "2021.05.17 23:25", desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", subTitle: "#魚料理  #和食  #DHA" },
  ]
  const recommendedTypeList = [
    {
      title: "RECOMMENDED COLUMN",
      subTitle: "オススメ"
    },
    {
      title: "RECOMMENDED DIET",
      subTitle: "ダイエット"
    },
    {
      title: "RECOMMENDED BEAUTY",
      subTitle: "美容"
    },
    {
      title: "RECOMMENDED HEALTH",
      subTitle: "健康"
    }
  ]
  return (
    <div className="flex-1 pt-14 pb-16">
      <div className="container">
        <div className="w-full mb-6">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {recommendedTypeList?.map((item, idx) => (
              <RecommendedType className="min-h-36" key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-7">
            {recommendedMealCards?.map((item, idx) => (
              <RecommendedMealCard key={idx} item={item} className="min-h-[222px] w-full" />
            ))}
          </div>
        </div>
        <div className="container">
          <Button className="mx-auto w-full md:w-[296px]" label="自分の日記をもっと見る" labelClassName="font-japanese" />
        </div>
      </div>
    </div>
  );
};

export default RecommendedView;
