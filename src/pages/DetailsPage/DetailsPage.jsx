import { Link, Navigate, useParams } from 'react-router-dom'
import './DetailsPage.css'
import apartmentsData from './../../apartments-data.json'

const DetailsPage = () => {

    const { apartment_id } = useParams()

    const foundAparatment = apartmentsData.results.find(elm => elm.id == apartment_id)

    if (!foundAparatment) return <Navigate to="/pafuera" />

    return (
        <div className="DetailsPage">
            <h1>Detalles de {foundAparatment.name} ({apartment_id})</h1>
            <hr />
            <p>{foundAparatment.description}</p>
            <hr />
            <h4>Specs</h4>
            <p>Baños: {foundAparatment.bathrooms} | Habitaciones: {foundAparatment.bedrooms}</p>
            <hr />

            <Link to="/">Volver a los apartamentos</Link>
        </div>
    )
}

export default DetailsPage