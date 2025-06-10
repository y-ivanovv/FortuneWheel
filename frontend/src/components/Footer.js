import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem;
  background: #111;
`;

const StyledLink = styled.a`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink
        href="https://github.com/y-ivanovv"
        target="_blank"
        rel="noopener noreferrer"
      >
        Иванов Юрий, 2025
      </StyledLink>
    </StyledFooter>
  );
}
