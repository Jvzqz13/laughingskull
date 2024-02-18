import { MDBFooter, MDBContainer, MDBInput,MDBCol,MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import { SocialIcon } from 'react-social-icons'



function Footer() {
    return (
        
        <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

      <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <h5 className='text-uppercase'> Home </h5>

            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <h5 className='text-uppercase'> About Us </h5>

            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <h5 className='text-uppercase'> Open Mics </h5>

            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <h5 className='text-uppercase'> Contact Us </h5>

            </MDBCol>

          </MDBRow>
        </section>

        <section className='mb-4 socialIcon'>

            <SocialIcon url='https://www.facebook.com/laughingskull/' network='facebook' style={{ height: 40 , width: 40  }} bgColor="#9b9d9e" />
            <SocialIcon url='https://www.instagram.com/laughingskulllounge/' network='instagram' style={{ height: 40, width:40,  }} bgColor="#9b9d9e" />
            <SocialIcon url='label' network='label' style={{ height: 40, width:40,  }} bgColor="#9b9d9e" />

          
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright Laughing Skull Lounge. All rights reserved.
      </div>
    </MDBFooter>

        



    )
}

export default Footer;