import styled from "styled-components";
export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #00284b;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  height: 160px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #6c8eb5 100%);
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
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

export const CardDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563eb;
  font-size: 0.9rem;
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
