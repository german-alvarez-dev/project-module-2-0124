import { Link } from 'react-router-dom'
import './ApartmentRow.css'

const ApartmentRow = ({ apartmentInfo, removeApartment }) => {

    const imageSource = apartmentInfo.picture_url ? apartmentInfo.picture_url.url : 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'

    return (
        <div className="ApartmentRow">

            <figure>
                {/* <img src={apartmentInfo.picture_url && apartmentInfo.picture_url.url} alt={`Fotografía de la propiedad ${apartmentInfo.name}`} /> */}
                {/* <img src={apartmentInfo.picture_url?.url} alt={`Fotografía de la propiedad ${apartmentInfo.name}`} /> */}
                <img src={imageSource} alt={`Fotografía de la propiedad ${apartmentInfo.name}`} />
            </figure>

            <article className="info">
                <Link to={`/details/${apartmentInfo.id}`}>
                    <p><strong>{apartmentInfo.name}</strong></p>
                </Link>
                <div className="details">
                    <p>{apartmentInfo.price}€/noche | {apartmentInfo.bedrooms} habitaciones | {apartmentInfo.bathrooms} baños </p>
                    <p>
                        Alquilado por {apartmentInfo.host_name} (activo/s desde {apartmentInfo.host_since}) |
                        {apartmentInfo.bedrooms > 2 && apartmentInfo.bathrooms > 1 ? ' Selección BIG!' : ' Selección COZZY'}
                    </p>
                </div>
            </article>

            <button onClick={() => removeApartment(apartmentInfo.id)}>Eliminar propiedad</button>

        </div>
    )
}

export default ApartmentRow