import './hot-seller.css'
import HotSellerUi from './Hot-Seller-UI/hot-seller-ui'
import { useState, useEffect} from 'react'
import userImage from '../../assets/user-default.webp'
import { GetHotSeller } from '../../../DAL/hot-Seller-Listing'
const HotSeller = () => {
       const [loading, setIsLoading] = useState(false);
    //     const [hotSellerArray, setHotSellerArray] = useState([]);
    //     useEffect(()=>{
    //     const getHotSellerListing = async () => {          
    //           try {
    //               const result = await GetHotSeller()
    //               setIsLoading(false)
    //               if (result.code === 200) {                
    //                     const data = result.map((element) => {
    //                      return {
    //                                    image:element.image,
    //                                    fullName:element.full_name,
    //                                    descripation:element.work_detail,
    //                                    rating:element.rating
    //                             }
    //                     });
    //                     setHotSellerArray(data);
    //                } 
    //                else {
    //                     //  enqueueSnackbar(result.message, { variant: "error" });
    //                 }
    //     } catch (error) {}
    //   }
    //   getHotSellerListing();
    // },[])    
    const hotSellerArray = [
        {
            Image :{userImage},
            WorkerName : 'Asad Zaka',
            descripation : 'Satisfy with the work of technician. Work doing in good way and timely.Satisfy with the work of technician. Work doing in good way and timely.Satisfy with the work of technician. Work doing in good way and timely.Satisfy with the work of technician. Work doing in good way and timely.'
        },
        {
            Image :{userImage},
            WorkerName : 'Asad Zaka',
            descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
        },
        {
            Image :{userImage},
            WorkerName : 'Asad Zaka',
            descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
        }
    ]
    const newHotSellerArray = hotSellerArray.map((element) => {
       return(
        <HotSellerUi image = {element.Image} WorkerName = {element.WorkerName} descripation = {element.descripation}></HotSellerUi>
       ) 
    }) 
    

    return (
        <>
           <div className='Hot-seller-title-Contanier'>
                <h3 className='hot-seller-title'>Hot-sellers are up for grabs!</h3>
                <p className='hot-seller-detail'>The high customer repeat rate & excellent reviews show how much our customers </p>
                <p className='hot-seller-detail'>Love these Home Fix services!</p>
           </div>
           {loading ? <p>loading....</p> : 
           <div className='hot-seller-main-contanier'>
                {newHotSellerArray}
           </div>
           }
         
        </>
    )
}
export default HotSeller