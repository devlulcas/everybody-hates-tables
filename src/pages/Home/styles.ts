import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
`;

export const Welcome = styled.div`
  text-align: center;

  h1 {
    font-size: 5rem;
  }

  a {
    text-decoration: none;
    background-color: rgb(5 150 105);
    padding: 1rem;
    font-size: 2rem;

    :hover {
      background-color: rgb(4 120 87);
    }
  }
`;
