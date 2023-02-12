import './services.css'
import Plamber from '../../assets/Home-Services-Cleaning-Plumbing.jpg'
import DeepCleaner  from '../../assets/dep2-pspkrv3e82dca9r407glsj0jw1n678861ekht11f1w.jpg'
import Electriation from '../../assets/Depositphotos_41166455_l-2015-1024x684.jpg'
import Carpanter from '../../assets/carpenter-apprentice2-1.jpg'
import Paniter from '../../assets/images.jpg'
import AcSerices from '../../assets/7-Things-to-Remember-When-Choosing-an-Air-Conditioner-Repair-Company-_-Air-Conditioning-Service-in-Fort-Worth-TX-1024x683.jpg'
import ServicesUi from './uiServices/servicesUi'
import { useState, useEffect } from 'react';
import { GetCategory } from '../../../DAL/servisec-category'
import { useContext } from 'react';
import Store from '../../../store/store'
const Services = () =>  {
    const [loading, setIsLoading] = useState(false);
    const ctx = useContext(Store)
    
    useEffect(()=>{
    const getConsultantCategoryListing = async () => {          
          try {
              const result = await GetCategory();
              setIsLoading(false)
              if (result.code === 200) {                
                    const data = result.service_category.map((element) => {
                     return {
                               id:element._id,
                               title:element.title,
                               detail:element.detail,
                               image:'https://home-fix-app.s3.amazonaws.com/' + element.image
                            }
                    });
                    console.log(data)
                    ctx.setCategoryList(data);
                    console.log('hello world')
               } 
               else {
                    //  enqueueSnackbar(result.message, { variant: "error" });
                }
    } catch (error) {}
  }
  getConsultantCategoryListing();
},[])
    //     const servicesArray = [
    //     {
    //         id:1, 
    //         Image:Plamber,
    //         Heading:'Want An plumber',
    //         SubHeading :'leave it to us'
    //     },
    //     {
    //         id: 2,
    //         Image:DeepCleaner,
    //         Heading:'Want An Deep Cleaning',
    //         SubHeading :'leave it to us'
    //     },
    //     {
    //         id: 3,
    //         Image:Carpanter,
    //         Heading:'Want An Carpanter',
    //         SubHeading :'leave it to us'
    //     },
    //     {
    //         id: 4,
    //         Image: Electriation,
    //         Heading:'Want An Electrician',
    //         SubHeading :'leave it to us'
    //     },
    //     {
    //         id: 5,
    //         Image:Paniter,
    //         Heading:'Want An Paniter',
    //         SubHeading :'leave it to us'
    //     },
    //     {
    //         id: 6,
    //         Image:AcSerices,
    //         Heading:'Want An AC Services',
    //         SubHeading :'leave it to us'
    //     }
 
    // ]
    const uiGenater = (element) => {
        return (
            <ServicesUi id = {element.id} image = {element.image} Heading = {element.detail}></ServicesUi>
        )
      }
      const uiServiceArray =  ctx.categoryList.map(uiGenater)
    return (
        <>
               <div className='title-services-contanier'>
                  <h3 className='title-services'>Select Your Desired Service Now</h3>
                  <p className='detail-title'>Home Fix provides ultimate installations, repairs, maintenance, and grooming services at your doorstep.</p>
               </div>
            {loading===true ? <p>loading....</p>:
               <div className='services-contanier'>
                  {uiServiceArray}
              </div>
            }
        </>
    );
  }
  export default Services  





     
    
