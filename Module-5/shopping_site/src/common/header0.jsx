import React from "react";
import styled, { css } from "styled-components";

import Dropdown from "./components/dropdown";

const header0 = () => {
  const Contain = styled.div`
    height: 20px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const DivFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.lists &&
      css`
        list-style-type: none;
      `}
  `;
  const Ancher = styled.a`
    padding: 10px;
  `;
  return (
    <div>
      <Contain>
        <div>
          <ul style={{"margin-bottom":0, "padding-left":0}}>
            <DivFlex lists>
              <li>
                <Ancher href="/">About Us</Ancher>
              </li>
              <li>
                <Ancher href="/">My Account</Ancher>
              </li>
              <li>
                <Ancher href="/">Wishlist</Ancher>
              </li>
              <li>
                <Ancher href="/">Order Tracing</Ancher>
              </li>
            </DivFlex>
          </ul>
        </div>

        <div>
          <p style={{"margin-bottom":0}}>
            Get great devices up to 50% off <a href="">View details</a>{" "}
          </p>
        </div>

        <div>
          <DivFlex>
            <p style={{"margin-bottom":0}}>
              Need help? Call Us +<spna>1800 900</spna>{" "}
            </p>
            <Dropdown title="English" />
            <Dropdown title="USD" />
          </DivFlex>
        </div>
      </Contain>
    </div>
  );
};

export default header0;
