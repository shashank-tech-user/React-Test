import React from 'react';
import Header from "./header";
// import Navigation from './navigation';
import styled from "styled-components";

const Layout = ({ children }) => {
  const Warpper = styled.div`
    @media (min-width: 700px) {
      display: flex;
      position: relative;
      height: calc(100% - 64px);
      width: 100%;
      flex: auto;
      flex-direction: column;
    }
  `;

  const Main = styled.main`
    position: fixed;
    height: calc(100% - 185px);
    width: 100%;
    padding: 1em;
    @media (min-width: 700px) {
      flex: 1;
      width: 100%;
    }
  `;

  const token = localStorage.getItem("access_token");

  return (
    <>
      <Header token={token} />
      <Warpper>
        <Main>
          {children}
        </Main>
      </Warpper>
    </>
  )
}

export default Layout