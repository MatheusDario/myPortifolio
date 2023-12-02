import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { fadeInBottomVariant, fadeInTopVariant } from '@/utils/Variants';
import {
  BlueText,
  ContactForm,
  ErrorField,
  FlexContainer,
  FormInput,
  FormLabel,
  Heading,
  MyButton,
  PaddingContainer,
  PaddingForm,
  SubPaddingContainer,
  Titile,
} from './styled';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function formValidator(e: any) {
    let isValid = true;

    if (name === '' || email === '' || message === '') {
      alert('Todos os campos precisam estar preenchidos');
      isValid = false;
      return;
    }
    return isValid;
  }

  function sendEmail(e: any) {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    formValidator(e)
      ? emailjs
          .send(
            'service_xhrq8qi',
            'template_aox06v8',
            templateParams,
            'RJGzVAQBWfSj_a6rt',
          )
          .then(
            (response) => {
              console.log('Email enviado', response.status, response.text);
              setName('');
              setEmail('');
              setMessage('');
              alert('The message has been sent');
            },
            (err) => {
              console.log(err);
            },
          )
      : alert('Faild send email');
  }

  return (
    <PaddingContainer
      id="Contact"
      as={motion.div}
      variants={fadeInTopVariant}
      initial="hidden"
      whileInView="visible"
      onSubmit={sendEmail}
    >
      <Heading>MY CONTACT</Heading>
      <Titile>
        Contact <BlueText>Me Here</BlueText>
      </Titile>
      <SubPaddingContainer className="form">
        <FlexContainer
          as={motion.div}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
        >
          <ContactForm
            as={motion.div}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <PaddingForm>
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter your name"
                className="username"
                onChange={(e) => setName(e.target.value)}
              ></FormInput>
            </PaddingForm>

            <PaddingForm>
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your e-mail"
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>
            </PaddingForm>

            <PaddingForm>
              <FormLabel>Message:</FormLabel>
              <FormInput
                width="250px"
                as="textarea"
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
              ></FormInput>
            </PaddingForm>

            <FlexContainer>
              <MyButton>Send Message</MyButton>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </SubPaddingContainer>
    </PaddingContainer>
  );
}
