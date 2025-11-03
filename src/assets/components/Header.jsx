import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router";
import { LOGO } from "../../commons/images";
import DrawerMenu from "./DrawerMenu";
import { Icon } from "./Icon";

export const Header = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={classNames({
        [className]: !!className,
        "w-full bg-dark-600 text-white": true,
      })}
    >
      <div className="container h-[72px] relative">
        <NavLink to="/">
          <img src={LOGO} alt="Healthy" className="h-auto w-[109px]" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/record">
            <div className="flex items-center gap-2">
              <Icon name="icon-menu" />
              <span className="font-japanese">自分の記録</span>
            </div>
          </NavLink>

          <NavLink>
            <div className="flex items-center gap-2">
              <Icon name="icon-challenge" />
              <span className="font-japanese">チャレンジ</span>
            </div>
          </NavLink>

          <NavLink className="relative flex items-center gap-2 hover:opacity-80">
            <div className="flex items-center gap-2 relative">
              <Icon name="icon-info" />
              <span className="font-japanese">お知らせ</span>
              <span className="absolute -top-2 -right-3 bg-primary-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 grid place-items-center">
                1
              </span>
            </div>
          </NavLink>
        </nav>
        {open ? (
          <span
            className="text-primary-400 cursor-pointer md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            X
          </span>
        ) : (
          <button
            aria-label="Open menu"
            className="flex flex-col justify-between w-6 h-5 cursor-pointer md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="block w-full h-0.5 bg-primary-400 rounded"></span>
            <span className="block w-full h-0.5 bg-primary-400 rounded"></span>
            <span className="block w-full h-0.5 bg-primary-400 rounded"></span>
          </button>
        )}
        {open && <DrawerMenu className='absolute top-[72px] right-0 z-50 md:hidden'/>}
      </div>
    </header>
  );
};
