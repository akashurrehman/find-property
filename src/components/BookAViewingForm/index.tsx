"use client";
import React, { useState, useCallback } from "react";
import {
  Wrapper,
  ContentSection,
  Title,
  Subtitle,
  FormSection,
  Form,
  Label,
  Input,
  FullWidth,
  Select,
  Divider,
  CheckboxInput,
  SubmitButton,
  TextArea,
  CheckboxWrapper,
} from "./style";
import { FormData } from "../../types/FormData";

const initialFormState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  lookingTo: "",
  message: "",
  newsletter: false,
  terms: false,
};

const BookAViewingForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (values: FormData) => {
    const newErrors: Record<string, string> = {};
    if (!values.firstName.trim()) newErrors.firstName = "First name is required";
    if (!values.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!values.phone.trim()) newErrors.phone = "Phone number is required";
    if (!values.lookingTo) newErrors.lookingTo = "Please select an option";
    if (!values.terms) newErrors.terms = "You must accept the terms";
    return newErrors;
  };

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value, type } = e.target;

      setForm((prev) => {
        if (type === "checkbox") {
          const { checked } = e.target as HTMLInputElement;
          return { ...prev, [name]: checked };
        }
        return { ...prev, [name]: value };
      });

      // Clear error on change
      setErrors((prev) => {
        if (prev[name]) {
          const { [name]: _, ...rest } = prev;
          return rest;
        }
        return prev;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (submitting) return; // prevent multiple submits

      const validationErrors = validate(form);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setSubmitting(true);

      // Simulate async submission
      setTimeout(() => {
        console.log("Form Submitted:", form);
        setSubmitting(false);
        setForm(initialFormState);
      }, 1000);
    },
    [form, submitting]
  );

  return (
    <Wrapper>
      <ContentSection>
        <Title>Book A Viewing</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Subtitle>
      </ContentSection>

      <FormSection>
        <Form onSubmit={handleSubmit} noValidate aria-describedby="form-error">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "error-firstName" : undefined}
              autoComplete="given-name"
              type="text"
            />
            {errors.firstName && (
              <span role="alert" id="error-firstName" style={{ color: "red" }}>
                {errors.firstName}
              </span>
            )}
          </div>

          <div>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "error-lastName" : undefined}
              autoComplete="family-name"
              type="text"
            />
            {errors.lastName && (
              <span role="alert" id="error-lastName" style={{ color: "red" }}>
                {errors.lastName}
              </span>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "error-email" : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <span role="alert" id="error-email" style={{ color: "red" }}>
                {errors.email}
              </span>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "error-phone" : undefined}
              autoComplete="tel"
            />
            {errors.phone && (
              <span role="alert" id="error-phone" style={{ color: "red" }}>
                {errors.phone}
              </span>
            )}
          </div>

          <FullWidth>
            <Label htmlFor="lookingTo">I am looking to:</Label>
            <Select
              id="lookingTo"
              name="lookingTo"
              value={form.lookingTo}
              onChange={handleChange}
              required
              aria-invalid={!!errors.lookingTo}
              aria-describedby={errors.lookingTo ? "error-lookingTo" : undefined}
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
              <option value="invest">Invest</option>
            </Select>
            {errors.lookingTo && (
              <span role="alert" id="error-lookingTo" style={{ color: "red" }}>
                {errors.lookingTo}
              </span>
            )}
          </FullWidth>

          <FullWidth>
            <Label htmlFor="message">Message (optional)</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Type your message..."
              value={form.message}
              onChange={handleChange}
            />
          </FullWidth>

          <FullWidth>
            <Divider />
            <CheckboxWrapper>
              <CheckboxInput
                type="checkbox"
                id="terms"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                required
                aria-invalid={!!errors.terms}
                aria-describedby={errors.terms ? "error-terms" : undefined}
              />
              <Label htmlFor="terms" tabIndex={0} style={{ cursor: "pointer" }}>
                I accept the Terms
              </Label>
            </CheckboxWrapper>
            {errors.terms && (
              <span role="alert" id="error-terms" style={{ color: "red" }}>
                {errors.terms}
              </span>
            )}

            <CheckboxWrapper>
              <CheckboxInput
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
              />
              <Label
                htmlFor="newsletter"
                tabIndex={0}
                style={{ cursor: "pointer" }}
              >
                I would like to opt-in to receive Druce&apos;s monthly newsletter.
              </Label>
            </CheckboxWrapper>
          </FullWidth>

          <SubmitButton type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting ? "Submitting..." : "SUBMIT"}
          </SubmitButton>
        </Form>
      </FormSection>
    </Wrapper>
  );
};

export default BookAViewingForm;
