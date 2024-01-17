import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
    width: 100%;
    background-image: url('/assets/images/billboard.png');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    min-height: 80vh;
`
function Index() {
  return (
    <div className='w-full'>
        <Hero>
            <h1>INFINITE OUTDOOR ADVERTISING SOLUTION</h1>
        </Hero>
    </div>
  )
}

export default Index