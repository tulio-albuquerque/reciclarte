import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-grey-50);
  padding: 4px;
  border-top: 1px solid var(--color-grey-50);

  display: flex;
  flex-direction: column;
  gap: 1vh;
  @media (min-width: 700px) {
    padding: 8px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  img {
    width: clamp(75px, 285px, 300px);
    height: 75px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid var(--color-green-80);
    border-radius: 0;
    padding: 0.25rem;

    hr {
      border: none;
      border-top: 2px solid var(--color-orange-70);
      width: 80%;
    }

    @media (min-width: 700px) {
      justify-content: space-between;
      width: 35%;
    }
  }

  .footerHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    color: var(--color-green-90);

    section {
      border: none;
      display: flex;
      flex-direction: row;
      gap: 2.3vw;
    }

    .active {
      color: var(--color-green-80);
      font-weight: 800;
    }

    @media (min-width: 700px) {
      justify-content: space-between;
      width: 83%;
      max-width: 1240px;

      section {
        width: 30%;
      }
    }
  }

  .presentation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .objective {
      border: 1px transparent;
      width: 100%;
      text-align: justify;
      text-justify: inter-word;
      padding: 0;
      height: fit-content;
    }

    @media (min-width: 700px) {
      flex-direction: row;
    }
  }

  p,
  a,
  span {
    color: var(--color-green-80);
    font-size: var(--font-size-12);
    font-weight: 400;
    text-decoration: none;
    text-align: justify;
    text-justify: inter-word;
  }

  a {
    color: var(--color-green-70);
    text-transform: uppercase;
  }

  span {
    font-size: calc(var(--font-size-16) * 0.5);
  }

  h4 {
    color: var(--color-green-90);
    font-size: var(--font-size-14);
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }
`;
