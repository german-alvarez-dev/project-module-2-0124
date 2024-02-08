import { Link } from "react-router-dom"

const NotfoundPage = () => {

    return (
        <div className="NotfoundPage">

            <h1>No se encontró D:</h1>

            <Link to="/">Volver a los apartamentos</Link>
        </div>
    )
}

export default NotfoundPage