import classNames from "classnames";

export const Footer = ({ className }) => {
  return (
    <footer
      className={classNames({
        [className]: !!className,
        "w-full bg-dark-600 text-white": true,
      })}
    >
      <ul className="container flex-wrap h-32 gap-2 py-2">
        <li className="text-[11px] leading-4 font-light font-japanese">
          会員登録
        </li>
        <li className="text-[11px] leading-4 font-light font-japanese">
          運営会社
        </li>
        <li className="text-[11px] leading-4 font-light font-japanese">
          利用規約
        </li>
        <li className="text-[11px] leading-4 font-light font-japanese">
          個人情報の取扱について
        </li>
        <li className="text-[11px] leading-4 font-light font-japanese">
          特定商取引法に基づく表記
        </li>
        <li className="text-[11px] leading-4 font-light font-japanese">
          お問い合わせ
        </li>
      </ul>
    </footer>
  );
};
