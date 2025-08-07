"use client";
import React from "react";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

import {
  FooterWrapper,
  MainFooter,
  FooterContainer,
  FooterGrid,
  LogoSection,
  Logo,
  LogoText,
  FooterColumn,
  ColumnTitle,
  ColumnList,
  ColumnItem,
  ColumnLink,
  FooterBottom,
  SocialText,
  SocialLinks,
  RightSection,
  LeftSection,
  Copyright,
  BottomFooter,
  ContactItem,
  BottomContent,
  SocialIcon,
  Affiliations,
  AffiliationLogos,
  AffiliationLogo,
  AffiliationText,
  ContactInfo,
  LegalLinks,
  LegalLink,
} from "./style";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <MainFooter>
        <FooterContainer>
          <FooterGrid>
            <LogoSection>
              <Logo>
                <div>
                  <LogoText src="/logo.png" alt="Logo Text" />
                </div>
              </Logo>
            </LogoSection>

            <FooterColumn>
              <ColumnTitle>Properties</ColumnTitle>
              <ColumnList>
                <ColumnItem>
                  <ColumnLink href="#">New Homes</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Properties for Sale</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Properties to Rent</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Recently Sold</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Recently Let</ColumnLink>
                </ColumnItem>
              </ColumnList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Insights</ColumnTitle>
              <ColumnList>
                <ColumnItem>
                  <ColumnLink href="#">Sellers Guide</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Buying Guide</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Landlord Guide</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Tenant Guide</ColumnLink>
                </ColumnItem>
              </ColumnList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>About Us</ColumnTitle>
              <ColumnList>
                <ColumnItem>
                  <ColumnLink href="#">Book a Property Appraisal</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Area Guides</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Career</ColumnLink>
                </ColumnItem>
              </ColumnList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>More Info</ColumnTitle>
              <ColumnList>
                <ColumnItem>
                  <ColumnLink href="#">Terms & Fees</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Druce Events</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">FAQ</ColumnLink>
                </ColumnItem>
                <ColumnItem>
                  <ColumnLink href="#">Blog</ColumnLink>
                </ColumnItem>
              </ColumnList>
            </FooterColumn>
          </FooterGrid>
        </FooterContainer>
      </MainFooter>

      <BottomFooter>
        <BottomContent>
          <ContactInfo>
            <ContactItem>
              <MapPin />
              <span>
                Montpelier House, 106 Brompton Road, Knightsbridge, London, SW3
                1JJ
              </span>
            </ContactItem>
            <ContactItem>
              <Phone />
              <span>+ 44 207 183 6592</span>
            </ContactItem>
            <ContactItem>
              <Mail />
              <span>info@druce.com</span>
            </ContactItem>
          </ContactInfo>
          <hr
            style={{
              width: "100%",
              margin: "0 auto",
              transform: "translateY(-15px)",
              border: "1px solid #CD9B4B",
            }}
          />
          <FooterBottom>
            <LeftSection>
              <Copyright>
                © 2024 Druce & Co International Ltd. All rights reserved. Druce
                & Co International Ltd. Incorporated and registered in England
                and Wales.
                <br />
                Registration Number: 13695268. Registered Office: Montpelier
                House 106 Brompton Road, Knightsbridge, London, England, SW3 1JJ
              </Copyright>
              <LegalLinks>
                <LegalLink href="#">Terms of Use</LegalLink>
                <LegalLink href="#">Privacy Policy</LegalLink>
                <LegalLink href="#">Cookies Policy</LegalLink>
              </LegalLinks>
            </LeftSection>

            <RightSection>
              <SocialLinks>
                <SocialText>CONNECT WITH US</SocialText>
                <SocialIcon href="#">
                  <Facebook />
                </SocialIcon>
                <SocialIcon href="#">
                  <Instagram />
                </SocialIcon>
                <SocialIcon href="#">
                  <Twitter />
                </SocialIcon>
                <SocialIcon href="#">
                  <Linkedin />
                </SocialIcon>
                <SocialIcon href="#">
                  <Youtube />
                </SocialIcon>
              </SocialLinks>

              <Affiliations>
                <AffiliationText>AFFILIATIONS</AffiliationText>
                <AffiliationLogos>
                  <AffiliationLogo src="/se.png" />
                  <AffiliationLogo src="/by.png" />
                </AffiliationLogos>
              </Affiliations>
            </RightSection>
          </FooterBottom>
        </BottomContent>
      </BottomFooter>
    </FooterWrapper>
  );
};

export default Footer;
