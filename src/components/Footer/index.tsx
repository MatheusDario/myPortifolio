import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

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
  type FormProps = z.infer<typeof schema>;

  const schema = z.object({
    name: z.string().min(1, 'Please submit a valid name'),
    email: z
      .string()
      .min(1, { message: 'This field has to be filled.' })
      .email('This is not a valid email.'),
    message: z.string().min(10, 'Please submit a valid message'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  const handleForm = (data: FormProps) => {
    function sendEmail() {
      const name = data.name;
      const email = data.email;
      const message = data.message;

      const templateParams = {
        from_name: name,
        email: email,
        message: message,
      };
      emailjs
        .send(
          'service_xhrq8qi',
          'template_aox06v8',
          templateParams,
          'RJGzVAQBWfSj_a6rt',
        )
        .then(
          (response) => {
            alert('The message has been sent');
          },
          (err) => {
            console.log(err);
          },
        );
    }
    return sendEmail();
  };

  return (
    <PaddingContainer
      id="Contact"
      as={motion.div}
      variants={fadeInTopVariant}
      initial="hidden"
      whileInView="visible"
    >
      <Heading>MY CONTACT</Heading>
      <Titile>
        Contact <BlueText>Me Here</BlueText>
      </Titile>
      <SubPaddingContainer onSubmit={handleSubmit(handleForm)} className="form">
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
                {...register('name')}
              ></FormInput>
              {errors.name?.message && (
                <ErrorField>{errors.name.message}</ErrorField>
              )}
            </PaddingForm>

            <PaddingForm>
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your e-mail"
                {...register('email')}
              ></FormInput>
              {errors.email?.message && (
                <ErrorField>{errors.email.message}</ErrorField>
              )}
            </PaddingForm>

            <PaddingForm>
              <FormLabel>Message:</FormLabel>
              <FormInput
                width="250px"
                as="textarea"
                placeholder="Enter your message"
                {...register('message')}
              ></FormInput>
              {errors.message?.message && (
                <ErrorField>{errors.message.message}</ErrorField>
              )}
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
