import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'></Button>
            <Button color='gray' text='Add 2'></Button>
            <Button color='blue' text='Add 3'></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'green'
// }

export default Header
