import Menu from '../../menu/Menu';
import { useState } from 'react';

const NavList = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <ul className="navigation__list-container">
        <li className="navigation__menu" onClick={() => setShowMenu(!showMenu)}>
          <span className="navigation__text">Menu</span>
        </li>
      </ul>
      {showMenu ? <Menu /> : null}
    </>
  );
};

export default NavList;
