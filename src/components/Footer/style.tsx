
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
`;

export const MainFooter = styled.div`
  background: #1e3a5f;
  color: white;
  padding: 3rem 0 2rem;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: auto repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const LogoSection = styled.div`
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    margin-bottom: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #d4af37;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #1e3a5f;
    border-radius: 50% 0;
    transform: rotate(45deg);
  }
`;

export const LogoText = styled.img``;

export const LogoTagline = styled.div`
  font-size: 0.8rem;
  color: #b8c5d1;
  margin-top: 0.5rem;
`;

export const FooterColumn = styled.div`
  @media (max-width: 480px) {
    &:nth-child(n + 3) {
      margin-top: 1rem;
    }
  }
`;

export const ColumnTitle = styled.h4`
  color: #d4af37;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ColumnList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ColumnItem = styled.li`
  margin-bottom: 0.8rem;
`;

export const ColumnLink = styled.a`
  color: #e8f4fd;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #d4af37;
  }
`;

export const BottomFooter = styled.div`
  background: #e8f4fd;
  color: #1e3a5f;
  padding: 1.5rem 0;
`;

export const BottomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: #1e3a5f;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const Copyright = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const LegalLink = styled.a`
  color: #1e3a5f;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SocialText = styled.span`
  font-size: 0.8rem;
  color: #1e3a5f;
  margin-right: 0.5rem;
  font-weight: 600;
`;

export const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  background: #1e3a5f;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: #d4af37;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Affiliations = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AffiliationText = styled.span`
  font-size: 0.8rem;
  color: #1e3a5f;
  font-weight: 600;
`;

export const AffiliationLogos = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AffiliationLogo = styled.img``;
