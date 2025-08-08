import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.formBackground};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  height: 160px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    #e9ecef 50%,
    #6c8eb5 100%
  );
  position: relative;
  overflow: hidden;
  width: 99%;
  margin: 0 auto;
  top: 0.51%;
  border-radius: 0;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -10%;
    width: 40%;
    height: 140%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    transform: rotate(15deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: -10%;
    right: -20%;
    width: 60%;
    height: 120%;
    background: linear-gradient(
      -45deg,
      rgba(108, 142, 181, 0.6) 0%,
      rgba(108, 142, 181, 0.2) 100%
    );
    transform: rotate(-15deg);
  }
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.3;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: #2563eb;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;

    svg {
      transform: translateX(2px);
    }
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }
`;
