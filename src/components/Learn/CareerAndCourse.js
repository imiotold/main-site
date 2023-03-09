import React from 'react'
import styled from 'styled-components'
import JobCallVector1 from '../../assets/images/JobCallVector1.svg'
import JobCallVector2 from '../../assets/images/JobCallVector2.svg'

const CareerAndCourse = () => {
  return (
    <>
        <MainDiv>
            <BoxContainers>
                <ForBoxes>
                    <ForImage src={JobCallVector2} alt='Courses Img' />
                    <InboxTexts>Practice More With Wide Range of Choices</InboxTexts>
                    <InboxBtn>Careers</InboxBtn>
                </ForBoxes>
                <ForBoxes style={{backgroundImage: 'linear-gradient(#180A25, #180A25), radial-gradient(circle at top left, #FF00F5, #A54BFF, #4A46FA, #1CD6FF)'}}>
                    <ForImage src={JobCallVector1} alt='Careers Img' />
                    <InboxTexts>Learn More With Wide Range of Resources</InboxTexts>
                    <InboxBtn>Courses</InboxBtn>
                </ForBoxes>
            </BoxContainers>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
`

const BoxContainers = styled.div`
    // width: 1325px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 5rem;
`

const ForBoxes = styled.div`
    width: 636px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: double 1px transparent;
    border-radius: 30px;
    background-image: linear-gradient(#180A25, #180A25), radial-gradient(circle at top left, #1CD6FF,#4A46FA,#A54BFF,#FF00F5);
    background-origin: border-box;
    background-clip: padding-box, border-box;
`
// border-image: linear-gradient(90.53deg, #1CD6FF 0%, rgba(74, 70, 250, 0.63) 35.21%, #A54BFF 69.06%, #FF00F5 100%) 1;

const ForImage = styled.img`

`

const InboxTexts = styled.h5`
    font-style: Sans Serif Collection;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.2rem;
    color: #FFFFFF;
    margin-top: 5px;
`

const InboxBtn = styled.button`
    font-family: 'Exo', sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.2rem;
    color: #FFFFFF;
    width: 200px;
    line-height: 27px;
    border-radius: 12px;
    background: linear-gradient(90deg, #7D0C99 0%, #8A1BF7 100%);
    border: none;
    margin-bottom: 1rem;
    cursor: pointer;
`

export default CareerAndCourse