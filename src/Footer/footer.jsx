import React from 'react';
import '../Footer/footer.css';
import Logo from '../images/logo.png';
import { Image } from 'react-bootstrap';
const footer = () => {
  return (
    <>
      <div className="con-footer">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Top Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><p><a className="nav-link pbh text-body-secondary" href="/">Home</a></p></li>
                <li className="nav-item mb-2"><p><a className="nav-link pbh text-body-secondary" href="/Features">Features</a></p></li>
                <li className="nav-item mb-2"><p><a className="nav-link pbh text-body-secondary" href="/Contact">Contact</a></p></li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h5>Terms</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><p><a className="nav-link pbh text-body-secondary nav-link" href="/terms">Terms</a></p></li>
                <li className="nav-item mb-2"><p><a className="nav-link pbh text-body-secondary nav-link" href="/Cookie">Cookies-Policy</a></p></li>
                <li className="nav-item mb-2"><p><a className="nav-link pbh text-body-secondary" target="_blank">Security</a></p></li>
                <li className="nav-item mb-2"><p><a className="nav-link pbh text-body-secondary" href="/Privacy ">Privacy-Policy</a></p></li>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <h5>Location</h5>
              <ul className="nav flex-column">
                <p className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary textpf" >B-25 first floor, Block B, Sector 1, Noida, Uttar Pradesh 201301</p></p>
              </ul>
            </div>
            <div className="col-6 col-md-4  mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p className='nav-link p-0 text-body-secondary'>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary app-download-btn" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row  border-top">
            <div className="footer__bottom-three">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="fw-logo">
                      <Image src={Logo} alt="Logo" width={100} />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="">
                      <p className='footercopy'>Copyright Â© TurtlTech | All Right Reserved | Terms of Use |</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
export default footer