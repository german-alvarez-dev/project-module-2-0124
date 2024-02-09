import './ApartmentsList.css'
import apartmentsData from './../../apartments-data.json'
import { useState } from 'react'
import ApartmentRow from '../ApartmentRow/ApartmentRow'
import NewApartmentForm from '../NewApartmentForm/NewApartmentForm'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(apartmentsData.results)

    const removeApartment = apartmentIDtoDelete => {
        const remainingApartments = apartments.filter(elm => elm.id != apartmentIDtoDelete)
        setApartments(remainingApartments)
    }

    const addApartment = newApartment => {
        const apartmentsCopy = [newApartment, ...apartments]
        setApartments(apartmentsCopy)
    }

    return (
        <section className="ApartmentsList">

            <NewApartmentForm addApartment={addApartment} />

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