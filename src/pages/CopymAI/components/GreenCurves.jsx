import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    overflow: hidden;
    height: 100vh;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Curve = styled.div`
  position: absolute;
  width: 200%;
  height: 150%;
  border-radius: 50%;
  filter: blur(4px);
`;

const TopCurve = styled(Curve)`
  top: -50%;
  left: -50%;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
  box-shadow: inset 0 0 30px rgba(173, 255, 47, 0.2);
`;

const BottomCurve = styled(Curve)`
  bottom: -50%;
  left: -50%;
  background: linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
  box-shadow: inset 0 0 30px rgba(173, 255, 47, 0.2);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(255,255,255,0.95) 0%, 
    rgba(255,255,255,0.95) 50%, 
    rgba(255,255,255,0.95) 100%
  );
  z-index: 10;
`;

const GreenCurves = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <TopCurve />
        <BottomCurve />
        <Overlay />
      </Container>
    </>
  );
};

export default GreenCurves;