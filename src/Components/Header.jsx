import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div style={{backgroundColor:'#242582'}}>
         <MDBNavbar  bgColor=''>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
           <i class="fa-solid fa-user-doctor" style={{color:"whitesmoke",padding:'10px'}}></i>
            <h4 style={{color:'whitesmoke',margin:'5px'}}>Doctor Appoinment</h4>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header