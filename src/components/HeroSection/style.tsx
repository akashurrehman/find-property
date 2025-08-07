import styled from "styled-components";
export const CarouselContainer = styled.div`
  max-width: 120%;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 40px;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const SideImage = styled.div<{ $isLeft?: boolean }>`
  width: 200px;
  height: 300px;
  border-radius: 8px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainCarousel = styled.div`
  flex: 1;
  position: relative;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 8px;
  }
`;

export const CarouselImage = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transition: all 0.5s ease;

  &:hover {
    transform: ${(props) => (props.$isActive ? "scale(1.02)" : "scale(1)")};
  }
`;

export const ContentSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
  }
`;

export const PropertyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const PropertyName = styled.h3`
  font-size: clamp(20px, 3vw, 24px);
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
  font-family: "Arial", sans-serif;
`;

export const PropertyDescription = styled.p`
  color: #4a69bd;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.6;
  margin-bottom: 20px;
  width: 50%;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Dot = styled.button<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.$isActive ? "#4a69bd" : "#ccc")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a69bd;
    transform: scale(1.2);
  }
`;

export const BookButton = styled.button`
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #34495e;
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

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const SlideCounter = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 12px;
    bottom: 10px;
    right: 10px;
  }
`;
