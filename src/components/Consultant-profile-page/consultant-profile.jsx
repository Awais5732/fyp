import './consultant-profile.css'
import ConsultantBgImg from '../assets/plumber.jpg'
import ConsultantImg from '../assets/user-default.webp'
import { Link } from 'react-router-dom'
const ConsultantProfile = () => {
    return (
       <>
           <div className='consultant-profile-contanier'>
              <div className='consultant-image-contanier'>
                   <img src={ConsultantBgImg }></img>
              </div>
              <div className='consultant-userImg-contanier'>
                  <img src={ConsultantImg}></img>
              </div>
              <div className='consultant-Name'>
                  <h4>Awais Afzal</h4>
              </div>
              <div className='consultant-info'>
                  <div className='consultant-info-contanier'>
                     <div className='consultant-info-lef-contanier'>
                        <ul className='consultant-iformation'>
                            <li><h3>Experiences</h3></li>
                            <li><p> Five Year</p></li>
                            <li><h4>Category</h4></li>
                            <li><p>plumber</p></li>
                            <li><h5>Address</h5></li>
                            <li><p>Madhali shrief 87A/6R</p></li>
                            <li><h5>worker ID</h5></li>
                            <li><p>#128822</p></li>                            
                        </ul>
                     </div>
                     <div className='consultant-info-right-contanier'>
                     <ul className='consultant-iformation'>
                            <li><h3>Phone No</h3></li>
                            <li><p>03205583287</p></li>
                            <li><h4>CNIC</h4></li>
                            <li><p>36502-8992992-1</p></li>
                            <li><h5>Password</h5></li>
                            <li><p>123456888</p></li>
                            <li><h5>Email</h5></li>
                            <li><p>awaisch@gmail.com</p></li>                            
                        </ul>
                     </div>
                  </div>
                  <div className='consultant-description'>
                    <h2>Description</h2>
                        <p>Satisfy with the work of technician. Work doing in good way and timely.
                        Satisfy with the work of technician. Work doing in good way and timely.</p>
                  </div>
                  <div className='consultant-rating-contanier'>
                    <span className='consultant-Rating-heading'>Rating...</span>
                    <div className='consultant-star-contanier'>
                       <ul className='consultant-star'>
                          <li><ion-icon name="star-outline"></ion-icon></li>
                          <li><ion-icon name="star-outline"></ion-icon></li>
                          <li><ion-icon name="star-outline"></ion-icon></li>
                          <li><ion-icon name="star-outline"></ion-icon></li>
                          <li><ion-icon name="star-outline"></ion-icon></li>
                       </ul>
                   </div>
                </div> 
              </div>          
           </div>
       </>
    )
}
export default ConsultantProfile