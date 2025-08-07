"use client";

import React, { useState } from "react";
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
} from "./style";
import { FaUserCircle, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <TopBar>
        <Container>
          <LogoContainer>
            <Image
              src="/logo.png"
              alt="Druce"
              width={120}
              height={40}
              priority
            />
          </LogoContainer>

          <NavWrapper>
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </MobileMenuButton>

            <Nav $mobileOpen={isMobileMenuOpen}>
              <NavItem href="#about">ABOUT DRUCE</NavItem>
              <NavItem href="#find">FIND A PROPERTY</NavItem>
              <NavItem href="#homes">NEW HOMES</NavItem>
              <NavItem href="#services">HOME SERVICES</NavItem>
              <NavItem href="#insights">INSIGHTS</NavItem>
              <NavItem href="#contact">CONTACT US</NavItem>
              <NavItem href="#careers">CAREERS</NavItem>
            </Nav>
          </NavWrapper>

          <RightSection>
            <AppraisalButton>ARRANGE A PROPERTY APPRAISAL</AppraisalButton>
            <LanguageSelector>UK | EN</LanguageSelector>
            <UserIcon>
              <FaUserCircle size={20} />
            </UserIcon>
            <IconButton>
              <FaSearch size={16} />
            </IconButton>
          </RightSection>
        </Container>
      </TopBar>

      {isMobileMenuOpen && (
        <Overlay onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <SearchBar>
        <Container>
          <RadioGroup>
            <RadioLabel>
              <RadioInput type="radio" name="property-type" defaultChecked />
              <span>BUY</span>
            </RadioLabel>
            <RadioLabel>
              <RadioInput type="radio" name="property-type" />
              <span>RENT</span>
            </RadioLabel>
          </RadioGroup>

          <SearchInput placeholder="Search by city, area or post code" />

          <SearchButton>SEARCH</SearchButton>
        </Container>
      </SearchBar>
    </>
  );
}
