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
            {/* Heading Images section */}
            <MainHeading><Lines src={Line1} alt='Wave Lines' style={{marginRight: '8px'}} />Testimonials<Lines src={Line2} alt='Wave Lines' style={{marginLeft: '10px'}} /></MainHeading>
            <SubText>Spent few minutes to hear what our learners say about us.!</SubText>
            {/* image container */}
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
            
                {/* Second Image Container  */}

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
            {/* Bottom Description Section */}
            <ForDescription>
                <StarDescription>
                    <ForStarSpn>*</ForStarSpn>Some points with asterisk symbol is undergoes on our privacy policy conditions contact with our team for more.!
                </StarDescription>
            </ForDescription>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    color: #FFFFFF;
    // width: 1325px;
    margin: auto 4rem;
    margin-top: 3rem;

    @media (max-width: 600px) {
        margin: auto 1rem;
    }
`

const MainHeading = styled.h1`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 35;
    letter-spacing: 0.05em;
    margin-bottom: 0;

    @media (max-width: 850px) {
        font-size: 30px;
    }

    @media (max-width: 600px) {
        font-size: 22px
    }
`

const Lines = styled.img`
    text-align: center;
    display:inline-block;

    @media (max-width: 600px) {
        width: 50px;
    }
`

const SubText = styled.h4`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.07em;
    word-spacing: 0.04em;
    margin-top: 5px;

    @media (max-width: 800px) {
        margin-top: 12px;
    }

    @media (max-width: 600px) {
        font-size: 15px;
        word-spacing: 0;
    }
`

const ForImgContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    max-width: 1220px;
    flex-wrap: wrap;
    column-gap: 70px;
    row-gap: 7rem;
    justify-content: center;
    margin-top: 3rem;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1316px) {
        column-gap: 50px;
    }

    @media (max-width: 1275px) {
        column-gap: 35px;
    }

    @media (max-width: 1247px) {
        column-gap: 20px;
    }

    @media (max-width: 500px) {
        row-gap: 4rem;
    }
`

const Contents = styled.div`
    // flex-grow: 1;
    text-align: center;
    width: 349px;
    height: 349px;

    @media (max-width: 1216px) {
        width: 294px;
        height: 294px;
    }

    @media (max-width: 1068px) {
        width: 220px;
        height: 220px;
    }

    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
    
`

const ForLearnerImg = styled.img`
    z-index: 1;

    @media (max-width: 1216px) {
        width: 294px;
    }

    @media (max-width: 1068px) {
        width: 220px;
    }

    @media (max-width: 500px) {
        width: 150px;
    }
`

const LearnerName = styled.h5`
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    letter-spacign: 0.08em;
    margin-top: -4rem;
    margin-bottom: 0px;

    @media (max-width: 1068px) {
        font-size: 15px;
    }

    @media (max-width: 828px) {
        margin-top: -2.5rem;
    }

    @media (max-width: 500px) {
        font-size: 12px;
    }
`

const Position = styled.h6`
    color: #8A1BF6;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.08em;
    margin-top: 5px;

    @media (max-width: 1068px) {
        font-size: 13px;
    }

    @media (max-width: 500px) {
        font-size: 9px;
    }
`

const PlayIcon = styled.img`
    position: relative;
    z-index: 2;
    right: 0%;
    bottom: 61%;

    @media (max-width: 828px) {
        width: 80px;
        bottom: 62%;
    }

    @media (max-width: 500px) {
        width: 57px;
        bottom: 64%;
    }
`

const StarDescription = styled.h4`
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Poppins', sans-serif;
    text-align: center;
    // height: 46px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    margin-top: 0px;

    @media (max-width: 600px) {
        font-size: 10px;
        padding-left: 2rem;
        padding-right: 2rem;
    }
`

const ForStarSpn = styled.span`
    color: #E45353
`

const ForDescription = styled.div`
    margin-top: 6.5rem; 
    padding-bottom: 1rem; 

    @media (max-width: 500px) {
        margin-top: 4rem;
    }
`

export default Testimonials