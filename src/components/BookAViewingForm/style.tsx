import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.formBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.formBorder};
  box-shadow: ${({ theme }) => theme.shadow.light};
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 100%;
  margin: 2rem auto 0 auto;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  padding-right: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const FormSection = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  width: 98%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

export const Input = styled.input`
  width: 90%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.highlight};
    background: ${({ theme }) => theme.colors.inputFocusBackground};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.white};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.highlight};
    background: ${({ theme }) => theme.colors.inputFocusBackground};
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
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.highlight};
    background: ${({ theme }) => theme.colors.inputFocusBackground};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.colors.checkboxAccent};
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background: ${({ theme }) => theme.colors.submitBackground};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: background 0.2s;
  margin-top: ${({ theme }) => theme.spacing.xs};

  &:hover {
    background: ${({ theme }) => theme.colors.submitHover};
  }
`;
