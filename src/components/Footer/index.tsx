import {
  BlueText,
  ContactForm,
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
  return (
    <PaddingContainer id="Contact">
      <Heading>MY CONTACT</Heading>
      <Titile>
        Contact <BlueText>Me Here</BlueText>
      </Titile>
      <SubPaddingContainer>
        <FlexContainer>
          <ContactForm>
            <PaddingForm>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" placeholder="Enter your name"></FormInput>
            </PaddingForm>

            <PaddingForm>
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your e-mail"
              ></FormInput>
            </PaddingForm>

            <PaddingForm>
              <FormLabel>Message:</FormLabel>
              <FormInput
                width="250px"
                as="textarea"
                placeholder="Enter your message"
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
