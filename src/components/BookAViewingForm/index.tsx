"use client";
import React, { useState } from "react";
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  lookingTo: string;
  message: string;
  newsletter: boolean;
  terms: boolean;
}

export default function BookAViewingForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lookingTo: "",
    message: "",
    newsletter: false,
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

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
        <Form onSubmit={handleSubmit} noValidate>
          <div>
            <Label>First name</Label>
            <Input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Last name</Label>
            <Input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Phone number</Label>
            <Input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <FullWidth>
            <Label>I am looking to:</Label>
            <Select
              name="lookingTo"
              value={form.lookingTo}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
              <option value="invest">Invest</option>
            </Select>
          </FullWidth>

          <FullWidth>
            <Label>Message (optional)</Label>
            <TextArea
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
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                required
              />
              <span>I accept the Terms</span>
            </CheckboxWrapper>

            <CheckboxWrapper>
              <CheckboxInput
                type="checkbox"
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
              />
              <span>
                I would like to opt-in to receive Druce's monthly newsletter.
              </span>
            </CheckboxWrapper>
          </FullWidth>

          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </Form>
      </FormSection>
    </Wrapper>
  );
}
