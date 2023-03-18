import React from 'react'
import styled from 'styled-components'

const RadioButtons = () => {
  return (
    <>
        <LanguagesContainer>
            {/* Languages head */}
            <ForTxt>Previously Known Programming Languages</ForTxt>
            <ForBtns>
                {/* Language */}
                <Lang>
                    <BtnTxt>Language 1</BtnTxt>
                </Lang>
                {/* radio button and its label */}
                <LabelAndBtn>
                    <RLabel style={{width: '3.4rem'}}>Basic<RButton type='radio' id='basic' name='knownProgLang' style={{width: '3.4rem'}} /></RLabel>
                    <RLabel>Intermediate<RButton type='radio' id='intermediate' name='knownProgLang' /></RLabel>
                    <RLabel>Advanced<RButton type='radio' id='advanced' name='knownProgLang' /></RLabel>
                </LabelAndBtn>
            </ForBtns>
            <ForBtns>
                <Lang>
                    <BtnTxt>Language 2</BtnTxt>
                </Lang>
                <LabelAndBtn>
                    <RLabel style={{width: '3.4rem'}}>Basic<RButton type='radio' id='basic' name='knownProgLang' style={{width: '3.4rem'}} /></RLabel>            
                    <RLabel>Intermediate<RButton type='radio' id='intermediate' name='knownProgLang' /></RLabel>
                    <RLabel>Advanced<RButton type='radio' id='advanced' name='knownProgLang' /></RLabel>
                </LabelAndBtn>
            </ForBtns>
            {/* Add more section */}
            <ForAdd>
                <AddMoreBtn href='#'>Add More</AddMoreBtn>
            </ForAdd>
        </LanguagesContainer>
    </>
  )
}

const LanguagesContainer = styled.div`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-top: 3rem;

    @media (max-width: 630px) {
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 1.5rem;
    }
`

// Languages head
const ForTxt = styled.h4`
    text-align: center;
    font-family: 'Sans Serif Collection';
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.2em;
    margin-bottom: 0;

    @media (max-width: 730px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 10px;
    }
`

const ForBtns = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;

    @media (max-width: 600PX) {
        margin-top: 0.5rem;
    }
`

// language txt
const BtnTxt = styled.h5`
    display: inline-block;
    font-family: 'Sans Serif Collection';
    text-align: right;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.2em;
    margin-left: 52px;
    margin: 0 0 0 0;

    @media (max-width: 600px) {
        font-size: 11px;
    }

    @media (max-width: 350px) {
        width: 78px;
    }
`

// radio
const RButton = styled.input`
    display: inline-block;
    width: 6em;
    position: relative;
    top: -3em;

    @media (max-width: 600px) {
        font-size: 10px;
        top: -3.3em;
    }

    @media (max-width: 350px) {
        font-size: 8px;
        top: -3.5em;
    }
`

const RLabel = styled.label`
    display: inline-block;
    width: 5.7em;
    margin: 0;
    padding-top: 1.5em;

    @media (max-width: 600px) {
        font-weight: 400;
        font-size: 12px;
    }

    @media (max-width: 350px) {
        width: 56px;
        font-size: 10px;
    }
`

// for label and radio div 
const LabelAndBtn = styled.div`
    width: 50%;

    @media (max-width: 800px) {
        width: auto;
        margin-left: 5px;
    }
`

// language div
const Lang = styled.div`
    width: 50%;


    @media (max-width: 800px) {
        width: auto;
    }

`

// for add div
const ForAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

const AddMoreBtn = styled.a`
    font-family: Sans Serif Collection;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    font-size: 17px;
    letter-spacing: 0.2em;

    @media (max-width: 500px) {
        font-size: 12px;

    }
`

export default RadioButtons