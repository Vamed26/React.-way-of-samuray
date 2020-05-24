import React from 'react';
import s from "./Header.module.css";

const Header =() => {
    return  (<header className={s.header}>
        
<img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
<h2 className={s.siteName}>Animal virtual planet</h2>
</header>);

}
export default Header;