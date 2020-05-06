import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
const Dialogs =(props) => {
    return  (
      <div className={s.dialogsItem}>
        <div className={s.dialogs}>
          <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/1">Vasya</NavLink>
          </div>
          <div className={`${s.dialog} ${s.active}`}>
            <NavLink to="/dialogs/2">Marina</NavLink>
          </div>
          <div className={s.dialog}>
            Vitaliy
          </div>
          <div className={s.dialog}>
            Ignat
          </div>
          <div className={s.dialog}>
            Artem
          </div>
        </div>
        <div className={s.mesages}>
          <div className={s.message}>Hello</div>
          <div className={s.message}>How is your React</div>
          <div className={s.message}>Yo</div>
        </div>

      </div>
    )
}
export default Dialogs;