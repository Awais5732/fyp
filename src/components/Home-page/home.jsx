import Services from "./Services/services"
import Complain from "./Complain/complain"
import HomeFixDetail from "./HomeFixdetail/home-detail"
import Banner from "./Banner/banner"
import HotSeller from "./Hot-Seller/hot-seller"
import './home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HotSeller></HotSeller>
            <HomeFixDetail></HomeFixDetail>
            <Complain></Complain>    
        </div>
    )
}
export default Home