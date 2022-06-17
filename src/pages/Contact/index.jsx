import React from 'react'
import contact from '../../img/contact.jpeg'



const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
            <div className="row">
                  <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                  </div>
            </div>
            <div className="row">
                  <div className="col-md-5 d-flex justify-content-center">
                        <img src={contact} alt="" height='300px' width='300px' />
                  </div>
                  <div className="col-md-6">
                        <form>
                        <div className="mb-3">
                              <label for="exampleForm" className="form-label">Full Name</label>
                              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ladies Shop" />
                        </div>
                        <div className="mb-3">
                              <label for="exampleForm" className="form-label">Email address</label>
                              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com " />
                        </div>
                        <div className="mb-3">
                              <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Send Message</button>
                        </form>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
