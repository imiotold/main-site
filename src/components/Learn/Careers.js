import React from 'react'
import styled from 'styled-components'
import Image1 from '../../assets/images/image1.svg'

const Careers = () => {
  return (
    <>
        <MainDiv>
            <TopSecContainer>
                <TopHeadTxt>Full Stack <br /> Web Development</TopHeadTxt>
                <TopImg src={Image1} alt='Top Developer Img' />
            </TopSecContainer>
            <TopSubTxt>*<TopInnerSpan>180 Days</TopInnerSpan> of Python Django Full Stack Development</TopSubTxt>
            <ForMidContainer>
                <SubHeadings>Course Duration, Highlights & Fee Structure</SubHeadings>
                <ForUl>
                    <ForLi>180 Days Bootcamp</ForLi>
                    <ForLi>150 Days Training + 30 Days Live Project Industry Internship<ForStarSpn>*</ForStarSpn></ForLi>
                    <ForLi>Offline Mode Only</ForLi>
                    <ForLi>INR. 24999/- only as introductory fee for limited applicants<ForStarSpn>*</ForStarSpn></ForLi>
                    <ForLi>4 Main projects</ForLi>
                    <ForLi>1 Bootstrap Project + 3 Full Stack Project</ForLi>
                    <ForLi>100% Placement Assistance<ForStarSpn>*</ForStarSpn></ForLi>
                </ForUl>
                <SubHeadings>Languages Covered</SubHeadings>
                <ForUl>
                    <ForLi>HTML, CSS, JavaScript, J Query</ForLi>
                    <ForLi>React</ForLi>
                    <ForLi>Python & Django</ForLi>
                    <ForLi>Git 7 Git hub</ForLi>
                    <ForLi>Dev ops, SCSS/SASS</ForLi>
                    <ForLi>Bootstrap</ForLi>
                    <ForLi>Introduction to UI/UX (Figma & Adobe XD)</ForLi>
                </ForUl>
                <SubHeadings>Course Criterions & Conditions</SubHeadings>
                <ForUl>
                    <ForLi>Each 14 Days have 3 Hour  Assessment Test <ForBrackets>(Objective, Descriptive & Practical)<ForStarSpn>*</ForStarSpn></ForBrackets></ForLi>
                    <ForLi>Each week have to submit a Mini Project as Assignment</ForLi>
                    <ForLi>Python & Django</ForLi>
                    <ForLi>Git & Git hub</ForLi>
                    <ForLi>Dev ops, SCSS/SASS</ForLi>
                    <ForLi>Bootstrap</ForLi>
                    <ForLi>Introduction to UI/UX (Figma & Adobe XD)<ForStarSpn>*</ForStarSpn></ForLi>
                    <ForLi>Regular Class Schedules </ForLi>
                </ForUl>
            </ForMidContainer>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
    // width: 1325px;
    margin: auto 4rem;
    margin-top: 3rem;
    padding-left: 2.5rem;
    border: double 1px transparent;
    border-radius: 30px;
    background-image: linear-gradient(#180A25, #180A25), radial-gradient(circle at top left, #1CD6FF,#4A46FA,#A54BFF,#FF00F5);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    @media (max-width: 800px) {
        padding-left:1.8rem;
    }

    @media (max-width: 600px) {
        padding-left: 1rem;
        border-radius: 15px;
        margin: auto 1rem;
        margin-top: 2rem;
    }
`

const TopSecContainer = styled.div`
    display: flex;

    @media (max-width: 1024px) {
        display: block;
    }
`

const TopHeadTxt = styled.h1`
    color: #FFFFFF;
    flex-grow: 2;
    font-family: pptelegraf-ultrabold;
    font-weight: 800;
    font-size: 65px;
    margin-top: 5rem;
    margin-bottom: 0px;

    @media (max-width: 1190px) {
        font-size: 47.1px;
        margin-top: 6rem;
    }
    
    @media (max-widht: 1024px) {
        font-size: 60px;
    }

    @media (max-width: 600px) {
        font-size: 30px;
    }

    @media (max-width: 330px) {
        font-size: 27px;
    }
`

const TopImg = styled.img`
    flex-grow:: 1;

    @media (max-width: 1024px) {
        display: none;
    }
`

const TopSubTxt = styled.h2`
    margin-top: -8rem;
    font-family: pptelegraf-regular;
    font-weight: 300;
    font-size: 27px;
    letter-spacing: 0.1rem;

    @media (max-width: 1190px) {
        font-size: 23px;
    }

    @media (max-width: 1024px) {
        margin-top: 10px;
        font-size: 23px;
    }

    @media (max-width: 800px) {
        font-size: 14.5px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        font-weight: 400px;
    }

    @media (max-width: 416px) {
        font-size: 9px;
        letter-spacing: 1px;
    }

`

const TopInnerSpan = styled.span`
    font-weight: 900;
`

const ForMidContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    margin-top: 6.5rem;

    @media (max-width: 1024px) {
        margin-top: 2rem;
    }

    @media (max-width: 600px) {
        margin-top: 0;
    }

`

const SubHeadings = styled.h3`
    color: #A54EFB;
    font-weight: 600;
    font-size: 24px;
    margin-top: 3rem;

    @media (max-width: 800px) {
        font-size: 17px;
        margin-top: 0.5rem;
    }

    @media (max-width: 600px) {
        font-size: 12px;
    }
`

const  ForUl = styled.ul`
    margin-left: 3rem;

    @media (max-width: 800px) {
        margin-left: 1.7rem;
    }

    @media (max-width: 600px) {
        margin-left: 0;
        padding-left: 30px;
    }

    @media (max-width: 330px) {
        padding-left: 23px;
    }
`

const ForLi = styled.li`
    font-weight: 600;
    font-size: 22px;
    line-height: 40px;
    padding-left: 5px;

    @media (max-width: 800px) {
        font-size: 17px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 22px;
    }
`

const ForStarSpn = styled.span`
    color: #E45353
`

const ForBrackets = styled.span`
    font-size: 21px;
    font-weight: 500;

    @media (max-width: 800px) {
        font-size: 16px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        display: block;
        font-weight: 400px;
    }
`

export default Careers