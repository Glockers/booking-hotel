import styled from 'styled-components'
import {FC} from "react";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10rem;
  background-color: #333;
  color: #fff;
  flex: 0 0 auto;
  padding: 30px;

`

const FooterText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

const ContactInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const ContactIcon = styled.i`
  font-size: 1.5rem;
`

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`


const Footer: FC = (): JSX.Element => {
    return (
        <FooterContainer>
            <FooterText>© 2023 My App. All rights reserved.</FooterText>
            <ContactInfo>
                <ContactIcon className='fas fa-envelope'/>
                <ContactLink href='gmail:glockerwork@gmail.co'>
                    glockerwork@gmail.com
                </ContactLink>
            </ContactInfo>
            <ContactInfo>
                <ContactIcon className='fas fa-phone'/>
                <ContactLink href='tel:+375256656131'>+375 (25) 665-61-31</ContactLink>
            </ContactInfo>
        </FooterContainer>
    )
}

export default Footer
