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
    width: 1325px;
    margin: auto;
    margin-top: 3rem;
    padding-left: 2.5rem;
    border: double 1px transparent;
    border-radius: 30px;
    background-image: linear-gradient(#180A25, #180A25), radial-gradient(circle at top left, #1CD6FF,#4A46FA,#A54BFF,#FF00F5);
    background-origin: border-box;
    background-clip: padding-box, border-box;
`

const TopSecContainer = styled.div`
    display: flex;
`

const TopHeadTxt = styled.h1`
    color: #FFFFFF;
    flex-grow: 2;
    font-family: pptelegraf-ultrabold;
    font-weight: 800;
    font-size: 65px;
    margin-top: 5rem;
    margin-bottom: 0px;
`

const TopImg = styled.img`
    flex-grow:: 1;
`

const TopSubTxt = styled.h2`
    margin-top: -8rem;
    font-family: pptelegraf-regular;
    font-weight: 300;
    font-size: 27px;
    letter-spacing: 0.1rem;
`

const TopInnerSpan = styled.span`
    font-weight: 900;
`

const ForMidContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    margin-top: 6.5rem;

`

const SubHeadings = styled.h3`
    color: #A54EFB;
    font-weight: 600;
    font-size: 24px;
    margin-top: 3rem;
`

const  ForUl = styled.ul`
    margin-left: 3rem;
`

const ForLi = styled.li`
    font-weight: 600;
    font-size: 22px;
    line-height: 40px;
    padding-left: 5px;
`

const ForStarSpn = styled.span`
    color: #E45353
`

const ForBrackets = styled.span`
    font-size: 21px;
    font-weight: 500;
`

export default Careers