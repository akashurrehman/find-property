"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import {
  TopBar,
  LogoContainer,
  Nav,
  NavItem,
  RightSection,
  LanguageSelector,
  AppraisalButton,
  UserIcon,
  MobileMenuButton,
  NavWrapper,
  Overlay,
  SearchBar,
  RadioGroup,
  RadioLabel,
  RadioInput,
  SearchInput,
  IconButton,
  SearchButton,
  Container,
  SearchContainer,
  HeaderTopRow,
  HeaderBottomRow,
  LeftSection
} from "./style";
import { FaUserCircle, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <TopBar>
        <HeaderTopRow>
          <Container>
            <LeftSection>
            </LeftSection>

            <LogoContainer>
              <Image
                src="/logo.png"
                alt="Druce Logo"
                width={175}
                height={60}
                priority
              />
            </LogoContainer>

            <RightSection>
              <AppraisalButton>ARRANGE A PROPERTY APPROVAL</AppraisalButton>
              <LanguageSelector aria-label="Language Selector">UK | EN</LanguageSelector>
              <UserIcon title="User Profile">
                <FaUserCircle size={20} />
              </UserIcon>
              <IconButton title="Search">
                <FaSearch size={16} />
              </IconButton>
            </RightSection>
          </Container>
        </HeaderTopRow>

        <HeaderBottomRow>
          <Container>
            <NavWrapper>
              <MobileMenuButton
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="main-navigation"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </MobileMenuButton>

              <Nav id="main-navigation" $mobileOpen={isMobileMenuOpen}>
                {[
                  { label: "ABOUT DRUCE", href: "#about" },
                  { label: "FIND A PROPERTY", href: "#find" },
                  { label: "DRUCE", href: "#druce" },
                  { label: "NEW HOMES", href: "#homes" },
                  { label: "HOME SERVICES", href: "#services" },
                  { label: "INSIGHTS", href: "#insights" },
                  { label: "CONTACT US", href: "#contact" },
                  { label: "CAREERS", href: "#careers" },
                ].map((link) => (
                  <NavItem key={link.href} href={link.href}>
                    {link.label}
                  </NavItem>
                ))}
              </Nav>
            </NavWrapper>
          </Container>
        </HeaderBottomRow>
      </TopBar>

      {isMobileMenuOpen && <Overlay onClick={closeMobileMenu} role="presentation" />}

      <SearchBar role="search">
        <SearchContainer>
          <RadioGroup role="radiogroup" aria-label="Property Type">
            <RadioLabel>
              <RadioInput type="radio" name="property-type" id="buy" defaultChecked />
              <span>BUY</span>
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="property-type" id="rent" />
              <span>RENT</span>
            </RadioLabel>
          </RadioGroup>

          <SearchInput
            type="search"
            placeholder="Search by city, area or post code"
            aria-label="Search by city, area or post code"
          />
          <SearchButton type="submit">SEARCH</SearchButton>
        </SearchContainer>
      </SearchBar>
    </>
  );
};

export default Header;