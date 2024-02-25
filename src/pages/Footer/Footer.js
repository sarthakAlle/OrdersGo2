import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { SocialIcon } from 'react-social-icons'

export default function footer() {
  const additionalStyles = {
    margin: '10px',
  };

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ marginTop: '100px' }}>Get connected with us on social networks:</span>
        </div>

        <div>

          <SocialIcon url="https://twitter.com" style={{ margin: '10px', fontSize: '1.5rem' }} />
          <SocialIcon url="https://facebook.com" style={additionalStyles} />
          <SocialIcon url="https://instagram.com" style={additionalStyles} />

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 custom-con'>
          <MDBRow className='mt-3  custom-row'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3 " />
                Orders Go
              </h6>
              <p>
                Welcome to OrdersGo – your go-to source for top-notch tools! Explore our streamlined platform for a hassle-free shopping experience. Find high-quality hand tools, power tools, and accessories from leading brands. At OrdersGo, we prioritize simplicity, affordability, and customer satisfaction. Elevate your tool collection with ease – start shopping now!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  JackHammer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Guage
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Hammer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Anival
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@ordersGo.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright :
        <a className='text-reset fw-bold link-no-decoration' href=''>
          &nbsp; OrdersGo
        </a>
      </div>
    </MDBFooter>
  );
}