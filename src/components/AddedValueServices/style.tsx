import styled from "styled-components";

export const ServicesContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 100vw;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: white;
  text-align: left;
  overflow: hidden;
  background: url("/back.png") no-repeat center center/cover;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 40px 20px;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 1240px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const FindOutMoreButton = styled.button`
  background: #2c3e50;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  letter-spacing: 1px;

  &:hover {
    background: #34495e;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.8rem;
  }
`;
