import React, { useState } from 'react'
import styled from 'styled-components'

const FooterForm = () => {

    const [buttonshow, setButtonshow] = useState(false);

  return (
    <>
        <FooterFormDiv>
            <HeadTxt>
                Why Full Stack Development at Imiot      
            </HeadTxt>
            <Terms>
                <Termbtn type='radio' onClick={() => { setButtonshow(true) }} />
                <TandC>
                    I hereby agree all the terms & conditions for the course and institute. Also I’m  ready to pay the amount which is mentioned in the course details.
                </TandC>
            </Terms>
            <ForApply>
                { buttonshow ? <ApplyBtn>APPLY NOW</ApplyBtn> : null }
            </ForApply>
        </FooterFormDiv>
    </>
  )
}

const FooterFormDiv = styled.div`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-top: 3rem;

    @media (max-width: 600px) {
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 1.5rem;
    }
`

const HeadTxt = styled.h3`
    font-family: 'Sans Serif Collection';
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.2rem;
    color: #FFFFFF;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-width: 100%;

    @media (max-width: 600px) {
        font-size: 11px;
    }

    @media (max-width: 350px) {
        font-size: 9px;
    }
`

const Terms = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
`

const TandC = styled.p`
    font-family: pptelegraf-regular;
    width: 65%;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.2rem;
    line-height: 38px;

    @media (max-width: 600px) {
        font-size: 8px;
        line-height: 20px;
        width: 100%;
    }
`

const Termbtn = styled.input`
    margin-top: -35px;
`

const ForApply = styled.div`
    font-family: pptelegraf-regular;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
`

const ApplyBtn = styled.button`
    color: #FFFFFF;
    font-weight: 800;
    font-size: 18px;
    line-height: 47px;
    letter-spacing: 0.2em;
    background-color: #6100C2;
    width: 530px;
    border: double 1px transparent;
    border-radius: 10px;
    background-image: linear-gradient(#6100C2, #6100C2), radial-gradient(circle at top left, #41E6F0, #FF00F5);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    cursor: pointer;

    @media (max-width: 900px) {
        width: 300px
    }

    @media (max-width: 600px) {
        width: 175px;
        font-weight: 400;
        font-size: 15px;
        line-height: 35px;
    }
`

export default FooterForm
// : linear-gradient(92.39deg, #41E6F0 0%, #FF00F5 84.86%);