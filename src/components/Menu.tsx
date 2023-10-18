import { NavLink } from "react-router-dom";

function getClass({ isActive }: { isActive: boolean }): string {
  return isActive ? "menu__item menu__item-active" : "menu__item";
}

function Menu() {
  return (
    <div className="menu">
      <NavLink className={getClass} to="/">
        Главная
      </NavLink>
      <NavLink className={getClass} to="/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className={getClass} to="/timeattack">
        Time Attack
      </NavLink>
      <NavLink className={getClass} to="/forza">
        Forza Carting
      </NavLink>
    </div>
  );
}

export default Menu;