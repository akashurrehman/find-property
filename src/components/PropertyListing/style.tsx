import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const FiltersBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const ImageDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
`;

export const ImageDot = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255,255,255,0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
`;
export const FilterInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  color: #666;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #4a69bd;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  color: #666;
  min-width: 120px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #4a69bd;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  color: #666;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #4a69bd;
  }
`;

export const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  @media (max-width: 811px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const PropertyCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const PropertyImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

export const PropertyImageSlider = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
`;

export const PropertyImage = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageCounter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

export const ActionButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActionButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
  }
`;

export const PropertyInfo = styled.div`
  padding: 16px;
`;

export const PropertyTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 4px;
`;

export const PropertyAddress = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const PropertyDetails = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

export const PropertyDetail = styled.span`
  font-size: 12px;
  color: #666;
  background-color: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const PropertyPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #4a69bd;
  margin-top: 8px;
`;

export const ViewMoreButton = styled.button`
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }
`;
