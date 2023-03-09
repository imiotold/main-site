import React from 'react'
import styled from 'styled-components'
import Line1 from '../../assets/images/Line1.svg'
import Line2 from '../../assets/images/Line2.svg'
import TrainerImg from '../../assets/images/TrainerImg.svg'
import Playicon from '../../assets/images/Playicon.svg'

const Testimonials = () => {
  return (
    <>
        <MainDiv>
            <MainHeading><Lines src={Line1} alt='Wave Lines' style={{marginRight: '8px'}} />Testimonials<Lines src={Line2} alt='Wave Lines' style={{marginLeft: '10px'}} /></MainHeading>
            <SubText>Spent few minutes to hear what our learners say about us.!</SubText>
            <ForImgContainer>
                <Contents>
                    <ForLearnerImg src={TrainerImg} alt='Trainer Image' />
                    <PlayIcon src={Playicon} alt='Play Icon' />
                    <LearnerName>Aromal Nambiar</LearnerName>
                    <Position>Full Stack Developer - Imiot</Position>
                </Contents>
                <Contents>
                    <ForLearnerImg src={TrainerImg} alt='Trainer Image' />
                    <PlayIcon src={Playicon} alt='Play Icon' />
                    <LearnerName>Aromal Nambiar</LearnerName>
                    <Position>Full Stack Developer - Imiot</Position>
                </Contents>
                <Contents>
                    <ForLearnerImg src={TrainerImg} alt='Trainer Image' />
                    <PlayIcon src={Playicon} alt='Play Icon' />
                    <LearnerName>Aromal Nambiar</LearnerName>
                    <Position>Full Stack Developer - Imiot</Position>
                </Contents>
            </ForImgContainer>
            <ForImgContainer style={{marginTop: '1rem', marginBottom: '0px'}}>
                <Contents>
                    <ForLearnerImg src={TrainerImg} alt='Trainer Image' />
                    <PlayIcon src={Playicon} alt='Play Icon' />
                    <LearnerName>Aromal Nambiar</LearnerName>
                    <Position>Full Stack Developer - Imiot</Position>
                </Contents>
                <Contents>
                    <ForLearnerImg src={TrainerImg} alt='Trainer Image' />
                    <PlayIcon src={Playicon} alt='Play Icon' />
                    <LearnerName>Aromal Nambiar</LearnerName>
                    <Position>Full Stack Developer - Imiot</Position>
                </Contents>
                <Contents>
                    <ForLearnerImg src={TrainerImg} alt='Trainer Image' />
                    <PlayIcon src={Playicon} alt='Play Icon' />
                    <LearnerName>Aromal Nambiar</LearnerName>
                    <Position>Full Stack Developer - Imiot</Position>
                </Contents>
            </ForImgContainer>
            <StarDescription><ForStarSpn>*</ForStarSpn>Some points with asterisk symbol is undergoes on our privacy policy conditions contact with our team for more.!</StarDescription>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
    width: 1325px;
    margin: auto;
    margin-top: 3rem;
`

const MainHeading = styled.h1`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 35;
    letter-spacing: 0.05em;
    margin-bottom: 0;
`

const Lines = styled.img`
    text-align: center;
    display:inline-block;
`

const SubText = styled.h4`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.07em;
    word-spacing: 0.04em;
    margin-top: 5px;
`

const ForImgContainer = styled.div`
    width: 1325px;
    margin-auto;
    display: flex;
    margin-top: 3rem;
    font-family: 'Poppins', sans-serif;
`

const Contents = styled.div`
    flex-grow: 1;
    text-align: center;
`

const ForLearnerImg = styled.img`
    z-index: 1;
`

const LearnerName = styled.h5`
    position: relative;
    text-align: left;
    padding-left: 3rem;
    font-weight: 600;
    font-size: 18px;
    letter-spacign: 0.08em;
    margin-top: -4rem;
    margin-bottom: 0px;
`

const Position = styled.h6`
    color: #8A1BF6;
    position: relative;
    text-align: left;
    padding-left: 3rem;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.08em;
    margin-top: 5px;
`

const PlayIcon = styled.img`
    position: relative;
    z-index: 2;
    right: 0%;
    bottom: 47%;
`

const StarDescription = styled.h4`
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Poppins', sans-serif;
    text-align: center;
    height: 46px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    margin-top: 0px;
`

const ForStarSpn = styled.span`
    color: #E45353
`

export default Testimonials