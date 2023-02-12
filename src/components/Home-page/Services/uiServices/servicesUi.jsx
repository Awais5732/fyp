import { Link } from 'react-router-dom'
import './servicesUi.css'
import { useContext } from 'react';
import Store from '../../../../store/store';
const ServicesUi =  (props) => {
    const ctx = useContext(Store);
    return(    
            <div className='services-img-contanier'>
                <img className='service-img' src = {props.image}></img>
                <div className='title'>
                   <h3 className='title-heading'>{props.Heading}</h3>
                   <h5 className='title-sub-heading'>leave it to us</h5>
                </div>
                <Link to={ctx.token ? `/ServiceProvider/${props.id}` : `/SignIn`}>
                   <div className='button-contanier'>
                       <button className='book-now-btn'>Book Now</button>
                   </div>
                </Link>
            </div>
    )
}
export default ServicesUi