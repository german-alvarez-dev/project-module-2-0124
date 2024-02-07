import ApartmentsList from "../ApartmentsList/ApartmentsList"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

const HomePage = () => {

    return (
        <div className="HomePage">
            <Navbar />
            <Sidebar />
            <ApartmentsList />
            <Footer />
        </div>
    )
}

export default HomePage