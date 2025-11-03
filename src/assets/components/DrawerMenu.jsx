import classNames from "classnames";
import { NavLink } from "react-router";

export default function DrawerMenu({ className }) {
  const menuList = [
    {
      name: "自分の記録",
      path: "/record",
    },
    {
      name: "体重グラフ",
    },
    {
      name: "目標",
    },
    {
      name: "選択中のコース",
    },
    {
      name: "コラム一覧",
      path: "/recommended",
    },
    {
      name: "設定",
    },
  ];
  return (
    <ul
      className={classNames({
        [className]: !!className,
        "w-[280px] bg-[#6B6B6B]": true,
      })}
    >
      {menuList.map((item, idx) => (
        <NavLink to={item?.path}>
          <li
            key={idx}
            className="border-b border-gray-500 py-4 px-6 hover:bg-gray-600 transition cursor-pointer"
          >
            <span className="font-japanese text-[16px]">{item?.name}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}
