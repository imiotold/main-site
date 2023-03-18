import React from 'react'
import styled from 'styled-components'
import FooterForm from './FooterForm'
import RadioButtons from './RadioButtons'
import '../../App.css'

const RegisterForm = () => {
  return (
    <>  
        <MainDiv>
            <FormContainer>
                <ForForm action='#'>
                    {/* Heading sections of this form */}
                    <ForHeadings>
                        <HeadingTxt>Full Stack <br /> Web Development</HeadingTxt>
                        <SubHead>*<SubBold>180 Days</SubBold> of Python Django Full Stack Development</SubHead>
                        <FormExactHd>Complete this form to Register</FormExactHd>
                    </ForHeadings>
                    {/* inputs section */}
                    <InputsContainer>
                    {/* first two intputs */}
                        <ForTwoInputs>
                            <ForLeftInp type='text' placeholder='First Name' required/>
                            <ForRightInp type='text' placeholder='Last Name' required/>
                        </ForTwoInputs>
                        {/* other all inputs */}
                        <ForSingleInp>
                            <LabelForSecond>Date of Birth</LabelForSecond>
                            <DateInput type='date' placeholder='Date of Birth' required/>
                        </ForSingleInp>
                        <ForSingleInp>
                        <LabelForSecond>Upload a Photo</LabelForSecond>
                            <ImageUpload type='file' placeholder='Upload a Photo' required/>
                        </ForSingleInp>
                        <ForSingleInp>
                            <ForQualification type='text' placeholder='Qualification' required/>
                        </ForSingleInp>
                        <ForSingleInp>
                            <ForInstName type='text' placeholder='Institution Name' required/>
                        </ForSingleInp>
                    </InputsContainer>
                    {/* Languages section - Radio Buttons */}
                    <RadioButtons />
                    {/* Terms and condition - footer section - 'why fullstact section also' */}
                    <FooterForm />
                </ForForm>
            </FormContainer>
        </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
    box-sizing: border-box;
    background-color: #180A25;
    color: #FFFFFF;
`

const FormContainer = styled.div`
    margin: auto 4rem;
    padding-top 5rem;
    padding-bottom 5rem;

    @media (max-width: 600px) {
        margin: auto 1rem;
    }
`

const ForForm = styled.form`
    border: double 1px transparent;
    border-radius: 30px;
    background-image: linear-gradient(#180A25, #180A25), radial-gradient(circle at top left, #1CD6FF,#4A46FA,#A54BFF,#FF00F5);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    @media (max-width: 600px) {
        border-radius: 15px;
    }
`

// For Heading texts
const ForHeadings = styled.div`
    text-align: center;
    font-family: pptelegraf-ultrabold;
`


const HeadingTxt = styled.h1`
    font-weight: 800;
    font-size: 60px;
    margin-top: 1.5rem;
    margin-bottom: 0px;

    @media (max-width: 800px) {
        font-size: 45px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        margin-top: 3rem;
    }

    @media (max-width: 300px) {
        font-size: 18px;
    }
`

const SubHead = styled.h3`
    font-family: pptelegraf-regular;
    margin-top: 4px;
    font-weight: 400;
    font-size: 21px;

    @media (max-width: 800px) {
        font-size: 15px;
        margin-top: 7px;
    }

    @media (max-width: 600px) {
        font-size: 11px;
    }
`

const SubBold = styled.span`
    font-weight: 800;
`

// colored heading txt
const FormExactHd = styled.h2`
    font-family: pptelegraf-regular;
    color: #B982EE;
    font-weight: 400;
    font-size: 22px;
    margin-top: 2rem;

    @media (max-width: 600px) {
        font-size: 11px;
        margin-top: 9px;
    }
`

// Inputs section
const InputsContainer = styled.div`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-top: 3rem;

    @media (max-width: 600px) {
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 1.5rem;
    }
`

const ForTwoInputs = styled.div`
    display: flex;
    // flex-wrap: wrap;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const ForLeftInp = styled.input`
    // flex-grow: 1;
    width: 50%;
    margin-right: 5px;
    font-family: Sans Serif Collection;
    background-color: #180A25;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;

    &::placeholder {
        font-family: Sans Serif Collection;
        font-weight: 400;
        letter-spacing: 0.2em;
        color: #FFFFFF;
        font-size: 16px;
    }


    @media (max-width: 600px) {
        margin-right: 0;
        width: 99%;
        font-weight: 400;
        font-size: 9px;
        line-height: 20px;

        &::placeholder {
            font-size: 9px;
        }
    }
`

const ForRightInp = styled.input`
    // flex-grow: 1;
    width: 50%;
    margin-left: 5px;
    font-family: Sans Serif Collection;
    background-color: #180A25;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;

    &::placeholder {
        font-family: Sans Serif Collection;
        font-weight: 400;
        letter-spacing: 0.2em;
        color: #FFFFFF;
        font-size: 16px;

    }
    

    @media (max-width: 600px) {
        margin-left: 0;
        width: 99%;
        font-weight: 400;
        font-size: 9px;
        line-height: 20px;
        margin-top: 0.5rem;

        &::placeholder {
            font-size: 9px;
        }
    }


`

// single inputs - all other
const ForSingleInp = styled.div`
    display: flex;
    margin-top: 0.5rem;
    // flex-wrap: wrap;
`

const DateInput = styled.input`
    background-color: #180A25;
    color:#FFFFFF;
    border-width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;
    // width: 35%;

    ::-webkit-datetime-edit-text { padding: 3 0px; }
    ::-webkit-datetime-edit-month-field { text-transform: uppercase; }
    ::-webkit-datetime-edit-day-field { text-transform: uppercase; }
    ::-webkit-datetime-edit-year-field { text-transform: uppercase; }
    ::-webkit-calendar-picker-indicator { filter: invert(100%); }

    @media (max-width: 600px) {
        font-weight: 500;
        font-size: 10px;
    }
`

const LabelForSecond = styled.label`
    width: 100%;
    font-family: Sans Serif Collection;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-width: 100%;
    letter-spacing: 0.2em;

    @media (max-width: 600px) {
        font-weight: 400;
        font-size: 9px;
    }
`

const ImageUpload = styled.input`
    background-color: #180A25;
    color: #FFFFFF;
    flex-grow: 1;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;

    @media (max-width: 600px) {
        font-weight: 500;
        font-size: 10px;
    }
`

const ForQualification = styled.input`
    background-color: #180A25;
    font-family: Sans Serif Collection;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    // flex-grow: 1;
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;

    &::placeholder {
        font-family: Sans Serif Collection;
        font-weight: 400;
        letter-spacing: 0.2em;
        color: #FFFFFF;
        font-size: 16px;
    }
    
    @media (max-width: 600px) {
        font-weight: 400;
        font-size: 9px;

        &::placeholder {
            font-weight: 400;
            font-size: 9px;
        }
    }
`

const ForInstName = styled.input`
    background-color: #180A25;
    font-family: Sans Serif Collection;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    // flex-grow: 1;
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;

    &::placeholder {
        font-family: Sans Serif Collection;
        font-weight: 400;
        letter-spacing: 0.2em;
        color: #FFFFFF;
        font-size: 16px;
    }

    @media (max-width: 600px) {
        font-weight: 400;
        font-size: 9px;

        &::placeholder {
            font-weight: 400;
            font-size: 9px;
        }
    }
`


export default RegisterForm