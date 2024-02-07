import './ApartmentsList.css'
import apartmentsData from './../../apartments-data.json'
import { useState } from 'react'
import ApartmentRow from '../ApartmentRow/ApartmentRow'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(apartmentsData.results)

    const removeApartment = apartmentIDtoDelete => {
        const remainingApartments = apartments.filter(elm => elm.id != apartmentIDtoDelete)
        setApartments(remainingApartments)
    }

    return (
        <section className="ApartmentsList">

            {
                apartments.map(elm => {
                    return (
                        <ApartmentRow key={elm.id} apartmentInfo={elm} removeApartment={removeApartment} />
                    )
                })
            }

        </section>
    )
}

export default ApartmentsList