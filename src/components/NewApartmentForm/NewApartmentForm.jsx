import { useState } from 'react'
import './NewApartmentForm.css'

const NewApartmentForm = ({ addApartment }) => {

    const [apartmentData, setApartmentData] = useState({
        title: '',
        price: 0,
        rooms: 0,
        host: '',
        hostFrom: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setApartmentData({ ...apartmentData, [name]: value })
    }

    const handleFormSubmit = event => {

        event.preventDefault()

        const { title, price, rooms, host, hostFrom } = apartmentData

        const newApartment = {
            name: title,
            price: price,
            rooms: rooms,
            host_name: host,
            host_since: hostFrom
        }

        addApartment(newApartment)
    }

    return (
        <div className="NewApartmentForm">

            <form onSubmit={handleFormSubmit}>

                <div className="formControl">
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" value={apartmentData.title} onChange={handleInputChange} name="title" />
                </div>

                <div className="formControl">
                    <label htmlFor="price">Precio/noche</label>
                    <input type="number" id="price" value={apartmentData.price} onChange={handleInputChange} name="price" />
                </div>

                <div className="formControl">
                    <label htmlFor="rooms">Habitaciones</label>
                    <input type="text" id="rooms" value={apartmentData.rooms} onChange={handleInputChange} name="rooms" />
                </div>

                <div className="formControl">
                    <label htmlFor="host">Anfitrion/es</label>
                    <input type="text" id="host" value={apartmentData.host} onChange={handleInputChange} name="host" />
                </div>

                <div className="formControl">
                    <label htmlFor="hostFrom">Anfitrion/es desde</label>
                    <input type="text" id="hostFrom" value={apartmentData.hostFrom} onChange={handleInputChange} name="hostFrom" />
                </div>

                <input type="submit" value={'Crear apartamento'} />

            </form>
        </div>
    )
}

export default NewApartmentForm