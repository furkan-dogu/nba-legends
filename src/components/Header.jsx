import React from 'react'
import { Container, Image } from 'react-bootstrap'
import nba from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>
        <Image src={nba} width={"200px"}></Image>
        <h1 className='display-4 fw-bold my-2 font-monospace'>NBA Legends</h1>
    </Container>
  )
}

export default Header