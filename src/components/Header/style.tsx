"use client";

import styled from "styled-components";

export const TopBar = styled.header`
  background-color: #1e3a5f;
  color: white;
  position: relative;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    height: 60px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    height: auto;
    max-height: 35px;
    width: auto;
  }

  @media (max-width: 768px) {
    img {
      max-height: 30px;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Nav = styled.nav<{ $mobileOpen?: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #1e3a5f;
    padding: 10px;
    gap: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: ${({ $mobileOpen }) => ($mobileOpen ? "flex" : "none")};
  }
`;

export const NavItem = styled.a`
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;

  &:hover {
    border-bottom-color: #d4af37;
  }

  @media (max-width: 1024px) {
    padding: 10px 2rem;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      border-bottom-color: transparent;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const AppraisalButton = styled.button`
  background-color: #d4af37;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: 0.7rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 2px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c19b26;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LanguageSelector = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserIcon = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  background: #00284b80;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      gap: 0.5rem;
    }
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e3a5f;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  span {
    font-size: 0.8rem;
  }
`;

export const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #1e3a5f;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  min-width: 200px;
  background: white;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #1e3a5f;
    box-shadow: 0 0 0 2px rgba(30, 58, 95, 0.1);
  }

  @media (max-width: 640px) {
    min-width: 150px;
    padding: 0.6rem 0.8rem;
  }
`;

export const SearchButton = styled.button`
  background-color: #d4af37;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: #c19b26;
  }

  @media (max-width: 640px) {
    padding: 0.6rem 1rem;
    font-size: 0.7rem;
  }
`;
