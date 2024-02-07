import './ApartmentRow.css'

const ApartmentRow = props => {

    const apartment = props.apartmentInfo
    const removeApartment = props.removeApartment

    return (
        <div className="ApartmentRow">

            <figure>
                <img src={apartment.picture_url.url} alt={`Fotografía de la propiedad ${apartment.name}`} />
            </figure>

            <article className="info">
                <p><strong>{apartment.name}</strong></p>
                <div className="details">
                    <p>{apartment.price}€/noche | {apartment.bedrooms} habitaciones | {apartment.bathrooms} baños </p>
                    <p>
                        Alquilado por {apartment.host_name} (activo/s desde {apartment.host_since}) |
                        {apartment.bedrooms > 2 && apartment.bathrooms > 1 ? ' Selección BIG!' : ' Selección COZZY'}
                    </p>
                </div>
            </article>

            <button onClick={() => removeApartment(apartment.id)}>Eliminar propiedad</button>

        </div>
    )
}

export default ApartmentRow