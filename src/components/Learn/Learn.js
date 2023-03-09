import React from 'react'
import styled from 'styled-components'
import CareerAndCourse from './CareerAndCourse'
import Careers from './Careers'
import Testimonials from './Testimonials'

const Learn = () => {
  return (
    <>
        <MainDiv>
            <CareerAndCourse />
            <Careers />
            <Testimonials />
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    background-color: #180A25;
`

export default Learn