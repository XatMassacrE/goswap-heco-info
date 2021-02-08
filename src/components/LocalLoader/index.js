import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
0% {
  -webkit-transform:perspective(220px);
}
60% {
  -webkit-transform:perspective(220px) rotateY(180deg);
}
100% {
  -webkit-transform:perspective(220px) rotateY(0);
}
`

const Loader = styled.div`
  pointer-events: none;
  position:absolute;
  width:60px;
  height:60px;
  margin: 300px auto;
top:80%;
left:50%;
 @media (max-width: 835px) {
    left:44%;
  }
  backface-visibility:hidden;
  z-index:2;
  animation: ${rotate} 3000ms ease-in-out infinite;
`

const Loadera = styled.div`
  pointer-events: none;
  position:absolute;
  margin: 300px auto;
top:80%;
left:50%;
@media (max-width: 835px) {
 left:44%;
}
  z-index:1;
  animation: ${rotate} 3000ms ease-in-out infinite;
`
const Rotate = styled.div`
width:100%;
height:100%;
position:relative;
`
const LocalLoader = ({ fill }) => {
  return (
    <Rotate>
      <Loader>
        <img src={require('../../assets/logo.png')} alt="loading-icon" width="60" height="60" />
      </Loader>
      <Loadera>
        <img src={require('../../assets/logoa.png')} alt="loading-icon" width="60" height="60" />
      </Loadera>
    </Rotate>

  )
}

export default LocalLoader
