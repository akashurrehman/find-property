"use client";

import styled from "styled-components";

export const TopBar = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.headerText};
  position: relative;
  z-index: 100;
`;

export const HeaderTopRow = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
  padding: 0.5rem 0;
`;

export const HeaderBottomRow = styled.div`
  padding: 0.5rem 0;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 0.5rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const AppraisalButton = styled.button`
  background-color: ${({ theme }) => theme.colors.footerHighlight};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 2px;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #c19b26;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  img {
    height: auto;
    max-height: 45px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      max-height: 30px;
    }
    position: static;
    transform: none;
    left: auto;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0.5rem;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.inputBackground};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Nav = styled.nav<{ $mobileOpen?: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.mobileNavBackground};
    padding: 10px;
    box-shadow: ${({ theme }) => theme.shadow.light};
    gap: 0;
    display: ${({ $mobileOpen }) => ($mobileOpen ? "flex" : "none")};
    justify-content: flex-start;
  }
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
  white-space: nowrap;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.navHover};
  }

  @media (max-width: 1024px) {
    padding: 10px 2rem;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};

    &:hover {
      background-color: ${({ theme }) => theme.colors.inputBackground};
      border-bottom-color: transparent;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;


export const LanguageSelector = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const UserIcon = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.overlayBackground};
  z-index: 50;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  background: ${({ theme }) => theme.colors.searchBarBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
  padding: 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.5rem 0;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  gap: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
  border-right: none;
  border-radius: 4px 0 0 4px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.headerBackground};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.colors.headerBackground};
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.65rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
  border-left: none;
  border-right: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  min-width: 300px;
  background: ${({ theme }) => theme.colors.white};
  height: 45px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.headerBackground};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 150px;
    padding: 0.6rem 0.8rem;
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.footerHighlight};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 1.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 0 4px 4px 0;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  height: 48px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.submitHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
    font-size: 0.7rem;
  }
`;