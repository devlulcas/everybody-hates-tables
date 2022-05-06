import styled from "styled-components";

export const FancyHeader = styled.header`
  background-color: rgb(15 23 42);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  a {
    background-color: rgb(51 65 85);
    color: rgb(255 255 255);
    text-decoration: none;
    padding: 1rem 2rem;
    font-size: 2rem;
  }
`;
