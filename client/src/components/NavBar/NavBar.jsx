import PropTypes from "prop-types";
import NavBarLine from "./NavBarLine";

export default function NavBar({ menu_items, classname }) {
  return (
    <nav className={classname}>
      <ul>
        {menu_items.map((e) => (
          <NavBarLine key={e.id} link={e.link}>
            {e.menu_text}
          </NavBarLine>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  menu_items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      menu_text: PropTypes.string.isRequired,
    })
  ),
  classname: PropTypes.string
};
