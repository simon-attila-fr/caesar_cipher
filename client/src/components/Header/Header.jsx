import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header({classname, title}) {
    const menu_items = [
        {
            id: 1,
            link: 'caesar',
            menu_text: 'Caesar'
        },
        {
            id: 2,
            link: 'tech_details',
            menu_text: 'Technical details'
        }
    ];

    return(
        <div className={classname}>
            <h1 id="caesar-home-header-title">
                <Link to={'/'}>{title}</Link> 
            </h1>
            <NavBar menu_items={menu_items} classname="caesar-home-header-navbar"/>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    classname: PropTypes.string
}