import './Navbar.css'
import logo from './../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header className="Navbar">
            <h1>Donuts Planet</h1>
            <Link to="/">
                <img src={logo} alt="Logotipo" />
            </Link>
        </header>
    )
}

export default Navbar