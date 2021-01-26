import React from 'react' ;

import Button from 'elements/Button';
import IconText from 'parts/iconText';

export default function Footer() {
  return(
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <IconText/>
            <p className="brand-tagline">
              We kaboom your beauty holiday instalty and memorable. 
            </p>
          </div>

          <div className="col-2 mr-5">
            <h6 className="mt-2 font-weight-bold">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li> 
            </ul>
          </div>

          <div className="col-2 mr-5">
            <h6 className="mt-2 font-weight-bold">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy Policy  
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li> 
            </ul>
          </div>

          <div className="col-42">
            <h6 className="mt-2 font-weight-bold">Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@staycation.com">
                  support@staycation.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+62821320432999">
                  021-320-432-999
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation HQ, Madiun, Indonesia</span>
              </li> 
            </ul>
          </div>
        </div>

        <div className="row"> 
          <div className="col text-center copyrights">
            Copyright 2021 - All rights reserved - Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}