import ApartmentsList from "./../../components/ApartmentsList/ApartmentsList"
import './DashboardPage.css'

const DashboardPage = () => {

    return (
        <div className="DashboardPage">
            <h1>Apartamentos</h1>
            <hr />
            <ApartmentsList />
        </div>
    )
}

export default DashboardPage