import './styles/menu.scss';

const Menu = () => {
  const menuItems = [
    'Animals',
    'Environment',
    'History & Culture',
    'Science',
    'Travel',
  ];
  return (
    <section className="menu">
      <div className="menu__wrapper">
        <ul className="menu__list">
          <li className="menu__list-title">
            <span className="menu__list-title-text">Topics</span>
          </li>
          {menuItems.map((e, i) => {
            return (
              <li className="menu__list-item" key={i}>
                <span className="menu__category-text">{e}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
