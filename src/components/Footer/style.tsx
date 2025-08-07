import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
`;

export const MainFooter = styled.div`
  background: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.white};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const LogoSection = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
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
  background: ${({ theme }) => theme.colors.footerHighlight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.footerBackground};
    border-radius: 50% 0;
    transform: rotate(45deg);
  }
`;

export const LogoText = styled.img``;

export const LogoTagline = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #b8c5d1;
  margin-top: 0.5rem;
`;

export const FooterColumn = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:nth-child(n + 3) {
      margin-top: 1rem;
    }
  }
`;

export const ColumnTitle = styled.h4`
  color: ${({ theme }) => theme.colors.footerHighlight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
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
  color: ${({ theme }) => theme.colors.footerText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.footerHighlight};
  }
`;

export const BottomFooter = styled.div`
  background: ${({ theme }) => theme.colors.footerBottomBackground};
  color: ${({ theme }) => theme.colors.footerBottomText};
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
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
    color: ${({ theme }) => theme.colors.footerBottomText};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const Copyright = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.footerCopyright};
  margin-bottom: 1rem;
  line-height: 1.4;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const LegalLink = styled.a`
  color: ${({ theme }) => theme.colors.footerBottomText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.footerBottomText};
  margin-right: 0.5rem;
  font-weight: 600;
`;

export const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.footerBottomText};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.footerHighlight};
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
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.footerBottomText};
  font-weight: 600;
`;

export const AffiliationLogos = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AffiliationLogo = styled.img``;

export const StyledHr = styled.hr`
  width: 100%;
  margin: 0 auto;
  transform: translateY(-15px);
  border: 1px solid #cd9b4b;
  background-color: transparent; /* to avoid default hr background */
  height: 1px; /* ensures consistent thickness */
  border-style: solid;
  border-width: 1px 0 0 0;
`;