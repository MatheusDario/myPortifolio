import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaddingContainer = styled.footer`
  padding-top: 6%;
  padding-bottom: 7%;
  margin-top: 13%;
`;

export const SubPaddingContainer = styled.form``;

export const PaddingForm = styled.div`
  padding-bottom: 2rem;
`;

export const Heading = styled.h3`
  text-align: center;
  margin: auto;
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const Titile = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.superLarge};
  margin: auto;
  padding-top: 1rem;
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryLight};
`;

export const MyButton = styled.button`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContactForm = styled.form`
  padding-top: 5%;
  width: 40%;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 90%;
    margin: auto;
  }
`;

export const FormLabel = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const ErrorField = styled.p`
  font-size: 9pt;
  padding-top: 10px;
  color: #FF4136;
  font-style: italic;
`;
