import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
// let c1 = "item";
// let c2 = "active";
//  "item active"
// let classes = c1 + " " + c2;
// let classesNew = `${s.item} ${c2}`;

const Navbar =() => {
    return  <nav className={s.nav}>
    
    
    <div className={s.item}>
      <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>  {/* это для пример */}
      <NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/News" activeClassName={s.active}>News</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
    </div>
  </nav>
}
export default Navbar;