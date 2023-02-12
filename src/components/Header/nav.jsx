import { Link } from 'react-router-dom'
import homeFixLogo from '../assets/logo-home-fix.png'
import './nav.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import Store from '../../store/store'
const NavBar = () => {
    const ctx = useContext(Store)
    const history = useHistory();
    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        ctx.setToken(false)
        history.push('/signin')
    } 
return (   
        <header>
            <nav className='navbar'>
                <div className="navbar-left-elements">
                    <Link to='/'>
                        <img className="logo" src={homeFixLogo}></img>
                    </Link>
                </div>
                <div className="navbar-main-manu">
                    <ul className="navbar-li-elements">
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <li className='services-dropDown'>
                            <span>Services</span> 
                            <ion-icon name="caret-down-outline"></ion-icon>
                            <div class="dropdown-subcontainer">
                                <ul class="dropdown-links-container">
                               { ctx.categoryList.map((element) => {
                                    return (
                                        <li>
                                            <Link to={ctx.token ? `/ServiceProvider/${element.id}` : `/SignIn`}>{element.title}</Link>
                                        </li>
                                    )
                                })
                                      
                                }     
                                </ul>
                            </div>
                        </li>
                        <Link to='/AboutUS'>
                            <li>About Us</li>
                        </Link>
                        <Link to ='/ContactUS'>
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                <div className="navbar-right-elements">
                <ion-icon name="person-circle-outline"></ion-icon>
                    <div class="dropdown-register-conrtanie">
                        <ul class="dropdown-reg-sub-contanier">
                        {ctx.token ? <Link to='/Client-profile'>
                                <li className='my-profile'>
                                  <p>My Profile</p>
                                  <ion-icon name="people-outline"></ion-icon>
                                </li>    
                            </Link> : null}
                            {ctx.token ? null :
                                <Link to='/SignUp'>
                                <li  className='my-profile'>
                                  <p>Sign UP</p> 
                                  <ion-icon name="person-add-outline"></ion-icon>
                                </li>
                            </Link>
                            }
                            {ctx.token ? null :
                            <Link to='/SignIn'>
                                <li className='my-profile'>
                                  <p>Sigh IN</p>
                                  <ion-icon name="log-in-outline"></ion-icon>
                                </li>
                            </Link>
                            }
                            {
                                ctx.token ? 
                                <li onClick={logoutHandler} className='my-profile'>
                                  <p>Sign Out</p>
                                  <ion-icon name="log-out-outline"></ion-icon>
                                </li>
                            : null
                            }
                            
                            <Link to='/ConsultantProfile'>
                            <li>consultant</li>
                            </Link>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar