import './sign-up.css'
import profileLogo from '../../assets/profile-logo.svg'
import { useState } from 'react'
import { GetCategory, signup } from '../../../DAL/auth'
import { useContext } from 'react'
import Store from '../../../store/store'
import { useHistory } from 'react-router-dom'
import {UploadCommentImageOnS3} from '../../../DAL/uploadImage'
const SignUp = () => {
    const [workerInfoMenu, setWorkerInfoMenu] = useState(false);
    const [input, setInput] = useState({
            full_name: "",
            email:"",
            contact_number: "",
            password:"",
            full_address: "",
            cnic:"",
            customer_type: "", 
            service_category: [
                {
                    service_category_id: "63e72f0ce69407dc015535cd",
                    work_experience: 0,
                    work_detail:"my name is awais",
                }
            ]
    }) 
    const ctx = useContext(Store)
    const history = useHistory()
    const showWorkerMenuHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value
        setInput({ ...input, [name]: value })
        setWorkerInfoMenu(true)
    }
    const removeWorkerMenuHandler = () => {
        setInput(
            {
                full_name: input.full_name,
                email: input.email,
                contact_number: input.contact_number,
                password: input.password,
                full_address: input.full_address,
                cnic: input.cnic,
                customer_type: "user"
            }
        )

        setWorkerInfoMenu(false)
    }
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({ ...input, [name]: value })
    }
    const fileChangedHandler = async (e) => {
    // setProfileImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    console.log(e.target.files[0])
    formData.append("image", e.target.files[0]);
    formData.append("image_dir", "service_category");
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
    console.log(formData, "imageUploadimageUpload");
    const imageUpload = await UploadCommentImageOnS3(formData);
    console.log(imageUpload, "imageUploadimageUpload");
    if (imageUpload.code == 200) {
      setInput({
        ...input,
        ["image"]: imageUpload.path,
      });
    } else {
    //   enqueueSnackbar(imageUpload.message, { variant: "error" });
    }
  };
    const submitHandler = async (event) => {
        event.preventDefault();
            let resp = await signup(input)
            localStorage.setItem('token', resp.customer.token)
            ctx.setToken(localStorage.getItem('token'))
            history.push('/') 
    }   
    return (
        <div className="contanier">
            <div className='sub-contanier'>
                <div className='sign-up-contanier'>
                    <div className='profile-heading'>
                        <h3>Profile</h3>
                    </div>
                    <div className='profile-contanier'>
                        <div className='img-broder'>
                            <img className='profile-image' src={profileLogo}></img>
                            <a className='add-img-broder'>
                            <label htmlFor='contained-button-file'>
                                <ion-icon for='awais' name="add-outline"></ion-icon>
                            </label>
                            
                            <input  onChange={fileChangedHandler} accept="image/*" id="contained-button-file" multiple type="file" name="image">
                            </input>  
                            </a>
                        </div>
                    </div>
                    <div className='from-contanier'>
                        <form encType='multipart/form-data' onSubmit={submitHandler} className='form'>
                            <div className='value-contanier'>
                                <label htmlFor="Full Name">Full Name</label>
                                <input value={input.full_name} onChange={handleChange} name='full_name' type='text' id='Full Name' placeholder='Enter Your Name'></input>
                            </div>
                            <div className='value-contanier'>
                                <label htmlFor="Email Address">Email Address</label>
                                <input value={input.email} onChange={handleChange} name='email' type="email" id='Email Address' placeholder='Enter Your Email'></input>
                            </div>
                            <div className='value-contanier'>
                                <label htmlFor="Number">Number</label>
                                <input value={input.contact_number} onChange={handleChange} name='contact_number' type="number" id='Number' placeholder='Enter Phone Number'></input>
                            </div>
                            <div className='value-contanier'>
                                <label htmlFor="Password">Password</label>
                                <input value={input.password} onChange={handleChange} name='password' type="password" id='Password' placeholder='Enter Your Password'></input>
                            </div>
                            <div className='value-contanier'>
                                <label htmlFor="Address">Address</label>
                                <input value={input.full_address} onChange={handleChange} name='full_address' type="text" id='Address' placeholder='Enter Your Address'></input>
                            </div>
                            <div className='value-contanier'>
                                <label htmlFor="CNIC">CNIC</label>
                                <input value={input.cnic} onChange={handleChange} name='cnic' type="number" id='cnic' placeholder='Enter Your CNIC'></input>
                            </div>
                            <div className='value-contanier'>
                                <label>Type ?</label>
                                <div className='type-contanier'>
                                    <label htmlFor="Client">Client</label>
                                    <input onClick={removeWorkerMenuHandler} id='client' type="radio" name='customer_type'></input>
                                    <label htmlFor="Work">Worker</label>
                                    <input value="consultant" onClick={showWorkerMenuHandler} id='work' type="radio" name='customer_type'></input>
                                </div>
                            </div>
                            {
                                workerInfoMenu === true ?
                                    <>
                                     <div className='value-contanier'>
                                        <div className='category-contanier'>
                                               <label>Select Your Category</label>
                                               <select name="service_category_id" id=" CategoryValue" onChange={handleChange}>
                                                    {
                                                        ctx.categoryList.map((element) => {
                                                            return <option value={element.id}>{element.title}</option>
                                                        })
                                                    }
                                                    
                                                </select>
                                         </div>
                                         <div className='value-contanier'>
                                            <label htmlFor="Experiences">Experiences</label>
                                            <input name='Experiences' type="text" id='Experiences' placeholder='Enter Your Experiences In Character'></input>
                                         </div>
                                         <div className='value-contanier'>
                                            <label htmlFor="Description-title">Description</label>
                                            <textarea name='Description' placeholder='Enter Your Description' maxLength='200' className='description'></textarea>
                                         </div>
                                        </div> </> : null

                            }
                            <button className='profile-submit-btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp