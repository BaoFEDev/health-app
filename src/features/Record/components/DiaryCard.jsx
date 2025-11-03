import classNames from "classnames";

const DiaryCard = (props) => {
  const { className } = props;
  return (
    <div className={classNames({
      [className]: !!className,
      "w-full h-full border border-gray-400 p-4 flex flex-col text-gray-700": true
      })}>
      <div className="text-lg font-medium leading-tight mb-2">
        <p>2021.05.21</p>
        <p>23:25</p>
      </div>

      <div className="text-sm leading-relaxed">
        <p className="mb-2 font-japanese">私の日記の記録が一部表示されます。</p>
        <p className="line-clamp-5 font-japanese">
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト…
        </p>
      </div>
    </div>
  );
};

export default DiaryCard;
