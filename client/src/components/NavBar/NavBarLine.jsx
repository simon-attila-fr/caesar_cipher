import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBarLine({ id, link, children }) {
  return (
    <li id={id}>
      <Link to={link}>{children}</Link>
    </li>
  );
}

NavBarLine.propTypes = {
  id: PropTypes.number,
  link: PropTypes.string,
  children: PropTypes.string,
};
