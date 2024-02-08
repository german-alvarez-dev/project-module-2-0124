import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    return (
        <header className="Sidebar">
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre nosotros</Link>
        </header>
    )
}

export default Sidebar