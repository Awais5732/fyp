import { Link } from 'react-router-dom'
import './banner.css'
const Banner = () => {
    return(
            <div className="banner-contanier">
                <div className='title-homefix'>
                     <h1 className='skill'>Skilled Professional</h1>
                     <h1 className='doorstep'>At Your Doorstep</h1>
                     <Link to='/AllService'>
                        <button className='book-now'>Book Now</button>
                     </Link>
               </div>
            </div>       
    )
}
export default Banner