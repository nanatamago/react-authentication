import React, { useState } from 'react'
import { auth } from '../firebase'
import styled from '@emotion/styled'

const TitleStyle = styled.h1`
  color: #283135;
  font-size: 2.2rem;
  font-family: 'Ubuntu', sans-serif;
  box-sizing: border-box;
`

const Form = styled.form`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`

const FormRow = styled.div`
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 24px;
  }
`

const FormLabel = styled.label`
  display: inline-block;
  width: 26%;
  margin-right: 6%;
  text-align: left;
`

const FormInput = styled.input`
  width: 60%;
  padding: 8px;
  border: 2px solid #dddddd;
  border-radius: 8px;
`

const SubmitButton = styled.button`
  padding: 8px 16px 11px 16px;
  color: #ffffff;
  font-size: 1.2rem;
  font-family: 'Ubuntu', sans-serif;
  background: #283135;
  border: 2px solid #283135;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  box-sizing: border-box;
  &:hover {
    color: #283135;
    background: #f8f8f8;
  }
`

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  /**
   * 入力した値をfirebaseにsubmit
   * @param e 入力中の値
   */
  const handleSubmit = (e: any) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
  }
  const handleEmail = (e: any) => {
    setEmail(e.currentTarget.value)
  }
  const handlePassword = (e: any) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <>
      <TitleStyle>React Firebase App</TitleStyle>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel htmlFor="mail">mail</FormLabel>
          <FormInput
            id="mail"
            name="email"
            type="email"
            placeholder="ex) abc@***.com"
            onChange={(e) => handleEmail(e)}
          />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="password">password</FormLabel>
          <FormInput
            id="password"
            name="password"
            type="password"
            placeholder="ex) abc123"
            onChange={(e) => handlePassword(e)}
          />
        </FormRow>
        <SubmitButton>Sign me up</SubmitButton>
      </Form>
    </>
  )
}

export default SignUp
