import { Link } from 'react-router-dom'
import BgImage from '../assets/360_F_466875610_xVEqoVtzKFcqiNycJi7X3Yu1nhYoRZm4.jpg'
import ClientImg from '../assets/user-default.webp'
import './client-profile.css'
const ClientProfile = () => {
    return (
        <div>
            <div className='Client-profile-contanier'>
              <div className='client-image-contanier'>
                   <img src={BgImage}></img>
              </div>
              <div className='client-userImg-contanier'>
                  <img src={ClientImg}></img>
              </div>
              <div className='client-Name'>
                  <h4>Awais Afzal</h4>
              </div>
              <div className='client-data-contanier'>
                     <div className='client-detail'>
                        <ul className='client-iformation'>
                            <li className='client-info-title'><h4>Contact No </h4></li>
                            <li className='client-info'>
                                 <p>0320-5583287</p>
                                 <ion-icon name="create-outline"></ion-icon>
                            </li>
                            <li className='client-info-title'><h4>Password</h4></li>
                            <li className='client-info'>
                                 <p>123345677998</p>
                                 <ion-icon name="create-outline"></ion-icon>
                            </li>
                            <li className='client-info-title'><h4>CNIC No</h4></li>
                            <li className='client-info'>
                                 <p>36502-88388322-8</p>
                                 <ion-icon name="create-outline"></ion-icon>
                            </li>
                            <li className='client-info-title'><h4>Email Us</h4></li>
                            <li className='client-info'>
                                 <p>awaisch8687@gmail.com</p>
                                 <ion-icon name="create-outline"></ion-icon>
                            </li>
                            <li className='client-info-title'><h4>Address</h4></li>
                            <li className='client-info'>
                                  <p>Madhali shrief 87A/6R</p>
                                  <ion-icon name="create-outline"></ion-icon>
                            </li>
                        </ul>
                     </div>
                     <div className='Order-History-Btn'>
                     <Link to='/OrderHistory'>
                          <button>Order History</button>
                     </Link>
                     </div>
              </div>          
           </div>
        </div>
    )
}
export default ClientProfile