import ServiceProviderUi from "./Service-Provider-UI/service-provider-ui"
import './services-provider.css'
import userImage from '../assets/user-default.webp'
import AdvancedPagination from "../AdvancedPagination/AdvancedPagination"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { getConsultantListApi } from "../../DAL/servisec-category"
const ServicesProvider = () => {
    const params = useParams();
    const [loading, setIsLoading] = useState(false);
    const [ConsultantArray, setConsultantArray] = useState([]);
    useEffect(()=>{
    const getConsultantServicesListing = async () => {          
          try {
            const data = {
                     service_category:"63e72f0ce69407dc015535cd"
               }
              const result = await getConsultantListApi(data);
              setIsLoading(false)
              if (result.code === 200) {                 
                    const consultantinfo = result.consultant.map((element) => {
                     return {
                                 id:element._id,
                                 image:element.profile_image,
                                 fullName:element.full_name
                            }
                    });
                    setConsultantArray(consultantinfo);
                    console.log(consultantinfo);
               } 
               else {
                    //  enqueueSnackbar(result.message, { variant: "error" });
                }
    } catch (error) {}
  }
  getConsultantServicesListing ();
},[])
    // const providerArray = [
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.Satisfy with the work of technician. Work doing in good way and timely.Satisfy with the work of technician. Work doing in good way and timely.Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     },
    //     {
    //         Image :{userImage},
    //         WorkerName : 'Asad Zaka',
    //         descripation : 'Satisfy with the work of technician. Work doing in good way and timely.'
    //     }
    // ]
    const workerArray = ConsultantArray.map((element) => {
       return(
        <ServiceProviderUi image = {element.image} WorkerName = {element.fullName} id ={element.id}></ServiceProviderUi>
       ) 
    }) 
    return(
        <div className="main-services-provider-contanier">
            <div className='title-services-contanier'>
               <h3 className='title-services'>Select Your Desired Service Now</h3>
               <p className='detail-title'>Home Fix provides ultimate installations, repairs, maintenance, and grooming services at your doorstep.</p>
            </div>
            <Link to='/WorkerProfile'>
              <div className="worker-list">
                 {workerArray}
              </div>
            </Link>
            <div className="pagination-container">
                <AdvancedPagination></AdvancedPagination>
            </div>
        </div>
    )
}
export default ServicesProvider