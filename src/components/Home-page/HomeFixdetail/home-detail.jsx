import './home-detail.css'
const HomeFixDetail = () => {
    return (
      <>
      <div>
         <h3 className='choose-title'>Why Choose Us</h3>
         <p className='choose-paragraph'>Make your life easier by using Home Fix web app</p>
      </div>
        <div className='homeFixDetail-contanier'>
            <div className='homeFixDetail-left-contanier'>
                <div className='homeFixDetail-img-contanier'>

                </div>
            </div>
            <div className='homeFixDetail-right-contanier'>
               <ul className='homeFixDetail-right-sub-contanier'>
                  <li><h2>Why Choose Home Fix?</h2></li>
                  <li><p>Kam Kaj is a value addition which covers all 360 services under one platform. Our motive is to provide best services to our corporate, commercial, and residential customers. Our main key components to success are :</p></li>
                  <li>
                    <div className='homeFixDetail-right-contanier-detail'>
                       <ion-icon name="shield-checkmark-outline"></ion-icon>
                       <h5 class="xts-margin-0">Vetted and background-checked in house staff</h5>
                    </div>
                  </li>
                  <li>
                    <div className='homeFixDetail-right-contanier-detail'>
                       <ion-icon name="cog-outline"></ion-icon>
                       <h5 class="xts-margin-0">High-Tech and Most Advanced Equipment</h5>
                    </div>
                  </li>
                  <li>
                    <div className='homeFixDetail-right-contanier-detail'>
                       <ion-icon name="shield-checkmark-outline"></ion-icon>
                       <h5 class="xts-margin-0">Quality Control and Safety</h5>
                    </div>
                  </li>
                  <li>
                    <div className='homeFixDetail-right-contanier-detail'>
                       <ion-icon name="shield-checkmark-outline"></ion-icon>
                       <h5 class="xts-margin-0">Affordable and Upfront Pricing</h5>
                    </div>
                  </li>
                  <li>
                    <div className='homeFixDetail-right-contanier-detail'>
                       <ion-icon name="timer-outline"></ion-icon>
                       <h5 class="xts-margin-0">Timely and Convenient Services</h5>
                    </div>
                  </li>
                  <li>
                    <div className='homeFixDetail-right-contanier-detail'>
                       <ion-icon name="shield-checkmark-outline"></ion-icon>
                       <h5 class="xts-margin-0">Experienced, Trained and Certified</h5>
                    </div>
                  </li>
                  <li>
                    <div className='homeFixDetail-right-contanier-detail'>
                       <ion-icon name="shield-checkmark-outline"></ion-icon>
                       <h5 class="xts-margin-0">Post Service Guarantee</h5>
                    </div>
                  </li>
               </ul>
            </div>
        </div>
        </>
    )
}
export default HomeFixDetail 