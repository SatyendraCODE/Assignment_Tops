import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export default function App(p) {
  return (
    <MDBDropdown style={{"margin-left":"5px"}}>
      <MDBDropdownToggle style={{"padding":"4px 5px"}}>{p.title}</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
// import React from 'react';
// import styled, { css } from 'styled-components';
// import { MDBIcon } from 'mdb-react-ui-kit';

// const Buttons = styled.button`
//     display:block;
//     padding: 1px 8px;
//     margin-left:6px;
//     border:none;
// `;
// const Uls = styled.ul`
//     display:block;
//     padding: 5px;
//     position:relative;
// `;

// export default function App(p) {
//     let values=`text-dark `;
//     let list= {
//         "padding":"5px 0",
//         "list-style-type": "none",
//     };
//     let icon= {
//         position: "relative",
//         paddingLeft: "5px",
//         fontSize: "12px"
//     }
//     return (
//         <div>
//             <Buttons className={values} >{p.title}<MDBIcon fas icon="angle-down" style={icon} /></Buttons>
//             {/* <Uls>
//                 <li style={list}>Hindi</li>
//                 <li style={list}>Gujrati</li>
//             </Uls> */}
//         </div>
//     );
// }