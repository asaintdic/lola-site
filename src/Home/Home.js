import React from 'react'
// import lolahomehero from '../public/lolahomehero.jpg'
import styled from 'styled-components'
import Navbar from '../Nav/Navbar.js'

function Home() {
    return (
        <HeroWrapper>
            <Navbar />
            {/* <img src={lolahomehero} alt='LolaImage' /> */}
            <HeroText>
               <h1>Designed With You In Mind</h1>
               <button>Start Building</button>
               </HeroText>
        </HeroWrapper>
    
    )
}

export default Home

const HeroWrapper = styled.div`
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url("/Lolahome.jpg");
height: 100vh;
width: 100vw;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: absolute;

`
const HeroText = styled.div`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;

`