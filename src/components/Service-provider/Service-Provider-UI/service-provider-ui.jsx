import './service-provider-ui.css'
const ServiceProviderUi = (props) => {
    return(
        <div className='Service-provider-contanier'>
            <div className='Service-provider-Sub-contanier'>
               <div className='worker-contanier'>
                 <img className='user-image' src={props.image}></img>
                 <h3 className='woker-name'>{props.WorkerName}</h3>
               </div>
            <p className='deisc'>{props.descripation}</p>
            <div className='rating-contanier'>
               <span className='Rating-heading'>Rating...</span>
               <div className='star contanier'>
                 <ul className='star'>
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
    )
}
export default ServiceProviderUi