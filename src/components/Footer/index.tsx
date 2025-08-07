"use client";

import React from "react";
import Image from "next/image";

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
  StyledHr, // move the hr styles here
} from "./style";

const footerLinks = [
  {
    title: "Properties",
    links: [
      { label: "New Homes", href: "#" },
      { label: "Properties for Sale", href: "#" },
      { label: "Properties to Rent", href: "#" },
      { label: "Recently Sold", href: "#" },
      { label: "Recently Let", href: "#" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Sellers Guide", href: "#" },
      { label: "Buying Guide", href: "#" },
      { label: "Landlord Guide", href: "#" },
      { label: "Tenant Guide", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Book a Property Appraisal", href: "#" },
      { label: "Area Guides", href: "#" },
      { label: "Career", href: "#" },
    ],
  },
  {
    title: "More Info",
    links: [
      { label: "Terms & Fees", href: "#" },
      { label: "Druce Events", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <MainFooter as="footer" aria-label="Site Footer">
        <FooterContainer>
          <FooterGrid>
            <LogoSection>
              <Logo>
                <div>
                  <Image
                    src="/logo.png"
                    alt="Druce Logo"
                    width={160}
                    height={40}
                    priority
                    // add loading="eager" if necessary
                  />
                </div>
              </Logo>
            </LogoSection>

            {footerLinks.map(({ title, links }) => (
              <FooterColumn key={title} as="nav" aria-labelledby={`${title.toLowerCase()}-footer`}>
                <ColumnTitle id={`${title.toLowerCase()}-footer`}>{title}</ColumnTitle>
                <ColumnList>
                  {links.map(({ label, href }) => (
                    <ColumnItem key={label}>
                      <ColumnLink href={href}>{label}</ColumnLink>
                    </ColumnItem>
                  ))}
                </ColumnList>
              </FooterColumn>
            ))}
          </FooterGrid>
        </FooterContainer>
      </MainFooter>

      <BottomFooter>
        <BottomContent>
          <ContactInfo as="address" aria-label="Contact information">
            <ContactItem>
              <MapPin aria-hidden="true" />
              <span>
                Montpelier House, 106 Brompton Road, Knightsbridge, London, SW3 1JJ
              </span>
            </ContactItem>
            <ContactItem>
              <Phone aria-hidden="true" />
              <a href="tel:+442071836592" aria-label="Call Druce +44 207 183 6592">
                +44 207 183 6592
              </a>
            </ContactItem>
            <ContactItem>
              <Mail aria-hidden="true" />
              <a href="mailto:info@druce.com" aria-label="Email Druce info@druce.com">
                info@druce.com
              </a>
            </ContactItem>
          </ContactInfo>

          <StyledHr aria-hidden="true" />

          <FooterBottom>
            <LeftSection>
              <Copyright>
                © 2024 Druce & Co International Ltd. All rights reserved. Druce & Co International Ltd. Incorporated and registered in England and Wales.
                <br />
                Registration Number: 13695268. Registered Office: Montpelier House 106 Brompton Road, Knightsbridge, London, England, SW3 1JJ
              </Copyright>
              <LegalLinks>
                <LegalLink href="#" aria-label="Terms of Use">
                  Terms of Use
                </LegalLink>
                <LegalLink href="#" aria-label="Privacy Policy">
                  Privacy Policy
                </LegalLink>
                <LegalLink href="#" aria-label="Cookies Policy">
                  Cookies Policy
                </LegalLink>
              </LegalLinks>
            </LeftSection>

            <RightSection>
              <SocialLinks aria-label="Social media links">
                <SocialText>CONNECT WITH US</SocialText>
                {socialLinks.map(({ Icon, href, label }) => (
                  <SocialIcon
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${label} page`}
                  >
                    <Icon aria-hidden="true" />
                  </SocialIcon>
                ))}
              </SocialLinks>

              <Affiliations aria-label="Affiliations">
                <AffiliationText>AFFILIATIONS</AffiliationText>
                <AffiliationLogos>
                  <AffiliationLogo
                    src="/se.png"
                    alt="Sustainable Energy Affiliation Logo"
                    width={50}
                    height={50}
                  />
                  <AffiliationLogo
                    src="/by.png"
                    alt="Better You Affiliation Logo"
                    width={50}
                    height={50}
                  />
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
