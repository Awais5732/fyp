import './worker-profile.css'
import plumberimg from '../assets/user-default.webp'
import plumberBgImg from '../assets/plumber.jpg'
import { Link } from 'react-router-dom'
import { create_chat } from '../../DAL/chat'
import { useHistory } from 'react-router-dom'
const WorkerProfile = () => {
    const history = useHistory()


    const handleOpenChat = async (id) => {
        // user_id:63db5f594fbf0c3a0277c187
        // _id:63db5f5a4fbf0c3a0277c188
        const postData = {
            chat_with: "63db5f594fbf0c3a0277c187",
        }
        const resp = await create_chat(postData)
        if (resp.code == 200) {
            console.log(resp, "resp of chat");
            history.push('/chat', {

                resp,
                person_id: postData.chat_with

            })
        }
    }
    return (
        <div className='worker-profile-contanier'>
            <div className='image-contanier'>
                <img src={plumberBgImg}></img>
            </div>
            <div className='userImg-contanier'>
                <img src={plumberimg}></img>
            </div>
            <div className='woker-Name'>
                <h4>Awais Afzal</h4>
            </div>
            <div className='Woker-info'>
                <div className='Woker-info-contanier'>
                    <div className='worker-info-lef-contanier'>
                        <ul className='worker-iformation'>
                            <li><h2>Description</h2></li>
                            <li><p className='Worker-description'>Satisfy with the work of technician. Work doing in good way and timely.
                                Satisfy with the work of technician. Work doing in good way and timely.</p></li>
                            <li><h3>Experiences</h3></li>
                            <li><p> Five Year</p></li>
                            <li><h4>Category</h4></li>
                            <li><p>plumber</p></li>
                            <li><h5>Address</h5></li>
                            <li><p>Madhali shrief 87A/6R</p></li>
                            <li className='id-contanier'>
                                <div>
                                    <h5>worker ID</h5>
                                    <span>#16666</span>
                                </div>
                                <div>
                                    <Link to='/WorkerContactUS'>
                                        <button className='complain'>Complain</button>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='worker-info-right-contanier'>
                        <div className='review-Service-provider-contanier'>
                            <h2>Customer Review</h2>
                            <div className='review-Service-provider-Sub-contanier'>
                                <div className='review-worker-contanier'>
                                    <img className='review-user-image' src={plumberimg}></img>
                                    <h3 className='review-woker-name'>Awais Afzal</h3>
                                </div>
                                <p className='review-deisc'>Satisfy with the work of technician. Work doing in good way and timely.</p>
                            </div>
                        </div>
                        <div className='conatct-woker-title'>
                            {/* <h3>Contact With Services</h3> */}
                            <h3 className='provider-title'>Communication</h3>
                            <p>Satisfy with the work of technician. Work doing in good way and timely.Satisfy with the work of technician. Work doing in good way and timely.</p>
                        </div>
                        {/* <Link to ='/Chat'> */}
                        <div className='chat-contanier'>
                            <button onClick={handleOpenChat}>
                                <h4>Clink on</h4>
                                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                            </button>
                        </div>
                        {/* </Link> */}
                    </div>

                </div>
                <div className='Woker-rating-contanier'>
                    <span className='Worker-Rating-heading'>Rating...</span>
                    <div className='Worker-star-contanier'>
                        <ul className='worker-star'>
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
export default WorkerProfile
