import './Navbar.css'
import logo from './../../assets/img/logo.png'

const Navbar = () => {

    return (
        <header className="Navbar">
            <h1>Donuts Planet</h1>
            <img src={logo} alt="Logotipo" />
        </header>
    )
}

export default Navbar