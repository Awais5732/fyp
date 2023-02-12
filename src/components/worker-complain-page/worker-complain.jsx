import './worker-complain.css'
const WorkerComplain = () => {
    return (
        <>
        <div>
         <h1 className='contact-us-title'>Contact Us</h1>
         <p className='Contact-us-detail'>If you have any query or complaint, please feel free to reach out to us by filling the form given below</p>
         <p className='Contact-us-detail'>How May We Help you?</p>
      </div>
       <div className='complain-contanier'>
          <div className='complain-heading-contanier'>
              <h3 className='complain-heading'>Resolving your complaints!</h3>
              <p className='complain-paragraph'>Leave your complaint here to help us make our services better for you.</p>
              <div className='email-contact-contanier'>
                 <labal>Email Us :</labal>
                 <a href='#'><span>awaisch8687@gmail.com</span></a>
              </div>
          </div>
          <div className='complain-form-contanier'>
              <form className='complain-form'>
              <div className='complain-input-contanier'>
                   <input type ='text' placeholder='Enter Your Name'></input>
                  <input  type ='number' placeholder='Enter Worker ID'></input>
              </div>
              <textarea placeholder='Enter Your complain'></textarea>
              <button className='complain-submit'>Submit</button>   
              </form>
          </div>
       </div>
       </>
    )
}
export default WorkerComplain