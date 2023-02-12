import { Link } from 'react-router-dom'
import Img from '../assets/g.jpg'
import './about-us.css'
const AboutUs = () => {
    return (
        <>
          <div className='about-us-contanier'>
            <div className='about-us-sub-contanier'>
                <img src={Img}></img>
                <h1>About Company</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacusat augue aliquet posuere. Aliquam fringilla elementum varius. Nunclobortis nisl in nibh commodo, quis placerat nisi feugiat.</p>
                <Link to ='/ContactUS'>
                   <button className='ContactUs-btn'>Contact US</button>
                </Link>
            </div>
          </div>  
        </>
    )
} 
export default AboutUs 