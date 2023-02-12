import './footer.css'
import logoHomeFix from '../assets/logo-home-fix.png'
const Footer = () => {
return (
    <div className="footer-contanier">
        <div className='footer-top-contanier'>
            <div className='box1'>
                <img className='logoHomefix' src={logoHomeFix}></img>
                <p className='logoHomefix-detail'>When it comes to Kam Kaj, the object of the word 'Kam' reflects our motive to add value to our customers' lives by providing all the essential services in their day-to-day lives. On the other hand, the word 'Kaj' highlights our motive to reduce the unemployment from Pakistan by hiring in-house staff whom we train in any given skills.</p>
            </div>
            <div>
                <h3 className='heading'>Company</h3>
                <ul>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Videos</li>
                </ul>
            </div>
            <div>
            <h3 className='heading'>Customers</h3>
                <ul>
                    <li>How it works</li>
                    <li>iPhone app</li>
                    <li>Android app</li>
                </ul>
            </div>
            <div className='box4'>
            <h3 className='heading'>Support</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>0304-111-1526</li>
                    <li>support@kamkaj.pk</li>
                </ul>
            </div>
        </div>
        <div className='footer-middal-contanier'>
            <div className='left-contanier'>
                <span>Follow Us</span>
                <ul className='icon-contanier'>
                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                    <li><ion-icon name="logo-youtube"></ion-icon></li>
                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                    <li><ion-icon name="logo-linkedin"></ion-icon></li>
                </ul>
            </div>
            <div className='right-contanier'>
                    <span>Mobile App</span>
                    <ul className='app'>
                        <li><ion-icon name="logo-apple"></ion-icon></li>
                        <li><ion-icon name="logo-android"></ion-icon></li>
                    </ul>
            </div>
        </div>
        <div className='bottom-contanier'>
            <span>Copyright © 2017 - 2023 Kam Kaj. Kam Kaj logo and related marks are registered Trademarks of Kam Kaj.</span>
            <span className='Privacy-Policy'>Privacy Policy</span>
            <span className='Terms-of-Use'>Terms of Use</span>
        </div>
    </div>
)
}
export default Footer