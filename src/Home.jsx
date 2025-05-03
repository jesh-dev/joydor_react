import React from 'react'
import { Nav } from './Components/Navbar'
import { Header } from './Components/Hero'
import { Stat } from './Components/Stats'
import { Feature } from './Components/Features'
import { Footer } from './Components/Footer'

export default function Home() {
  return (
    <>
      <Nav/>
      <Header/>
      <Stat/>
      <Feature/>
      <Footer/>
    </>
  )
}
