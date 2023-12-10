import PropTypes from 'prop-types'
import NavBar from '../NavBar/NavBar'

export default function Header({title}) {
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
        <>
            <h1>
                {title}
            </h1>
            <NavBar menu_items={menu_items}/>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string
}