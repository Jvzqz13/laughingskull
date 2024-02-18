import Container  from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { SocialIcon } from 'react-social-icons'
 import LogoSkull from '../images/skull-letters.png'



function Navi () {
    return (
        
        <Navbar bg="dark" data-bs-theme="dark" className='navHeight'>
        <Container className='headerContainer'>
          <Navbar.Brand href="#home"> <img src={LogoSkull} alt='logo' className='logoHeader'/> </Navbar.Brand>
          <Nav className="m-auto" >
            <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#features"> About Us </Nav.Link>
            <Nav.Link href="#pricing"> Open Mics </Nav.Link>
            <Nav.Link href="#pricing"> Contacts </Nav.Link>
            <Nav.Link href="#pricing"> Comedy Classes </Nav.Link>

          </Nav>
            <div className='socialIconContainer'>

            <SocialIcon url='https://www.facebook.com/laughingskull/' network='facebook' style={{ height: 40 , width: 40  }} bgColor="#9b9d9e" />
            <SocialIcon url='https://www.instagram.com/laughingskulllounge/' network='instagram' style={{ height: 40, width:40,  }} bgColor="#9b9d9e" />
            <SocialIcon url='label' network='label' style={{ height: 40, width:40,  }} bgColor="#9b9d9e" />
            
            </div>
        </Container>
      </Navbar>
       



    )
}

export default Navi