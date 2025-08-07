import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  background: #00284b;
  border-bottom: 1px solid #cd9b4b;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 40px 40px 40px 40px;
  max-width: 100%;
  margin: 2rem auto 0rem auto;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 24px;
  }
`;

export const FormSection = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 24px 0;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 98%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
`;

export const Input = styled.input`
  width: 90%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:focus {
    outline: none;
    border-color: #4a69bd;
    background: rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;

  &:focus {
    outline: none;
    border-color: #4a69bd;
    background: rgba(255, 255, 255, 0.2);
  }

  option {
    color: black;
    background: white;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: vertical;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:focus {
    outline: none;
    border-color: #4a69bd;
    background: rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #4a69bd;
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background: #cd9b4b;
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  padding: 14px;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;

  &:hover {
    background: #8d6d3a;
  }
`;
