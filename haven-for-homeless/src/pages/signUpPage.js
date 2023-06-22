import React from 'react';
import '../Styles/signUpPage.css';
import Nav from '../navBar';
import Footer from '../Footer';

function SignUp() {
  return (
    <div>
      <main>
        <div className="header-blue">
          <Nav />
          <div className="container hero my-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <h1 className="mb-4 text-center">Sign Up</h1>
                <form id="create-service-form" action="/path/to/server/endpoint" method="POST">
                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="fname" id="fname" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input type="lname" id="lname" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" required />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-light action-button" role="button">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default SignUp;
