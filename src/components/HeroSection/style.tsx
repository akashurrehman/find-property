import styled from "styled-components";

export const CarouselContainer = styled.div`
  max-width: 120%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: "Arial", sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const SideImage = styled.div<{ $isLeft?: boolean }>`
  width: 200px;
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  ${(props) =>
    props.$isLeft &&
    `
    order: -1;
  `}

  @media (max-width: 1024px) {
    width: 150px;
    height: 225px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MainCarousel = styled.div`
  flex: 1;
  position: relative;
  height: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.light};

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const CarouselImage = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);

  &:hover {
    transform: ${(props) => (props.$isActive ? "scale(1.02)" : "scale(1)")};
  }
`;

export const ContentSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const PropertyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
     width: 100%;
     flex-direction: column;
     text-align: center;
  }
`;

export const PropertyName = styled.h3`
  font-size: clamp(20px, 3vw, 24px);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: "Arial", sans-serif;
`;

export const PropertyDescription = styled.p`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  width: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
     width: 100%;
     flex-direction: column;
     text-align: center;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Dot = styled.button<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.highlight : "#ccc"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
    transform: scale(1.2);
  }
`;

export const BookButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 12px 24px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 30px;
    height: 30px;
  }
`;

export const SlideCounter = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 12px;
    bottom: ${({ theme }) => theme.spacing.sm};
    right: ${({ theme }) => theme.spacing.sm};
  }
`;
