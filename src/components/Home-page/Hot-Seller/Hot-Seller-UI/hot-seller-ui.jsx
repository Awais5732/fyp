import './hot-seller-ui.css'
const HotSellerUi = (props) => {
    return (
            <div className='hot-seller-contanier'>
               <div className='hot-seller-num'>
                 <img className='hot-selller-image' src={props.image}></img>
                 <h3 className='hot-seller-name'>{props.WorkerName}</h3>
               </div>
            <p className='hot-seller-description'>{props.descripation}</p>
            <div className='hot-seller-rating-contanier'>
               <span className='hot-seller-Rating-heading'>Rating...</span>
               <div className='hot-seller-star contanier'>
                 <ul className='hot-seller-star'>
                    <li><ion-icon name="star-outline"></ion-icon></li>
                    <li><ion-icon name="star-outline"></ion-icon></li>
                    <li><ion-icon name="star-outline"></ion-icon></li>
                    <li><ion-icon name="star-outline"></ion-icon></li>
                    <li><ion-icon name="star-outline"></ion-icon></li>
                 </ul>
              </div>
             </div>
            </div>
    )
}
export default HotSellerUi